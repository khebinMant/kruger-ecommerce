import { createSlice } from '@reduxjs/toolkit';
const findProductByID=(arr,id)=>{
    let index=-1;
   arr.find((it,i)=>
               {
                if( it.productId==id){
                    index=i;
                }
               });
               return index;
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: {
            totalPrice:0,
            status:"CREATED",
            shipmentAddress: {},
            items:[]
        },
        searchedProduct:'',
        selectedProduct:{}
    },
    reducers: {
        setCurrentCart:(state,action)=>{
            state.cart = action.payload.cart;
        },
        addItemToCart:(state,action)=>{
           
           const index=findProductByID( state.cart.items,action.payload.item.productId);
            if(index>=0){
                state.cart.items[index].quantity+=1;
            }else{
                state.cart.items.push(action.payload.item);
            }
            state.cart.totalPrice += action.payload.item.price * action.payload.item.quantity
        },
        deleteItemToCart:(state,action)=>{
            state.cart.items.splice(action.payload.index,1)
        },
        updateTotalPrice:(state,action)=>{
            state.cart.totalPrice -= action.payload.price
        },
        setTotalPriceWithIva:(state,action)=>{
            state.cart.totalPrice=action.payload.price
        },
        updateItemQuantity:(state,action)=>{
            state.cart.items.map((item) =>{
                if(item.productId === action.payload.item.productId){
                    item.quantity =  action.payload.item.quantity
                }
                return item;
            }
            )
            state.cart.totalPrice = action.payload.newPrice

        },
        setShipmentAddress:(state,action)=>{
            state.cart.shipmentAddress = action.payload.shipmentAddress
        },
        resetCart:(state)=>{
            state.cart.totalPrice = 0
            state.cart.status = "CREATED"
            state.cart.shipmentAddress = "CREATED"
            state.cart.items = []
        },
        setSearchedProduct : (state, {payload})=>{
            state.searchedProduct = payload
        },
        setSelectedProduct: (state, {payload})=>{
            state.selectedProduct = payload
        }
    }
});


export const { addItemToCart, deleteItemToCart , updateTotalPrice,setTotalPriceWithIva, resetCart, setCurrentCart, updateItemQuantity, setShipmentAddress, setSearchedProduct, setSelectedProduct} = cartSlice.actions;