import axios from "axios";

import "./CategoryFilter.scss";

const CategoryFilter = () => {
  return (
    <div className="category">
      <h3 className="category__title">Category</h3>
      <ul className="category__list">
        <li className={`category__item`}>All Products</li>
        <li className={`category__item `}>Phones</li>
        <li className={`category__item `}>Services</li>
        <li className={`category__item `}>Lowest to highest</li>
        <li className={`category__item `}>Highest to lowest</li>
      </ul>
    </div>
  );
};

export default CategoryFilter;
