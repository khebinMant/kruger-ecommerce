import { backEndApi } from "../../api/backEndApi";


export const updatePersonalInfo = async (user) => {
    try {
        let resp;
        console.log("updating user personal info");
        //llamando el endpoint de user para loggear un user
        resp = await userApi.put(`/update/personal/${user.id}`, user);
        
        
        return resp.data;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}