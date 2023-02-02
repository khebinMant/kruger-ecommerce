import { backEndApi } from "../../../api/backEndApi";

export const validateRecoveryCode= async (validationRequest)=>{
    try{
        const resp = await backEndApi.post(`/users/recovery-code/validate`,validationRequest)
        return resp.data;

    }catch(error){
        return null;
    }
}