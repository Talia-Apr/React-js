const url= "http://localhost:8000/api";
let token = "oGS6Vd96Zb";

export const link = axios.create({
    baseURL : url,
    headers : 
    {
        'api_token' : token
    }
});