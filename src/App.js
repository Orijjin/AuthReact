import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import GuardedRoute from './components/GuardedRoute';
import Login from './components/Login';
import { authentificationService } from './services/authentification'

const Home = props => (
  <React.Fragment>
    <h1>Home</h1>
    <li><Link to='/login'>login</Link></li>
  </React.Fragment>
)
const Protected = ({logoutUser}) => (
  <React.Fragment>
    <h1>Protected</h1>
    <button onClick={logoutUser}>Déconnexion</button>
  </React.Fragment>
)

function App() {
  const navigate = useNavigate()
  const loginUser = (login, password) => {
    const userCredentials = {
      login,
      password
    }
    return authentificationService.login(userCredentials)
      .then(loginData => {
        if(loginData){
          localStorage.setItem('token',loginData.token)
          navigate('/protected')
        }
      })
  };

  const logoutUser = () => {
    authentificationService.logout()
      .then(response =>{
        if(response !== undefined){
          localStorage.removeItem('token');
          navigate('/')
        }
      })
  }

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login loginUser={loginUser}/>} />
        <Route path='/' element={<GuardedRoute auth={localStorage.getItem('token')}/>}>
          <Route path='/protected' element={<Protected logoutUser={logoutUser}/>}  />
        </Route>
      </Routes>
    </div>
  );
}

export default App;