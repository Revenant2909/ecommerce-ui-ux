import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTM4NWFlMDNkMzIwZWNlYjg2ZDZiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzIzNTY5MSwiZXhwIjoxNzE0NzcxNjkxfQ.aELr3eZEwsuRjnVPhYSrwMjuTkGwwLJUlZx-5zRAhjQ"
export const publicRequest = axios.create({
    baseURL : BASE_URL,
}); 

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
}); 

