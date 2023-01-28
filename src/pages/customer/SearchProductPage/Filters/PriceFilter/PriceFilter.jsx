import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PriceFilter.scss";
import { Toast } from 'primereact/toast';
import { setFrom, setParatemer, setTo } from "../../../../../store/search/searchSlice";

const PriceFilter = () => {

  const { from, to } = useSelector(state => state.search)

  const [f, setF] = useState(0)
  const [t, setT] = useState(0)
  const dispatch = useDispatch();
  const toast = useRef(null);

  const showWarn = () => {
    toast.current.show({severity:'info', summary: 'Ups', detail:'Parametros de búsqueda no validos', life: 3000});
  }

 const filterByPrice = (event) =>{
    event.preventDefault();
    if(f >= 0 && t >= 0){
      if(f >= 0 && t>f){
        dispatch(setFrom(f))
        dispatch(setTo(t))
        dispatch(setParatemer('price'))
      }
      else{
        showWarn()
      }
    }
    if((f==0 && t==0)|| (f==0|| t==0)){
      showWarn()
    }
    if(f<0 || t<0){
      showWarn()
    }
 }

  return (
    <form className="price">
      <Toast ref={toast} />
      <h3 className="price__title">Precio</h3>
      <ul className="price__list">
        <li className="price__item">
          <label className="price__label" htmlFor="fromPrice">
            Desde
          </label>
          <input onChange={(event)=>setF(event.target.value)} className="price__input" type="number" id="fromPrice" value={f} />
        </li>
        <li className="price__item">
          <label className="price__label" htmlFor="toPrice">
            Hasta
          </label>
          <input onChange={(event)=>setT(event.target.value)} className="price__input" type="number" id="toPrice" value={t} />
        </li>
      </ul>
      <button onClick={filterByPrice} className="price__btn">Filtrar por precio</button>
    </form>
  );
};

export default PriceFilter;