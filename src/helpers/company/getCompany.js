import { backEndApi } from "../../api/backEndApi"

export const getCompany= async ()=>{
    try{
        const resp = await backEndApi.get(`/companies/1`)
        return resp.data

    }catch(error){
        return null;
    }
}