import { userApi } from "../../api/userApi"


export const changePassword = async (request,userId) => {
    try {
        let resp;
        console.log("adding user address");
        //llamando el endpoint de user para agregar un nuevo diccionario
        resp = await userApi.put(`/update/credentials/${userId}`, request);
        
        
        return resp.data;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}