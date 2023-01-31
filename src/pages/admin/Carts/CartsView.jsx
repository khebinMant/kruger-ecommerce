import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import '../AdminMainPage.css';
import { getAllCarts } from "../../../helpers/carts/getAllCarts";
import Loading from "../../../components/Loading";
import { ConfirmPopup } from 'primereact/confirmpopup'; // To use <ConfirmPopup> tag
import { confirmPopup } from 'primereact/confirmpopup'; // To use confirmPopup method
import { updateCart } from "../../../helpers/carts/updateCart";
import { deleteCart } from "../../../helpers/carts/deleteCart";

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
  const [deleteCartDialog, setDeleteCartDialog] = useState(false);
  const [deleteCartsDialog, setDeleteCartsDialog] = useState(false);
  const [cart, setCart] = useState(emptyCart);
  const [selectedCarts, setSelectCarts] = useState(null);
  const toastState = useRef(null);



  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  useEffect(() => {
    getCarts();
  }, []);

 
  const updateCartStatus = async (cart, newStatus) => {
    let responseUpdate;
    let _cart = {
      id:cart.id,
      orderId:cart.order.id,
      userId:cart.user.id,
      status:newStatus
    }
    responseUpdate = await Promise.resolve(updateCart(_cart))
    getCarts();
  };

  const removeCart = async (cart) => {
    const responseDeleteCart = await Promise.resolve(deleteCart(cart));
    return responseDeleteCart;
  };

  const getCarts = async () => {
    const responseCarts = await Promise.resolve(getAllCarts());
    setCarts(responseCarts);
    setIsLoading(false);
  };


  const hideDeleteCartDialog = () => {
    setDeleteCartDialog(false);
  };


  const hideDeleteCartsDialog = () => {
    setDeleteCartsDialog(false);
  };
 

  const confirmDeleteCart = (cart) => {
    setCart(cart);
    setDeleteCartDialog(true);
  };


  const deleteCartView = () => {
    const responseDeleteCart = removeCart(cart);
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

  const accept = (cart, newStatus) => {
    updateCartStatus(cart, newStatus)
    toast.current.show({ severity: 'info', summary: 'Estado cambiado', detail: `Has cambiado el estado de la orden a ${newStatus}`, life: 3000 });
  };

  const confirmUpdateCart = (event, cart, newStatus) => {
      confirmPopup({
          target: event.currentTarget,
          message: '¿Estas seguro que deseas continuar?',
          icon: 'pi pi-exclamation-triangle',
          accept:()=>accept(cart, newStatus),
          reject:()=>{}
      });
  };
  

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
          <ConfirmPopup />
          <Button 
              icon="pi pi-verified" 
              className="p-button-rounded p-button-success" 
              aria-label="Search"   
              title="Establecer como 'RECIBIDO'"
              onClick={(e)=>confirmUpdateCart(e, rowData, 'RECEIVED')}   
          />
        </div>
      )
    }
    if(rowData.status === 'PAID'){
      return (
        <div style={{display:'flex', flexDirection:'row'}}>
          <ConfirmPopup />
          <Button 
            icon="pi pi-telegram" 
            className="p-button-rounded p-button-info" 
            aria-label="Search"   
            title="Establecer como'EN VIAJE'"   
            onClick={(e)=>confirmUpdateCart(e, rowData, 'IN_TRAVEL')}   
          />
          <Button 
            icon="pi pi-verified" 
            className="p-button-rounded p-button-success" 
            aria-label="Search"   
            title="Establecer como'RECIBIDO'"   
            onClick={(e)=>confirmUpdateCart(e, rowData, 'RECEIVED')}   
          />
          <Button 
            icon="pi pi-times" 
            className="p-button-rounded p-button-danger" 
            aria-label="Search"   
            title="Establecer como 'CANCELADO'"  
            onClick={(e)=>confirmUpdateCart(e, rowData, 'CANCELED')}   
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

  const deleteCartDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteCartDialog}
      />
      <Button
        label="Si"
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
