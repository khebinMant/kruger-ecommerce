import { backEndApi } from "../../api/backEndApi";


export const updateUserUbication = async (user) => {
    try {
        let resp;
        //llamando el endpoint de user para agregar un nuevo diccionario
        resp = await backEndApi.put(`/users/update/ubication/${user.id}`, user);
                
        return resp.data;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}