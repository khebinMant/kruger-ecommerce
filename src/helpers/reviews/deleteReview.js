import { backEndApi } from "../../api/backEndApi"

export const deleteReview = async (reviewId)=>{

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };
    try{

        const resp = await backEndApi.delete(`/reviews/${reviewId}`,config)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}