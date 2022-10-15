import { delRequest, getRequest, postRequest, putRequest } from "../../../services/apiService"

const path = '/employeeforms';

const handlerException = (response : any) => {
    if(response && response.status === 0) {
        return null;
    }
    return response;
}

export const getData = async () => {
    const response = await getRequest(path);
    return handlerException(response);
}

export const postData = async (requestBody : any) => {
    const response = await postRequest(path , requestBody);
    return handlerException(response);
}

export const putData = async (id : number , requestBody : any) => {
    const response = await putRequest(`${path}/${id}`, requestBody);
    return handlerException(response)
}

export const delData = async (id:number) => {
    const response = await delRequest(`${path}/${id}`);
    return handlerException(response);
}