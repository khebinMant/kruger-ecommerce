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
import { getReviews } from "../../../helpers/reviews/getReviews";
import { deleteReview } from "../../../helpers/reviews/deleteReview";
import Loading from "../../../components/Loading";

export const ReviewsView = () => {

  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userDialog, setReviewDialog] = useState(false);
  const [deleteReviewDialog, setDeleteReviewDialog] = useState(false);
  const [deleteReviewsDialog, setDeleteReviewsDialog] = useState(false);
  const [review, setReview] = useState();
  const [selectedReviews, setSelectReviews] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, serCategories] = useState();

  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAllReviews();
  }, []);

  const removeReview = async (reviewId) => {
    const responseDeleteReview = await Promise.resolve(deleteReview(reviewId));
    return responseDeleteReview;
  };


  const getAllReviews = async () => {
    const responseReviews = await Promise.resolve(getReviews());
    setReviews(responseReviews);
    setIsLoading(false);
  };


  const hideDialog = () => {
    setSubmitted(false);
    setReviewDialog(false);
  };

  const hideDeleteReviewDialog = () => {
    setDeleteReviewDialog(false);
  };

  const hideDeleteReviewsDialog = () => {
    setDeleteReviewsDialog(false);
  };


  const confirmDeleteReview = (review) => {
    setReview(review);
    setDeleteReviewDialog(true);
  };

  const deleteReviewInt = () => {
    const responseDeleteProduct = removeReview(review.id);
    if (responseDeleteProduct) {
      let _products = reviews.filter((val) => val.id !== review.id);
      setReviews(_products);
      setDeleteReviewDialog(false);
      toast.current.show({
        severity: "success",
        summary: "Eliminado!",
        detail: "Producto eliminado",
        life: 3000,
      });
    } else {
      toast.current.show({
        severity: "error",
        summary: "Algo salio mal!",
        detail: "No se pudo eliminar el producto",
        life: 3000,
      });
    }
  };

  const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const confirmDeleteSelected = () => {
    setDeleteReviewsDialog(true);
  };

  const deleteSelectedReviews = () => {
    let _reviews = reviews.filter((val) => !selectedReviews.includes(val));
    setReviews(_reviews);
    setDeleteReviewsDialog(false);
    setSelectReviews(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Reviews Deleted",
      life: 3000,
    });
  };

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || "";
    let _user = { ...review };
    _user[`${name}`] = val;

    setReview(_user);
  };

  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Eliminar"
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedReviews || !selectedReviews.length}
        />
      </React.Fragment>
    );
  };


  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-external-link"
          className="p-button-rounded p-button-primary"
          onClick={() => navigate(`/product/${rowData.productId}`,{ replace: true })}
          title="Ir al producto"
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteReview(rowData)}
          title="Eliminar la reseña"
        />
      </>
    );
  };

  const header = (
    <div className="table-header">
      <h5 className="mx-0 my-1">Administrar Reseñas</h5>
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
  const userDialogFooter = (
    <>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
    </>
  );
  const deleteReviewDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteReviewDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteReviewInt}
      />
    </>
  );
  const deleteReviewsDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteReviewsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedReviews}
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
            value={reviews}
            selection={selectedReviews}
            onSelectionChange={(e) => setSelectReviews(e.value)}
            dataKey="id"
            paginator
            rows={8}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="{first} - {last} de {totalRecords} clientes"
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
              field="user.firstName"
              header="Usuaio que lo escribio"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="text"
              header="Descripción"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="productId"
              header="Id del producto"
              sortable
              style={{ minWidth: "0.5rem" }}
            ></Column>
            <Column
              field="created"
              header="Fecha de escritura"
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
          visible={deleteReviewDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteReviewDialogFooter}
          onHide={hideDeleteReviewDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {review && (
              <span>
                Estas seguro que quiere eliminar esta reseña?
              </span>
            )}
          </div>
        </Dialog>
  
        <Dialog
          visible={deleteReviewsDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteReviewsDialogFooter}
          onHide={hideDeleteReviewsDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {review && (
              <span>
                Estas seguro que deseas eliminar las reviews seleccionadas?
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
