import React from "react";
import "./SearchProductPage.scss";
import Banner from "../MainPage/Banner/Banner";
import PriceFilter from "./Filters/PriceFilter/PriceFilter";
import CategoryFilter from "./Filters/CategoryFilter/CategoryFilter";
import Product from "../MainPage/Products/Product/Product";
import { productsData } from "../MainPage/Products/dummy";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getAllProducts } from "../../../helpers/products/getAllProducts";
import { getProductsPaginatedAndSorted } from "../../../helpers/products/getProductsPaginatedAndSorted";
import { getProductsCategory } from "../../../helpers/products/getProductsCategory";
import Service from "../MainPage/Services/Service/Service";
import Loading from "../../../components/Loading";

const SearchProductPage = () => {

  const { parameter, from, to } = useSelector(state => state.search)
  const [pageNumber, setPageNumber] = useState(1)
  const [currentPage, setCurrentPage] = useState(0)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [productsPerPage, setProductsPerPage] = useState(4)
  const [name, setName] = useState('')
  const dispath = useDispatch();
  
  useEffect(() => {
    getData();
  }, [parameter, currentPage, from, to]);

  const getData = async() =>{
    setIsLoading(true);
    setPageNumber(1)
    let responsePaginatedProducts;
    let responseProducts;
    let pageN;
      switch (parameter) {
        case 'all':
          responsePaginatedProducts = await Promise.resolve(getProductsPaginatedAndSorted(productsPerPage,currentPage,-1));
          responseProducts = await Promise.resolve(getAllProducts())
          setProducts(responsePaginatedProducts)
          setPageNumber(responseProducts.length / productsPerPage)

          setIsLoading(false);
          break;
      
        case 'low':
          responseProducts = await Promise.resolve(getProductsCategory(3))
          pageN = responseProducts.length / productsPerPage;
          if(pageN<=currentPage){
            setCurrentPage(0)
          }
          else{
            setPageNumber(pageN)
          }
          responsePaginatedProducts = await Promise.resolve(getProductsPaginatedAndSorted(productsPerPage,currentPage,3));
          setProducts(responsePaginatedProducts)
          setIsLoading(false);
          break;
      
        case 'mid':
          responseProducts = await Promise.resolve(getProductsCategory(2))
          pageN = responseProducts.length / productsPerPage;
          if(pageN<=currentPage){
            setCurrentPage(0)
          }
          else{
            setPageNumber(pageN)
          }
          responsePaginatedProducts = await Promise.resolve(getProductsPaginatedAndSorted(productsPerPage,currentPage,2));
          setProducts(responsePaginatedProducts)
          setIsLoading(false);
          break;
      
        case 'high':
          responseProducts = await Promise.resolve(getProductsCategory(1))
          pageN = responseProducts.length / productsPerPage;
          if(pageN<=currentPage){
            setCurrentPage(0)
          }
          else{
            setPageNumber(pageN)
          }
          responsePaginatedProducts = await Promise.resolve(getProductsPaginatedAndSorted(productsPerPage,currentPage,1));
          setProducts(responsePaginatedProducts)
          setIsLoading(false);
          break;

        case 'products':
          responseProducts = await Promise.resolve(getAllProducts())
          pageN =responseProducts.filter(product => product.type === 'PRODUCT' ).length / productsPerPage;
          if(pageN<=currentPage){
            setCurrentPage(0)
          }
          else{
            setPageNumber(pageN)
          }
          responsePaginatedProducts = await Promise.resolve(getProductsPaginatedAndSorted(productsPerPage,currentPage,-1));
          setProducts(responsePaginatedProducts.filter(product => product.type === 'PRODUCT'))
          setIsLoading(false);
          break;

        case 'services':
          responseProducts = await Promise.resolve(getProductsCategory(productsPerPage))
          pageN = responseProducts.filter(product => product.type === 'SERVICE' ).length / productsPerPage
          if(pageN<=currentPage){
            setCurrentPage(0)
          }
          else{
            setPageNumber(pageN)
          }
          responsePaginatedProducts = await Promise.resolve(getProductsPaginatedAndSorted(productsPerPage,currentPage,productsPerPage));
          setProducts(responsePaginatedProducts.filter(product => product.type === 'SERVICE'))
          setIsLoading(false);
          break;
        case 'price':
          responseProducts = await Promise.resolve(getAllProducts())
          let filteredByPrice = responseProducts.filter(product => product.price>= from && product.price<= to)
          setProducts(filteredByPrice)
          setIsLoading(false);
          break;

        default:
      }
  }
  const onChangeName = async ()=>{

      let responseProducts = await Promise.resolve(getAllProducts())
      if(name){
        let filteredByName = responseProducts.filter(product => product.name.includes(name))
        setProducts(filteredByName)
      }
      else{
          dispath(setParatemer('all'))
      }
      setIsLoading(false);
  }

  return (
    <div className="searchpage">
      <Banner />
      <h2 className="searchpage_title">Encuentra tus productos</h2>
      <form class="searchpage_form">
        <label for="search">
          <input
            class="searchpage_input"
            type="text"
            value={name}
            required=""
            onChange={(e)=>{setName(e.target.value); onChangeName()}}
            placeholder="Buscar producto"
            id="search"
          />
          <div class="searchpage_fancy-bg"></div>
          <div class="searchpage_search">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>
          <button onClick={()=>setName('')} class="searchpage_close-btn" type="reset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </label>
      </form>
      <div className="searchpage_filters">
        <PriceFilter />
        <CategoryFilter />
      </div>

      <div className="searchpage_results">
        {
          parameter === 'price' || parameter === 'name'?
          isLoading?
          <Loading/>
          :
          <>
            {products.map((item) => (
              item.type === 'PRODUCT'?
              <Product item={item} />:
              <Service/>
            ))}
          </>
          :
          isLoading?
          <Loading/>
          :
          <>
            {products.map((item) => (
              item.type === 'PRODUCT'?
              <Product item={item} />:
              <Service/>
            ))}
          </>
        }
      </div>
      <div class="pagination">
        {
          isLoading && parameter!=='price'  && name === ''?
          <Loading/>
          :
          <>
              {
                Array.apply(null, { length: pageNumber }).map((e, i) => (
                  <div 
                    onClick={()=>setCurrentPage(i)} 
                    class="pagination__item"
                    style={currentPage===i?{backgroundColor:'#A1FF69', color:'black'}:{}}
                  >
                    {i+1}
                  </div>
                ))
              }
          </>
        }
      </div>

    </div>
  );
};

export default SearchProductPage;
