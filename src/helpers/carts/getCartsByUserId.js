import { backEndApi } from "../../api/backEndApi"

export const getCartsByUserId= async (userId)=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };

    try{
        const resp = await backEndApi.get(`/carts/user/${userId}`, config)
        return resp.data
    }catch(error){
        throw new Error(error.message)
    }
}