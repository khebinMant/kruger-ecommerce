import { backEndApi } from "../../api/backEndApi"

export const putCoupon= async (coupon)=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };

    try{
        const resp = await backEndApi.put(`/coupons/${coupon.id}`,coupon,config)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}