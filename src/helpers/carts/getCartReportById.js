import { backEndApi } from "../../api/backEndApi"

export const getCartReportById = async (cart)=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}`, Accept:'application/pdf',}
    };

    try{
        const resp = await backEndApi.get(`/carts/${cart.id}/report`,config)
        console.log(resp.content)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}