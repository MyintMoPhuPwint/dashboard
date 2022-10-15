import axios from "axios"
import { environment } from "./environment";

/**
 * create http request connection
 */
 const api = axios.create({
    baseURL: environment.END_POINT,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization" : `bearer ${environment.API_KEY}`
    },
});

/**
 * Http interceptor add authorization token
*/
//  api.interceptors.request.use((config: any) => {
//    localStorage.setItem('token' , 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NjU0Nzc3ODksImV4cCI6MTY2NTQ4MTM4OSwibmJmIjoxNjY1NDc3Nzg5LCJqdGkiOiJIZ1NoUGRSaWVPbWUwRjJiIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.praL8Yu42bpJCYOAqrQsdQ3cDPpyzOZPWdxEhMqrqwA');

//     const token = localStorage.getItem('token') 
//         ? localStorage.getItem('token')
//         : null;

//     api.defaults.headers.common['Authorization'] = localStorage.getItem('token')? 'bearer ' + localStorage.getItem('token') : null;
//     return config;
// });

export const http = api;