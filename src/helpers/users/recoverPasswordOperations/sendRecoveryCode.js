import { backEndApi } from "../../../api/backEndApi";

export const sendRecoverycode= async (email)=>{
    try{
        const resp = await backEndApi.get(`/users/recovery-code/${email}`)
        return resp.data;

    }catch(error){
        return null;
    }
}