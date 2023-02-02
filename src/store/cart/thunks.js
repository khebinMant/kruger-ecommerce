import { postOrder } from "../../helpers/orders/postOrder"
import { addItemToCart, deleteItemToCart, resetCart, setCurrentCart, setShipmentAddress, updateItemQuantity, updateTotalPrice } from "./cartSlice"

export const startAddItemToCart = (item) =>{
    return async (dispatch, getState)=>{
        
        //Despachar
        dispatch(addItemToCart({item}))
        
        const  cart  = getState().cart.cart
        //Almacenar en el local storage
        localStorage.setItem('cart', JSON.stringify(cart))

    }
}

export const startCreateOrder = (shipmentAddress,orderCoupon= null,orderSubTotal) =>{
  
    return async (dispatch, getState)=>{
        
        const  currentUser  = getState().users.currentUser

        dispatch(setShipmentAddress({shipmentAddress}))


        let _order = {
            ...getState().cart.cart,
            addressId: shipmentAddress.id,
            coupon: orderCoupon,
            subTotal:orderSubTotal
        }

  

        const response = await Promise.resolve(postOrder(_order,currentUser.id));


        //Limpiar el carrito
        dispatch(resetCart())
        
        const  cart  = getState().cart.cart
        //Almacenar en el local storage
        localStorage.setItem('cart', JSON.stringify(cart))

    }
}

export const startDeleteItemFromCart = (item, index) =>{
    return async (dispatch, getState)=>{

        const {productId} = item
        let price = item.price * item.quantity       
        // //Despachar
        dispatch(deleteItemToCart({productId, index}))
        dispatch(updateTotalPrice({price}))
        
        const  cart  = getState().cart.cart

        // if(cart.items.length()===0){
        //     dispatch(resetCart())
        // }
        //Almacenar en el local storage
        localStorage.setItem('cart', JSON.stringify(cart))

    }
}

export const startUpdateQuantityItemToCart = (item) =>{
    return async (dispatch, getState)=>{

        const  cart  = getState().cart.cart

        let oldPrice = cart.totalPrice;
        let oldItem;

        cart.items.forEach(i => {
            if(i.productId === item.productId){
                oldItem = i
            }
        });

        oldPrice -=  oldItem.price * oldItem.quantity

        let newPrice = oldPrice + (item.quantity * item.price)
        
        //Despachar
        dispatch(updateItemQuantity({item,newPrice}))

        const updatedCart=getState().cart.cart;

        //Almacenar en el local storage
        localStorage.setItem('cart', JSON.stringify(updatedCart))

    }
}

export const getCurrentCart = ()=>{
    return async( dispatch, getState ) =>{

        let emptyCart = {
            totalPrice:0,
            status:"CREATED",
            shipmentAddress: "",
            items:[]
        }

        const cart =  JSON.parse( localStorage.getItem('cart')) || emptyCart;
        
        dispatch(setCurrentCart({cart}))

    }
}


