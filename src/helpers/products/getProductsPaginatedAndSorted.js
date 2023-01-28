import { backEndApi } from "../../api/backEndApi"

export const getProductsPaginatedAndSorted= async (pageSize, pageNumber, categoryId)=>{
    try{
        let resp;
        if (categoryId === -1){
            resp = await backEndApi.get(`/products/paginate?pageSize=${pageSize}&pageNo=${pageNumber}&sortBy=category`)
        }
        else{
            resp = await backEndApi.get(`/products/paginate?pageSize=${pageSize}&pageNo=${pageNumber}&sortBy=category&categoryId=${categoryId}`)
        }
        return resp.data

    }catch(error){
        throw new Error(error.message)
    }
}