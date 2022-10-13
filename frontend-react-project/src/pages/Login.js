import Form from "../components/Forms/Form";
import DbSports from "../components/logos/DbSports";
import React, {useState} from 'react';
import MainPage from "./MainPage";
import {LoginContext} from '../components/Context/LoginContext'
function Login() {
  const [showProfile, setShowProfile] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div>
      <DbSports />
      <LoginContext.Provider value={{email, setEmail, setShowProfile}}>
        {showProfile ? <MainPage />  : <Form />}
      </LoginContext.Provider>
      
    </div>
  );
}

export default Login;
