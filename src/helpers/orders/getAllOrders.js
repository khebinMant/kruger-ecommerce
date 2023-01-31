import { backEndApi } from "../../api/backEndApi";

export const getAllOrders= async ()=>{
    try{
        const resp = await backEndApi.get(`/orders`)
        return resp.data;

    }catch(error){
        return null;
    }
}