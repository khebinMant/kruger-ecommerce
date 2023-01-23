import { backEndApi } from "../../api/backEndApi"

export const getAllCarts= async ()=>{
    try{
        const resp = await backEndApi.get(`/carts/`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}