import axios from "axios";
import { useDispatch } from "react-redux";
import { setParatemer } from "../../../../../store/search/searchSlice";

import "./CategoryFilter.scss";

const CategoryFilter = () => {

  const dispatch = useDispatch();

  return (
    <>
    <div className="category">
      <h3 className="category__title">Categoria</h3>
      <ul className="category__list">
        <li onClick={()=> dispatch(setParatemer('low'))} className={`category__item `}>Gama Baja</li>
        <li onClick={()=> dispatch(setParatemer('mid'))} className={`category__item `}>Gama Media</li>
        <li onClick={()=> dispatch(setParatemer('high'))} className={`category__item `}>Gama Alta</li>
        {/* <li onClick={()=> dispatch(setParatemer(' '))} className={`category__item `}>Lowest to highest</li> */}
        {/* <li onClick={()=> dispatch(setParatemer(' '))} className={`category__item `}>Highest to lowest</li> */}
      </ul>
    </div>
    <div className="category">
      <h3 className="category__title">Tipo</h3>
      <ul className="category__list">
        <li onClick={()=> dispatch(setParatemer('products'))} className={`category__item `}>Teléfonos</li>
        <li onClick={()=> dispatch(setParatemer('services'))} className={`category__item `}>Services</li>
        {/* <li onClick={()=> dispatch(setParatemer(' '))} className={`category__item `}>Lowest to highest</li> */}
        {/* <li onClick={()=> dispatch(setParatemer(' '))} className={`category__item `}>Highest to lowest</li> */}
      </ul>
    </div>
    </>
  );
};

export default CategoryFilter;
