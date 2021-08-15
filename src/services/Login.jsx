import axios from "axios";

const url =  "http://localhost:8081/";
const api = axios.create({
    baseURL: url,
    headers:{
        'Content-Type': 'application/json'
    }
})

export const BuscarLogin = async(value) => {
    try{
        const response = await api.post('loginBuscar', value) ;
        return response.data;

    }catch(error){
        console.error('Error na requisição', error);
    }
}
export const CriarLogin = async(value) => {
    const {senha, email} = value;
    try{
        const response = await api.post('login', {email, senha}) ;
        return response;

    }catch(error){
        console.error('Error na requisição', error);
    }
}

// teste@teste.com