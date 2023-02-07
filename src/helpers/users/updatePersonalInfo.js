import { backEndApi } from "../../api/backEndApi";


export const updatePersonalInfo = async (user) => {
    try {
        let resp;
        //llamando este endpoint para actualizar la info personal del user
        resp = await backEndApi.put(`/users/update/personal/${user.id}`, user);
        
        
        return resp.data;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}