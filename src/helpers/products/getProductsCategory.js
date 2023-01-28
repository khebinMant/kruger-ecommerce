import { backEndApi } from "../../api/backEndApi"

export const getProductsCategory= async (categoryId)=>{
    try{
        const resp = await backEndApi.get(`/products/all?categoryId=${categoryId}`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}