import { backEndApi } from "../../api/backEndApi"

export const getProduct= async (id)=>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };
    try{

        const resp = await backEndApi.get(`/products/${id}`, config)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}