import React, { useEffect, useRef, useState } from 'react'
import { startAddItemToCart } from '../../../../store/cart/thunks';
import { DetailsThumb } from '../components/DetailsThumb';
import { Toast } from 'primereact/toast';

import "./ProductInfo.scss";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ProductInfo = ({item}) => {

    const [product, setProduct] = useState(item);
    const [indexT, setIndex] = useState(0)
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const myRef = useRef();
    const toast = useRef(null);
    const navigation=useNavigate();

    useEffect(() => {
        myRef.current.children[indexT].className = "active";
    }, [])

    const handleComprarAhora =()=>{
      let _product = {
        quantity: quantity,
        price: product.price,
        productId: product.id
    }
    
    dispatch(startAddItemToCart(_product));
    navigation("/payment");
    }

    const handleTab = (indexT) => {
        setIndex(indexT)
        const images = myRef.current.children;
        for (let i = 0; i < images.length; i++) {
          images[i].className = images[i].className.replace("active", "");
        }
        images[indexT].className = "active";
    };

    const increase = () => {
      setQuantity(count => count + 1);
    };
  
    const decrease = () => {
      if(quantity===1){
        setQuantity(1)
      }
      else{
        setQuantity(count => count - 1);
      }
    };

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Agregado', detail:'Teléfono agregado al carrito', life: 3000});
    }

    const addItemToCart = () =>{
      let _product = {
          quantity: quantity,
          price: product.price,
          productId: product.id
      }
      dispatch(startAddItemToCart(_product));
      showSuccess()
  }
    
  return (
      <div className="productinfo">
          <Toast ref={toast} position="top-left" />

          <div className="productinfo_details">
            <div className="big-img">
              <img className='animate__animated animate__fadeIn' src={product.images[indexT]?(product.images[indexT].url || product.images[indexT].uri):'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Unknow.svg/800px-Flag_of_Unknow.svg.png'} alt="" />
            </div>
            <DetailsThumb
              images={product.images}
              tab={handleTab}
              myRef={myRef}
            />
          </div>
        <div className="productDetail_info">
          <h2 className="productDetail_info_title">{product.name}</h2>
          <p className="productDetail_info_description">
            {product.description}
          </p>
          <div className="productDetail_info_stats">
            <div className="productDetail_info_stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="productDetail_info_price">{product.price} $</div>
          </div>

          <ul className="productDetail_info_extras">
            <li className="productDetail_info_extras_item">
              <i className="fa-solid fa-mobile"></i>
              <p><b>Vendidos</b></p>
              <p>{product.salesCounter}</p>
            </li>
            <li className="productDetail_info_extras_item">
              <i className="fa-solid fa-mobile"></i>
              <p><b>Peso</b></p>
              <p>{product.weight} gr</p>
            </li>
            <li className="productDetail_info_extras_item">
              <i className="fa-solid fa-mobile"></i>
              <p><b>Procesador</b></p>
              <p>{product.processor}</p>
            </li>
          </ul>

          <div className="productDetail_info_quantity">
            <i className="fa-solid fa-minus" onClick={decrease}></i>
            <div className="productDetail_info_quantity_counter">{quantity}</div>
            <i className="fa-solid fa-plus"  onClick={increase}></i>
          </div>

          <div className="productDetail_info_btns">
            <button onClick={addItemToCart} className="productDetail_info_btns_btn1">
              Agregar al carrito
            </button>
            <button className="productDetail_info_btns_btn2" onClick={handleComprarAhora}>Comprar ahora</button>
          </div>
        </div>
      </div>
    );
}
