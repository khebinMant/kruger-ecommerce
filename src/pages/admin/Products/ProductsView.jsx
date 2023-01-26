import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../../helpers/products/getAllProducts";
import { postProduct } from "../../../helpers/products/postProduct";
import { getAllCategories } from "../../../helpers/categories/getAllCategories";
import { deleteProduct } from "../../../helpers/products/deleteProduct";
import { putProduct } from "../../../helpers/products/putProduct";
import { Checking } from "../../../components/Checking";
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
import ImageUploading from 'react-images-uploading';
import { Checkbox } from "primereact/checkbox";

import '../AdminMainPage.css';

let emptyProduct = {
  name: "",
  description: "",
  stock: "",
  price: "",
  category: null,
  youtubeLink:"",
  status:null
};


export const ProductsView = () => {

  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState(emptyProduct);
  const [selectedProducts, setSelectProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, serCategories] = useState();
  const [check, setCheked] = useState()
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const maxNumber = 69;


  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);

    let indexAdd;
    let newImg;
    let temp = [];

    if(addUpdateIndex==undefined){
      //estoy borrando
      setImages(imageList)
    }
    else{
      indexAdd = addUpdateIndex[0]
      newImg = {
        uri:imageList[indexAdd].data_url,
        url: null,
        created: new Date()
      }

      for (let index = 0; index < imageList.length; index++) {
        if(index === indexAdd){
          temp.push(newImg)
        }
        else{
          temp.push(imageList[index])
        }      
      }
      setImages(temp);
    }
  };
  

  const onChangeNewImages = (imageList, addUpdateIndex) =>{
    console.log(imageList, addUpdateIndex);

    setNewImages(imageList)

    let indexAdd;
    let newImg;
    let temp = [];

    if(addUpdateIndex==undefined){
      //estoy borrando
      setNewImages(imageList)
    }
    else{
      indexAdd = addUpdateIndex[0]
      newImg = {
        uri:imageList[indexAdd].data_url,
        url: null,
        created: new Date()
      }
      for (let index = 0; index < imageList.length; index++) {
        if(index === indexAdd){
          temp.push(newImg)
        }
        else{
          temp.push(imageList[index])
        }      
      }
      setNewImages(temp);
    }

  }

  const formatCurrency = (value) => {
    return value.toLocaleString("es-ES", {
      style: "currency",
      currency: "USD",
    });
  };

  const createProduct = async (product) => {
    const responsePostProduct = await Promise.resolve(postProduct(product));
    return responsePostProduct;
  };

  const updateProduct = async (product) => {
    const responsePutProduct = await Promise.resolve(putProduct(product));
    return responsePutProduct;
  };

  const removeProduct = async (productId) => {
    const responseDeleteProduct = await Promise.resolve(deleteProduct(productId));
    return responseDeleteProduct;
  };

  const getCategories = async () => {
    const responseCategories = await Promise.resolve(getAllCategories());
    serCategories(responseCategories.filter(category=>category.name!=='Servicio'));
    setIsLoading(false);
  };

  const getProducts = async () => {
    const responseProducts = await Promise.resolve(getAllProducts());
    setProducts(responseProducts.filter(product=>product.type==='PRODUCT'));
    setIsLoading(false);
  };

  const openNew = () => {
    setProduct(emptyProduct);
    setCheked(false);
    setNewImages([]);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };
  const saveProduct = async () => {
    setSubmitted(true);

    if (product.name.trim()) {
      let _products = [...products];
      let _product = { ...product };
      _product.images = images;
      if (product.id) {
        const responsePutProduct = updateProduct(_product);
        if (responsePutProduct) {
          const index = findIndexById(product.id);
          _products[index] = _product;
          toast.current.show({
            severity: "success",
            summary: "Genial!",
            detail: "Producto actualizado",
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Algo salio mal!",
            detail: "No se pudo actualizar el producto",
            life: 3000,
          });
        }
      } else {
        _product.images = newImages
        _product.type = "PRODUCT"
        const responsePostProduct = await createProduct(_product);
        if (responsePostProduct) {
          _product.id = responsePostProduct.id;
          _products.push(_product);
          toast.current.show({
            severity: "success",
            summary: "Genial!",
            detail: "Producto creado",
            life: 3000,
          });
        } else {
          toast.current.show({
            severity: "error",
            summary: "Algo salio mal!",
            detail: "No se pudo crear el producto",
            life: 3000,
          });
        }
      }

      setProducts(_products);
      setProductDialog(false);
      setProduct(emptyProduct);
    }
  };

  const editProduct = (product) => {
    setImages(product.images)
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProductView = () => {
    const responseDeleteProduct = removeProduct(product.id);
    if (responseDeleteProduct) {
      let _products = products.filter((val) => val.id !== product.id);
      setProducts(_products);
      setDeleteProductDialog(false);
      setProduct(emptyProduct);
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
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));
    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectProducts(null);
    toast.current.show({
      severity: "success",
      summary: "Successful",
      detail: "Products Deleted",
      life: 3000,
    });
  };

  const onInputChange = (e, name) => {

    const val = (e.target && e.target.value) || "";
    let _product = { ...product };
    _product[`${name}`] = val;

    setProduct(_product);
  };

  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Añadir"
          icon="pi pi-plus"
          className="p-button-success mr-2"
          onClick={openNew}
        />
        <Button
          label="Eliminar"
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedProducts || !selectedProducts.length}
        />
      </React.Fragment>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Añadir"
          icon="pi pi-plus"
          className="p-button-success mr-2 p_btn_add"
          onClick={openNew}
        />
        <Button
          label="Eliminar"
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedProducts || !selectedProducts.length}
        />
      </React.Fragment>
    );
  }
  const imageBodyTemplate = (rowData) => {
    if(rowData.images.length == 0){
      return(
        <img
        src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
        alt= "something"
        className="product-image"
      />
      )
    }
    else{
      return (
        <img
          src={`${rowData.images[0].url || rowData.images[0].uri}`}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          alt={rowData.images[0].url || rowData.images[0].uri}
          className="product-image"
        />
      );
    }
  };

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div style={{display:'flex', flexDirection:'row', position:'relative'}}>
        <Button
          icon="pi pi-external-link"
          className="p-button-rounded p-button-primary"
          onClick={() => navigate(`/product/${rowData.id}`,{ replace: true })}
          title="Ir al producto"
        />
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          onClick={() => editProduct(rowData)}
          title="Editar el producto"
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => confirmDeleteProduct(rowData)}
          title="Eliminar el producto"
        />
      </div>
    );
  };

  const header = (
    <div className="table-header">
      <h5 className="mx-0 my-1">Administrar Productos</h5>
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
  const productDialogFooter = (
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
        onClick={saveProduct}
      />
    </>
  );
  const deleteProductDialogFooter = (
    <>
      <Button
        style={{position:'static'}}
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteProductView}
      />
    </>
  );
  const deleteProductsDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedProducts}
      />
    </>
  );

  return (
    <>
    {
      isLoading ? (
      <Checking />
    ) : (
      <div className="datatable-crud-demo">
        <Toast ref={toast} />
  
        <div className="card">
          <Toolbar className="mb-4" right={rightToolbarTemplate} ></Toolbar>
  
          <DataTable
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) => setSelectProducts(e.value)}
            dataKey="id"
            paginator
            rows={8}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="{first} - {last} de {totalRecords} productos"
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
              header="Image"
              body={imageBodyTemplate}
            ></Column>
            <Column
              field="name"
              header="Nombre"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="status"
              header="Destacado"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="price"
              header="Precio"
              body={priceBodyTemplate}
              sortable
              style={{ minWidth: "1px" }}
            ></Column>
            <Column
              field="stock"
              header="Stock"
              sortable
              style={{ minWidth: "0.5rem" }}
            ></Column>
            <Column
              field="salesCounter"
              header="Total vendidos"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="category.name"
              header="Categoria"
              sortable
              style={{ minWidth: "2rem" }}
            ></Column>
            <Column
              field="reviews.length"
              header="Reseñas"
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
          visible={productDialog}
          style={{ width: "700px" }}
          header="Información del producto"
          modal
          className="p-fluid"
          footer={productDialogFooter}
          onHide={hideDialog}
        >
          <div className="field">
            <label htmlFor="name">Nombre</label>
            <InputText
              id="name"
              value={product.name}
              onChange={(e) => onInputChange(e, "name")}
              required
              autoFocus
              className={classNames({ "p-invalid": submitted && !product.name })}
            />
            {submitted && !product.name && (
              <small className="p-error">El nombre es obligatorio.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="stock">Stock</label>
            <InputText
              id="stock"
              value={product.stock}
              onChange={(e) => onInputChange(e, "stock")}
              className={classNames({
                "p-invalid": submitted && !product.stock,
              })}
            />
            {submitted && !product.stock && (
              <small className="p-error">El Stock es obligatoria.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="price">Precio</label>
            <InputText
              id="price"
              value={product.price}
              onChange={(e) => onInputChange(e, "price")}
              className={classNames({
                "p-invalid": submitted && !product.price,
              })}
            />
            {submitted && !product.price && (
              <small className="p-error">El Precio es obligatoria.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="youtubeLink">YouTube Link Video</label>
            <InputText
              id="youtubeLink"
              value={product.youtubeLink}
              onChange={(e) => onInputChange(e, "youtubeLink")}
              className={classNames({
                "p-invalid": submitted && !product.youtubeLink,
              })}
            />
            {submitted && !product.youtubeLink && (
              <small className="p-error">El link del video es obligatoria.</small>
            )}
          </div>
          {
            product.images?
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <Button 
                      className="p-button-secondary"
                      style={{color:isDragging?'red':'', width:'100%', height:'50px', marginTop:'20px', justifyContent:'center'}}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Agrega o arrastra imágenes
                    </Button >
                    &nbsp;
                    {imageList.map((image, index) => (

                      <div key={index} className="image-item">
                        <img src={image['uri'] || image.url} alt="" width="100" />
                          <Button 
                            onClick={() => onImageRemove(index)}
                            icon="pi pi-trash"
                            className="p-button-rounded p-button-danger"
                          >
                          </Button>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            :<>
            <ImageUploading
                multiple
                value={newImages}
                onChange={onChangeNewImages}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <Button 
                      className="p-button-secondary"
                      style={{color:isDragging?'red':'', width:'100%', height:'50px', marginTop:'20px', justifyContent:'center'}}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Agrega o arrastra imágenes
                    </Button >
                    &nbsp;
                    {imageList.map((image, index) => (

                      <div key={index} className="image-item">
                        <img src={image['uri'] || image.url} alt="" width="100" />
                          <Button 
                            onClick={() => onImageRemove(index)}
                            icon="pi pi-trash"
                            className="p-button-rounded p-button-danger"
                          >
                          </Button>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </>
          }
          <div className="field">
            <label htmlFor="description">Descripción</label>
            <InputTextarea
              id="description"
              value={product.description}
              onChange={(e) => onInputChange(e, "description")}
              required
              rows={3}
              cols={20}
              className={classNames({
                "p-invalid": submitted && !product.description,
              })}
            />
            {submitted && !product.description && (
              <small className="p-error">La descripción es obligatoria.</small>
            )}
          </div>
          <div className="field">
            <label htmlFor="category">Categoria</label>
            <Dropdown
              value={product.category}
              required
              options={categories}
              onChange={(e) => onInputChange(e, "category")}
              optionLabel="name"
              placeholder="Selecciona la categoría"
            />
            {submitted && !product.category && (
              <small className="p-error">La categoria es obligatoria.</small>
            )}
          </div>
          <div className="field">
            <label  htmlFor="status">POPULAR</label>
            <Checkbox   
              type="checkbox"
              onChange={(e) => {
                  product.status === true?
                  product.status = false
                  :
                  product.status = true
                  setCheked(!product.status)
                }} 
              checked={product.status}>
            </Checkbox  >
          </div>
        </Dialog>
  
        <Dialog
          visible={deleteProductDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteProductDialogFooter}
          onHide={hideDeleteProductDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Estas seguro que quiere eliminar: <b>{product.name}</b>?
              </span>
            )}
          </div>
        </Dialog>
  
        <Dialog
          visible={deleteProductsDialog}
          style={{ width: "450px" }}
          header="Confirm"
          modal
          footer={deleteProductsDialogFooter}
          onHide={hideDeleteProductsDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem" }}
            />
            {product && (
              <span>
                Estas seguro que deseas eliminar los productos seleccionadas?
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
