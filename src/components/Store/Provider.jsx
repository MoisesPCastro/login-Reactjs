import React, { useState } from 'react';
import Context from './Context';

const StoreProvider = ({children}) => {
    const[token, setToken] = useState('token');
    const[teste, setTeste] = useState('');
    return(
        <Context.Provider 
            value={{
                token,
                setToken,
                setTeste,
                teste,
            }}
        >
            {children}
        </Context.Provider>
    )

}

export default StoreProvider;