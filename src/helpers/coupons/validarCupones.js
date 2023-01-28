import { backEndApi } from "../../api/backEndApi"

export const validarCupones= async (coupon)=>{
    try{
        const resp = await backEndApi.get(`/coupons/by-code/${coupon}`)
        return resp.data

    }catch(error){
        return null;
    }
}