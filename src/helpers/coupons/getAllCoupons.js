import { backEndApi } from "../../api/backEndApi"

export const getAllCoupons= async ()=>{
    try{
        const resp = await backEndApi.get(`/coupons`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}