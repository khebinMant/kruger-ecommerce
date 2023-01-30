import { backEndApi } from "../../api/backEndApi"

export const updateCart= async (cart)=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };

    try{
        const resp = await backEndApi.put(`/carts/${cart.id}`,cart,config)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}