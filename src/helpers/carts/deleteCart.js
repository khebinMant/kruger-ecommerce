import { backEndApi } from "../../api/backEndApi"

export const deleteCart = async (cart)=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };

    try{
        const resp = await backEndApi.delete(`/carts/${cart.id}`,config)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}