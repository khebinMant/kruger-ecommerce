import { backEndApi } from "../../api/backEndApi"

export const getAllCoupons= async ()=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };

    try{
        const resp = await backEndApi.get(`/coupons`,config)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}