import { backEndApi } from "../../api/backEndApi"

export const deleteCoupon= async (couponId)=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };

    try{
        const resp = await backEndApi.delete(`/coupons/${couponId}`,config)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}