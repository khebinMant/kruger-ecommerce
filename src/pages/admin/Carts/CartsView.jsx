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
import { getAllCarts } from "../../../helpers/carts/getAllCarts";
import Loading from "../../../components/Loading";
import { ConfirmPopup } from 'primereact/confirmpopup'; // To use <ConfirmPopup> tag

let emptyCart = {
  name: "",
  description: "",
  stock: "",
  price: "",
  category: null,
};

export const CartsView = () => {

  const [carts, setCarts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cartDialog, setCartDialog] = useState(false);
  const [deleteCartDialog, setDeleteCartDialog] = useState(false);
  const [deleteCartsDialog, setDeleteCartsDialog] = useState(false);
  const [cart, setCart] = useState(emptyCart);
  const [selectedCarts, setSelectCarts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, serCategories] = useState();
  const [visible, setVisible] = useState(false);
  const toastState = useRef(null);



  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCarts();
  }, []);

 
  const updateCart = async (cart,status) => {
    
    let responseUpdate;

    console.log(status)
    if(status === 'IN_TRAVEL'){
      //PONGO EN VIAJE
    }
    if(status === 'RECEIVED'){
      //PONGO COMO RECIBIDO
    }
    if(status === 'CANCELED'){
      //PONGO COMO CANCELADO
    }
    // const responsePutCart = await Promise.resolve(putCart(cart));
    // return responsePutCart;
  };

  const removeCart = async (cartId) => {
    // const responseDeleteCart = await Promise.resolve(deleteCart(cartId));
    // return responseDeleteCart;
  };

  const getCarts = async () => {
    const responseCarts = await Promise.resolve(getAllCarts());
    setCarts(responseCarts);
    setIsLoading(false);
  };

  const openNew = () => {
    setCart(emptyCart);
    setSubmitted(false);
    setCartDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setCartDialog(false);
  };

  const hideDeleteCartDialog = () => {
    setDeleteCartDialog(false);
  };

  const accept = () => {
    toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
  };

  const reject = () => {
      toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  };

  const confirmChangue = (event) => {
      confirmPopup({
          target: event.currentTarget,
          message: 'Are you sure you want to proceed?',
          icon: 'pi pi-exclamation-triangle',
          accept: accept(),
          reject
      });
  };

  const hideDeleteCartsDialog = () => {
    setDeleteCartsDialog(false);
  };
  const saveCart = async () => {
    setSubmitted(true);

    if (cart.name.trim()) {
      let _carts = [...carts];
      let _cart = { ...cart };
      if (cart.id) {
        const responsePutCart = updateCart(_cart);
        if (responsePutCart) {
          const index = findIndexById(cart.id);
          _carts[index] = _cart;
          toast.current.show({
            severity: "success",
            summary: "Genial!",
            detail: "Carto actualizado",
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
        const responsePostCart = await createCart(_cart);
        if (responsePostCart) {
          _cart.id = responsePostCart.id;
          _carts.push(_cart);
          toast.current.show({
            severity: "success",
            summary: "Genial!",
            detail: "Carto creado",
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

      setCarts(_carts);
      setCartDialog(false);
      setCart(emptyCart);
    }
  };

  const editCart = (cart) => {
    setCart({ ...cart });
    setCartDialog(true);
  };

  const confirmDeleteCart = (cart) => {
    setCart(cart);
    setDeleteCartDialog(true);
  };


  const deleteCartView = () => {
    const responseDeleteCart = removeCart(cart.id);
    if (responseDeleteCart) {
      let _carts = carts.filter((val) => val.id !== cart.id);
      setCarts(_carts);
      setDeleteCartDialog(false);
      setCart(emptyCart);
      toast.current.show({
        severity: "success",
        summary: "Eliminado!",
        detail: "Carto eliminado",
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
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const confirmDeleteSelected = () => {
    setDeleteCartsDialog(true);
  };

  const deleteSelectedCarts = () => {
    let _carts = carts.filter((val) => !selectedCarts.includes(val));
    setCarts(_carts);
    setDeleteCartsDialog(false);
    setSelectCarts(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Carts Deleted",
      life: 3000,
    });
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _cart = { ...cart };
    _cart[`${name}`] = val;

    setCart(_cart);
  };

  const imageBodyTemplate = (rowData) => {

      return (
        <img
          src={`${rowData.user.imageUrl}`}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          alt={rowData.user.email}
          className="product-image"
        />
      );
  };

  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Eliminar"
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedCarts || !selectedCarts.length}
        />
      </React.Fragment>
    );
  };

  const chechMenuButtons = (rowData) =>{

  }

  const actionBodyTemplate = (rowData) => {

    if(rowData.status === 'RECEIVED'){
      return (
        <div style={{display:'flex', flexDirection:'row'}}>
          <Button
                icon="pi pi-trash"
                className="p-button-rounded p-button-warning"
                onClick={() => confirmDeleteCart(rowData)}
                title="Eliminar orden"   
          />
        </div>
      )
    }
    if(rowData.status === 'CANCELED'){
      return (
        <div style={{display:'flex', flexDirection:'row'}}>

          <Button
                icon="pi pi-trash"
                className="p-button-rounded p-button-warning"
                onClick={() => confirmDeleteCart(rowData)}
                title="Eliminar orden"   
          />
        </div>
      )
    }
    if(rowData.status === 'IN_TRAVEL'){
      return (
        <div style={{display:'flex', flexDirection:'row'}}>
          <Button 
              icon="pi pi-verified" 
              className="p-button-rounded p-button-success" 
              aria-label="Search"   
              title="Establecer como 'RECIBIDO'"
              onClick={()=>confirmUpdateCart(rowData,'RECEIVED')}   
          />
        </div>
      )
    }
    if(rowData.status === 'PAID'){
      return (
        <div style={{display:'flex', flexDirection:'row'}}>
          <Button 
            icon="pi pi-telegram" 
            className="p-button-rounded p-button-info" 
            aria-label="Search"   
            title="Establecer como'EN VIAJE'"   
            onClick={(e)=>confirmChangue(e)}   
          />
          <Button 
            icon="pi pi-verified" 
            className="p-button-rounded p-button-success" 
            aria-label="Search"   
            title="Establecer como'RECIBIDO'"   
            onClick={()=>updateCart(rowData,'RECEIVED')}   
          />
          <Button 
            icon="pi pi-times" 
            className="p-button-rounded p-button-danger" 
            aria-label="Search"   
            title="Establecer como 'CANCELADO'"  
            onClick={()=>updateCart(rowData,'CANCELED')}   
          />
        </div>
      )
    }
  };

  const header = (
    <div className="table-header">
      <h5 className="mx-0 my-1">Administrar Ordenes</h5>
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
  const cartDialogFooter = (
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
        onClick={saveCart}
      />
    </>
  );
  const deleteCartDialogFooter = (
    <>
      <Button
        label="Si"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteCartDialog}
      />
      <Button
        label="No"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteCartView}
      />
    </>
  );

  const deleteCartsDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteCartsDialog}
      />
      <Button
        label="Si"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedCarts}
      />
    </>
  );

  const changueCartStatusDialogFooter = (
    <>
      <Button
        label="Si"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteCartDialog}
      />
      <Button
        label="No"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteCartView}
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
        <Toast ref={toastState} />

        <div className="card">
          <Toolbar className="mb-4" right={leftToolbarTemplate}></Toolbar>
  
          <DataTable
            ref={dt}
            value={carts}
            selection={selectedCarts}
            onSelectionChange={(e) => setSelectCarts(e.value)}
            dataKey="id"
            paginator
            rows={8}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="{first} - {last} de {totalRecords} ordenes"
            globalFilter={globalFilter}
            header={header}
            responsiveLayout="scroll"
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "1rem" }}
              exportable={false}
            ></Column>
            <Column
              field="id"
              header="Id"
              sortable
              style={{ minWidth: "1rem" }}
            ></Column>
            <Column
              field="image"
              header="Cliente"
              body={imageBodyTemplate}
            ></Column>
            <Column
              field="user.firstName"
              header="Nombre"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="user.lastName"
              header="Apellido"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="status"
              header="Estado de la orden"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="order.subTotal"
              header="Subtotal de compra"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="order.totalPrice"
              header="Total de compra"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="order.shipmentDate"
              header="Fecha de compra"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="order.items.length"
              header="Cantidad de artículos adquiridos"
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
          visible={cartDialog}
          style={{ width: "450px" }}
          header="Información de la cart"
          modal
          className="p-fluid"
          footer={cartDialogFooter}
          onHide={hideDialog}
        >
          <div className="field">
            <label htmlFor="cartName">Cart name</label>
            <InputText
              id="cartName"
              value={cart.name}
              onChange={(e) => onInputChange(e, "cartName")}
              required
              autoFocus
              className={classNames({ "p-invalid": submitted && !cart.cartName })}
            />
            {submitted && !cart.name && (
              <small className="p-error">El Cart name es obligatorio.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="stock">Stock</label>
            <InputText
              id="stock"
              value={cart.stock}
              onChange={(e) => onInputChange(e, "stock")}
              className={classNames({
                "p-invalid": submitted && !cart.stock,
              })}
            />
            {submitted && !cart.stock && (
              <small className="p-error">El Stock es obligatoria.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="photoUrl">Foto</label>
            <InputTextarea
              id="photoUrl"
              value={cart.photoUrl}
              onChange={(e) => onInputChange(e, "photoUrl")}
              required
              rows={3}
              cols={20}
              className={classNames({
                "p-invalid": submitted && !cart.photoUrl,
              })}
            />
            {submitted && !cart.photoUrl && (
              <small className="p-error">La Foto es obligatoria es obligatoria.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="description">Descripción</label>
            <InputTextarea
              id="description"
              value={cart.description}
              onChange={(e) => onInputChange(e, "description")}
              required
              rows={3}
              cols={20}
              className={classNames({
                "p-invalid": submitted && !cart.description,
              })}
            />
            {submitted && !cart.description && (
              <small className="p-error">La descripción es obligatoria.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="category">Categoria</label>
            <Dropdown
              value={cart.category}
              required
              options={categories}
              onChange={(e) => onInputChange(e, "category")}
              optionLabel="name"
              placeholder="Selecciona la categoría"
            />
            {submitted && !cart.category && (
              <small className="p-error">La categoria es obligatoria.</small>
            )}
          </div>
        </Dialog>
  
        <Dialog
          visible={deleteCartDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteCartDialogFooter}
          onHide={hideDeleteCartDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {cart && (
              <span>
                Estas seguro que quiere eliminar: <b>{cart.name}</b>?
              </span>
            )}
          </div>
        </Dialog>
  
        <Dialog
          visible={deleteCartsDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteCartsDialogFooter}
          onHide={hideDeleteCartsDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {cart && (
              <span>
                Estas seguro que deseas eliminar los ordenes seleccionadas?
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
