import { backEndApi } from "../../api/backEndApi"

export const updateCompany= async (company)=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };
    try{
      
        const resp = await backEndApi.put(`/companies/1`,company, config)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}