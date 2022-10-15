import Form from "../components/Forms/Form";
import DbSports from "../components/logos/DbSports";
import React, {useState} from 'react';
import MainPage from "./MainPage";
import {LoginContext} from '../components/Context/LoginContext'
function Login() {
  const [email, setEmail] = useState('');

  return (
    <div>
      <DbSports />
      <Form/>
      
    </div>
  );
}

export default Login;
