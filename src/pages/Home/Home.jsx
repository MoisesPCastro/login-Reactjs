import StoreContext from '../../components/Store/Context';
import React, { useContext } from 'react';
import './Home.css';
 

const PagesHome = () => {

  const {teste, token} = useContext(StoreContext)

  return(
  <div className="pages-home">
    //{token, 'vindo da pasta login pelo useContext!'} <br/>
    Parabéns Emanuelly, você conseguiu por isso vc e sua amiga do seu lado são as  mais linda do mundo!
    <br />
    <button type="button">Sair</button>
  </div>
  );
  };

export default PagesHome;
