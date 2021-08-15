import { useEffect, useState } from "react";
import { BuscarLogin } from "services/Login";


export const BuscarData = async() => {

    const[valueBD, setValueDB] = useState([]);
    const[filtrodata, setFiltroData] = useState([]);

    useEffect(()=> {
        async function buscaData(){
            const response = await BuscarLogin();
            setValueDB(response);
        }
        buscaData(); 
    },[])

    let dataEmail = valueBD.map(item => item.email)
    setFiltroData(dataEmail);
    let dataSenha = valueBD.map(item => item.senha)
    setFiltroData({...filtrodata, dataSenha})
    return filtrodata ;
}