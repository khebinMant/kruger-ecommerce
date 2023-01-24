import { backEndApi } from "../../api/backEndApi"

export const getAllProductsByCategory = async (categoryId)=>{
    try{
        const resp = await backEndApi.get(`/products/all?categoryId=${categoryId}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}