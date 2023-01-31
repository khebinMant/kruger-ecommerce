import { backEndApi } from "../../api/backEndApi";

export const getAllCustomers= async ()=>{
    try{
        const resp = await backEndApi.get(`/users/customers`)
        return resp.data;

    }catch(error){
        return null;
    }
}