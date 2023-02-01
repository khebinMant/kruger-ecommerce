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
import BannerSearch from "./BannerSearch/BannerSearch";

const SearchProductPage = () => {
  const { parameter, from, to } = useSelector((state) => state.search);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const dispath = useDispatch();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  useEffect(() => {
    getData();
  }, [parameter, from, to]);

  useEffect(() => {
    // setEnd(start+4);
    console.log(start, end)
  }, [start]);

  const getData = async () => {
    let response;
    switch (parameter) {
      case "all":
        response = await Promise.resolve(getAllProducts());
        setProducts(response);
        setIsLoading(false);
        break;
      case "products":
        response = await Promise.resolve(getAllProducts());
        setProducts(response.filter((prod) => prod.type === "PRODUCT"));
        setIsLoading(false);
        break;
      case "services":
        response = await Promise.resolve(getAllProducts());
        setProducts(response.filter((prod) => prod.type === "SERVICE"));
        setIsLoading(false);
        break;
      case "low":
        response = await Promise.resolve(getAllProducts());
        setProducts(
          response.filter((prod) => prod.category.name === "Gama Baja")
        );
        setIsLoading(false);
        break;
      case "mid":
        response = await Promise.resolve(getAllProducts());
        setProducts(
          response.filter((prod) => prod.category.name === "Gama Media")
        );
        setIsLoading(false);
        break;
      case "high":
        response = await Promise.resolve(getAllProducts());
        setProducts(
          response.filter((prod) => prod.category.name === "Gama Alta")
        );
        setIsLoading(false);
        break;
      case "price":
        response = await Promise.resolve(getAllProducts());
        setProducts(
          response.filter(
            (product) => product.price >= from && product.price <= to
          )
        );
        setIsLoading(false);
        break;
      default:
        break;
    }
  };
  const onChangeName = async (e) => {
    setStart(0);
    setEnd(4);
    let response;
    setName(e.target.value.toLowerCase());
    if (e.target.value.trim().length === 0) {
      response = await Promise.resolve(getAllProducts());
      setProducts(response);
      setIsLoading(false);
    } else {
      response = await Promise.resolve(getAllProducts());
      setProducts(
        response.filter((prod) =>
          prod.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      setIsLoading(false);
    }
  };

  const clearSearch = async () => {
    setName("");
    let response = await Promise.resolve(getAllProducts());
    setProducts(response);
    setIsLoading(false);
  };
  const handlNextClick = () => {
    setStart(start => {
      //end siempre tiene que estar 4 numeros adelante de start 
      //agregar 8 al end porque al momento de actualizar end start todavia no esta actualizado
      setEnd(start + 8);
      return start + 4;
    });
  }

  const handleBackClick = () => {
    if ((start - 4) >= 0) {
      setStart(start => {
        setEnd(start);
        return start - 4;
      });
    } else {
      setStart(0);
      setEnd(4);
    }
  }
const onFilterClick=()=>{
  setStart(0);
  setEnd(4);
}
  return (
    <div className="searchpage">
      <BannerSearch />
      <h2 className="searchpage_title heading">Encuentra tus productos</h2>
      <form class="searchpage_form">
        <label for="search">
          <input
            class="searchpage_input"
            type="text"
            value={name}
            required=""
            onChange={onChangeName}
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
          <button
            onClick={clearSearch}
            class="searchpage_close-btn"
            type="reset"
          >
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
      <div className="searchpage_filters" onClick={onFilterClick}>
        <PriceFilter />
        <CategoryFilter />
      </div>

      <div className="searchpage_results">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {products.slice(start, end).map((item) =>
              item.type === "PRODUCT" ? (
                <Product key={item.id} item={item} />
              ) : (
                <Service key={item.id} item={item} />
              )
            )}
          </>
        )}
      </div>
      <div class="pagination">
        {(start - 4) >= 0 && <div class="pagination__item" onClick={handleBackClick}>Anterior</div>}
        {(start + 5 <= products.length) && <div class="pagination__item" onClick={handlNextClick}>Siguiente</div>}

      </div>
    </div>
  );
};

export default SearchProductPage;
/*<div class="pagination__item">2</div>
<div class="pagination__item">3</div>
<div class="pagination__item">4</div>*/