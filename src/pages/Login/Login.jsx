import React, { useState, useContext,useRef } from 'react';
import UIButton from 'components/UI/Button/Button';
import StoreContext from 'components/Store/Context';
import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';
import {showError, showInfo } from '../../modulos/Message/MessagenAlert';
import {useHistory} from 'react-router-dom';
import{Link} from 'react-router-dom'
import './Login.css';
import { BuscarLogin } from 'services/Login';

const initialState = () =>{
  return {
    user: '',
     password: ''
    };
};



const UserLogin = () => {
  const messages = useRef(null);
  const history = useHistory();
  const[values, setValue] = useState(initialState);
  const {setToken, setTeste} = useContext(StoreContext)
  const [valueBD, setValueDB] = useState ([]);
 


    const buscarData = async (email, senha) => {
      let data = {
        email: email,
        senha: senha
      }
      const response = await BuscarLogin(data);
      setValueDB(response);
    };

    const conferirLogin = () => {

      if(valueBD){
        console.log("valueJson", valueBD)
        if(valueBD.length === 0){
          showError(
            messages,
            'Dados incompletos, tente novamente!'
          );
          setValue(initialState)
        }else{
          setToken(1232)
          setTeste('Estou vindo do login pelo useContext')
          history.push('/')
        }
      }
    }
    const onChange = (event) =>{
    const {value, name} = event.target;
    setValue({
      ...values,
      [name]: value,
    })
  }
  const onSubmit = (event) => {

    buscarData(values.user, values.password)
    conferirLogin();
    event.preventDefault();
  }

  return (
    <div className="user-login">
      <Messages ref={messages} />
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="user" type="text" onChange={onChange} name="user" autoComplete="off" value={values.user} />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" onChange={onChange} name="password" value={values.password}  />
        </div>
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
      <Link to= '/cadastro'>
        <button type="submit">Fazer cadastro</button>
      </Link>
      
    </div>
  );
};

export default UserLogin;
