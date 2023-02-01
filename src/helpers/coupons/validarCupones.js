import { backEndApi } from "../../api/backEndApi"

export const validarCupones= async (coupon)=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };

    try{
        const resp = await backEndApi.get(`/coupons/by-code/${coupon}`,config)
        return resp.data

    }catch(error){
        return null;
    }
}