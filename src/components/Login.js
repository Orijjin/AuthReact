import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = ({ loginUser }) => {
   const [login, setLogin] = useState('');
   const [password, setpassword] = useState('');

   const onLogin = event => {
      event.preventDefault();
      loginUser(login, password)
   }

   return(
      <React.Fragment>
         <form style={{display: "flex", justifyContent:'flex-start'}} onSubmit={onLogin}>
            <label>Login</label>
            <input type="text" value={login} onChange={event =>setLogin(event.currentTarget.value)} />
            <label>Password</label>
            <input type="password" value={password} onChange={event =>setpassword(event.currentTarget.value)} />
            <button type='submit'>Connexion</button>
         </form>
         <button><Link to='/protected'>acceder à ma page perso</Link></button>
      </React.Fragment>
   )
}

export default Login;