import { backEndApi } from "../../api/backEndApi"

export const postReview= async (review)=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };
    try{

        const resp = await backEndApi.post(`/reviews`,review, config)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}