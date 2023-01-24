import { backEndApi } from "../../api/backEndApi"

export const getReviews= async ()=>{
    try{

        const resp = await backEndApi.get(`/reviews`)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}