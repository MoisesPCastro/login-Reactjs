import axios from "axios";

const url =  "http://localhost:8081/";
const api = axios.create({
    baseURL: url,
    headers:{
        'Content-Type': 'application/json'
    }
})

export const CriarInscricao = async(value) => {
    try{
        const response = await api.post('/inscricao', value) ;
        return response;

    }catch(error){
        console.error('Error na requisição', error);
    }
}