import { delRequest, getRequest, postRequest, putRequest } from "../../services/apiService"

const path = '/employeeforms';

const handlerException = (response : any) => {
    if(response && response.status === 0) {
        return null;
    }
    return response;
}

export const getData = async () => {
    return await getRequest(path).then(
        response => response,
        error => handlerException(error)
    );
}

export const postData = async (requestBody : any) => {
    return await postRequest(path , requestBody).then(
        response => response,
        error => handlerException(error)
    );
}

export const putData = async (id : number , requestBody : any) => {
    return await putRequest(`${path}/${id}`, requestBody).then(
        response => response,
        error => handlerException(error)
    );
}

export const delData = async (id:number) => {
    return await delRequest(`${path}/${id}`).then(
        response => response,
        error => handlerException(error)
    );
}