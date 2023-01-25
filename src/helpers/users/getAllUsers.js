import { backEndApi } from "../../api/backEndApi";

export const getAllUsers= async ()=>{
    try{
        const resp = await backEndApi.get(`/users/all`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}