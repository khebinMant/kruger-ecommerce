import { backEndApi } from "../../api/backEndApi"


export const postOrder= async (order,currentUserId)=>{
    
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // const config = {
    //     headers: { Authorization: `Bearer ${currentUser.token}` }
    // };

    try{
        // const resp = await backEndApi.post(`/orders/user/${currentUser.id}`,order, config)
        const resp = await backEndApi.post(`/orders/user/${currentUserId}`,order)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}