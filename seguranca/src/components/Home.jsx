import React, { useState } from 'react';
import { logIn } from '../services/svcUsuario';

export default () => {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('');
    return (
        <React.Fragment>
            <div>Usuário: <input value={username} onChange={(e) => setUsername(e.target.value)}></input> </div>
            <div>Senha: <input value={password} onChange={(e) => setPassword(e.target.value)}></input></div>
            <button onClick={() => logIn(username, password).then(x => console.log(x)).catch(err => console.log(err))}>Log In</button>
        </React.Fragment>
    );
}