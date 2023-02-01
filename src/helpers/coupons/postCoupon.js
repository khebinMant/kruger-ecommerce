import { backEndApi } from "../../api/backEndApi"

export const postCoupon= async (coupon)=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };

    try{
        const resp = await backEndApi.post(`/coupons`,coupon,config)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}