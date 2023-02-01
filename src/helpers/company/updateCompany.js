import { backEndApi } from "../../api/backEndApi"

export const updateCompany= async (company)=>{
    try{
      
        const resp = await backEndApi.put(`/companies/1`,company)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}