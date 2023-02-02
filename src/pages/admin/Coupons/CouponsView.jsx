import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import '../AdminMainPage.css';
import { getAllCoupons } from "../../../helpers/coupons/getAllCoupons";
import Loading from "../../../components/Loading";
import { postCoupon } from "../../../helpers/coupons/postCoupon";
import { InputNumber } from 'primereact/inputnumber';
import { putCoupon } from "../../../helpers/coupons/putCoupon";
import { deleteCoupon } from "../../../helpers/coupons/deleteCoupon";

let emptyCoupon = {
  type: null,
  quantity:1
};

export const CouponsView = () => {

  const [coupons, setCoupons] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [couponDialog, setCouponDialog] = useState(false);
  const [deleteCouponDialog, setDeleteCouponDialog] = useState(false);
  const [deleteCouponsDialog, setDeleteCouponsDialog] = useState(false);
  const [coupon, setCoupon] = useState(emptyCoupon);
  const [selectedCoupons, setSelectCoupons] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const navigate = useNavigate();

  const types = [
    {
      name:'PERCENTAGE'
    },
    {
      name:'DIRECT'
    }
  ]

  useEffect(() => {
    getCoupons();
  }, []);

  const onTypeChange = (e) => {
    setSelectedType(e.value);
  }

  const createCoupon = async (coupon) => {
    const responsePostCoupon = await Promise.resolve(postCoupon(coupon));
    return responsePostCoupon;
  };

  const updateCoupon = async (coupon) => {
    const responsePutCoupon = await Promise.resolve(putCoupon(coupon));
    return responsePutCoupon;
  };

  const removeCoupon = async (couponId) => {
    const responseDeleteCoupon = await Promise.resolve(deleteCoupon(couponId));
    return responseDeleteCoupon;
  };



  const getCoupons = async () => {
    const responseCoupons = await Promise.resolve(getAllCoupons());
    setCoupons(responseCoupons);
    setIsLoading(false);
  };

  const openNew = () => {
    setCoupon(emptyCoupon);
    setSelectedType({});
    setSubmitted(false);
    setCouponDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setCouponDialog(false);
  };

  const hideDeleteCouponDialog = () => {
    setDeleteCouponDialog(false);
  };

  const hideDeleteCouponsDialog = () => {
    setDeleteCouponsDialog(false);
  };
  const saveCoupon = async () => {
      setSubmitted(true);

      let _coupons = [...coupons];
      let _coupon = { ...coupon };
      _coupon.type = selectedType.name;
      _coupon.quantity = _coupon.quantity;
      _coupon.status = 'NOT_USED';
      
      if (coupon.id) {
        const responsePutCoupon = updateCoupon(_coupon);
        if (responsePutCoupon) {
          const index = findIndexById(coupon.id);
          _coupons[index] = _coupon;
          toast.current.show({
            severity: "success",
            summary: "Genial!",
            detail: "Coupono actualizado",
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Algo salio mal!",
            detail: "No se pudo actualizar el cliente",
            life: 3000,
          });
        }
      } else {
        const responsePostCoupon = await createCoupon(_coupon);
        if (responsePostCoupon) {
          _coupon.id = responsePostCoupon.id;
          _coupon.code = responsePostCoupon.code
          _coupon.status = responsePostCoupon.status
          _coupon.created = responsePostCoupon.created
          _coupons.push(_coupon);
          toast.current.show({
            severity: "success",
            summary: "Genial!",
            detail: "Coupono creado",
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Algo salio mal!",
            detail: "No se pudo crear el cliente",
            life: 3000,
          });
        }
      }

      setCoupons(_coupons);
      setCouponDialog(false);
      setCoupon(emptyCoupon);

  };

  const editCoupon = (coupon) => {
    setCoupon({ ...coupon });
    if(coupon.type === 'PERCENTAGE'){
      setSelectedType({name:'PERCENTAGE'})
    }
    else{
      setSelectedType({name:'DIRECT'})
    }
    setCouponDialog(true);
  };

  const confirmDeleteCoupon = (coupon) => {
    setCoupon(coupon);
    setDeleteCouponDialog(true);
  };

  const deleteCouponView = () => {
    const responseDeleteCoupon = removeCoupon(coupon.id);
    if (responseDeleteCoupon) {
      let _coupons = coupons.filter((val) => val.id !== coupon.id);
      setCoupons(_coupons);
      setDeleteCouponDialog(false);
      setCoupon(emptyCoupon);
      toast.current.show({
        severity: "success",
        summary: "Eliminado!",
        detail: "Coupono eliminado",
        life: 3000,
      });
    } else {
      toast.current.show({
        severity: "error",
        summary: "Algo salio mal!",
        detail: "No se pudo eliminar el cliente",
        life: 3000,
      });
    }
  };

  const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < coupons.length; i++) {
      if (coupons[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const confirmDeleteSelected = () => {
    setDeleteCouponsDialog(true);
  };

  const deleteSelectedCoupons = () => {
    let _coupons = coupons.filter((val) => !selectedCoupons.includes(val));
    setCoupons(_coupons);
    setDeleteCouponsDialog(false);
    setSelectCoupons(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Coupons Deleted",
      life: 3000,
    });
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _coupon = { ...coupon };
    _coupon[`${name}`] = val;

    setCoupon(_coupon);
  };
  
  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Añadir"
          icon="pi pi-plus"
          className="p-button-success mr-2 p_btn_add"
          onClick={openNew}
        />
        {/* <Button
          label="Eliminar"
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedCoupons || !selectedCoupons.length}
        /> */}
      </React.Fragment>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          onClick={() => editCoupon(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteCoupon(rowData)}
        />
      </>
    );
  };

  const header = (
    <div className="table-header">
      <h5 className="mx-0 my-1">Administrar Cupones</h5>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Buscar..."
        />
      </span>
    </div>
  );
  const couponDialogFooter = (
    <>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Guardar"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveCoupon}
      />
    </>
  );
  const deleteCouponDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteCouponDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteCouponView}
      />
    </>
  );
  const deleteCouponsDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteCouponsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedCoupons}
      />
    </>
  );

  return (
    <>
    {
      isLoading ? (
      <Loading />
    ) : (
      <div className="datatable-crud-demo">
        <Toast ref={toast} />
  
        <div className="card">
          <Toolbar className="mb-4" right={leftToolbarTemplate}></Toolbar>
  
          <DataTable
            ref={dt}
            value={coupons}
            selection={selectedCoupons}
            onSelectionChange={(e) => setSelectCoupons(e.value)}
            dataKey="id"
            paginator
            rows={8}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="{first} - {last} de {totalRecords} cupones"
            globalFilter={globalFilter}
            header={header}
            responsiveLayout="scroll"
          >
            {/* <Column
              selectionMode="multiple"
              headerStyle={{ width: "1rem" }}
              exportable={false}
            ></Column> */}
            <Column
              field="id"
              header="Id"
              sortable
              style={{ minWidth: "1rem" }}
            ></Column>
            <Column
              field="type"
              header="Tipo"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="quantity"
              header="Cantidad"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="code"
              header="Código"
              sortable
              style={{ minWidth: "0.5rem" }}
            ></Column>
            <Column
              field="status"
              header="Estado del cupón"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="created"
              header="Fecha de creación"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              header="Acciones"
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "8rem" }}
            ></Column>
          </DataTable>
        </div>
  
        <Dialog
          visible={couponDialog}
          style={{ width: "450px" }}
          header="Información del cupon"
          modal
          className="p-fluid"
          footer={couponDialogFooter}
          onHide={hideDialog}
        >
          <div className="field">
            <label htmlFor="couponName">Tipo de cupon</label>
            <Dropdown 
              value={selectedType} 
              options={types} 
              onChange={onTypeChange} 
              optionLabel="name" 
              placeholder="Tipo de descuento"   
            />
            {submitted && !selectedType && (
              <small className="p-error">El tipo es obligatorio.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="quantity">Cantidad</label>
            <InputText
              id="quantity"
              value={coupon.quantity}
              onChange={(e) => onInputChange(e, "quantity")}
              className={classNames({
                "p-invalid": submitted && !coupon.quantity,
              })}
            />
            {submitted && !coupon.quantity && (
              <small className="p-error">La cantidad es obligatoria.</small>
            )}
          </div>
          {
            coupon.type === null?
            <p style={{marginTop:'20px'}}>
              <b>*El código del cupón se generará automáticamente una vez creado</b>
            </p>
            :<></>
          }

        </Dialog>
  
        <Dialog
          visible={deleteCouponDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteCouponDialogFooter}
          onHide={hideDeleteCouponDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {coupon && (
              <span>
                Estas seguro que quiere eliminar: <b>{coupon.code}</b>?
              </span>
            )}
          </div>
        </Dialog>
  
        <Dialog
          visible={deleteCouponsDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteCouponsDialogFooter}
          onHide={hideDeleteCouponsDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {coupon && (
              <span>
                Estas seguro que deseas eliminar los cupones seleccionadas?
              </span>
            )}
          </div>
        </Dialog>
      </div>
    )
    }
    </>
  )
}
