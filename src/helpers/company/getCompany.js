import { backEndApi } from "../../api/backEndApi"

export const getCompany= async ()=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };

    try{
        const resp = await backEndApi.get(`/companies/1`,config)
        return resp.data

    }catch(error){
        return null;
    }
}