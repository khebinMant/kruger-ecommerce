import { backEndApi } from "../../api/backEndApi";

export const deleteUser= async (userId)=>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const config = {
        headers: { Authorization: `Bearer ${currentUser.token}` }
    };
    try{
        const resp = await backEndApi.delete(`/users/${userId}`,config)
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}