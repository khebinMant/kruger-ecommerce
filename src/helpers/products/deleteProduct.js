import { backEndApi } from "../../api/backEndApi";


export const deleteProduct= async (productId)=>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };
    try{

        const resp = await backEndApi.delete(`/products/${productId}`,config)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}