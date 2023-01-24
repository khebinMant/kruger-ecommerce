import { userApi } from "../../api/userApi"


export const addAddress = async (user) => {
    try {
        let resp;
        console.log("adding user address");
        //llamando el endpoint de user para agregar un nuevo diccionario
        resp = await userApi.put(`/update/ubication/${user.id}`, user);
        
        
        return resp.data;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}