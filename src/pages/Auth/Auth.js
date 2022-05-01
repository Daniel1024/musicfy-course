import { useState } from 'react';
import LoginForm from '../../components/Auth/LoginForm';
import RegisterForm from '../../components/Auth/RegisterForm';
import AuthOptions from '../../components/Auth/AuthOptions';
import BackgroundAuth from '../../asstes/jpg/background-auth.jpg';
import LogoNameWhite from '../../asstes/png/logo-name-white.png';

import './Auth.scss';

export default function Auth() {
  const [selectedForm, setSelectedForm] = useState(null);

  const handlerForm = () => {
    switch (selectedForm) {
      case 'login':
        return <LoginForm/>;
      case 'register':
        return <RegisterForm/>;
      default:
        return <AuthOptions/>;
    }
  };

  return (
    <div
      className="auth"
      style={{ backgroundImage: `url(${BackgroundAuth})` }}
    >
      <div className="auth__dark"/>
      <div className="auth__box">
        <div className="auth__box-logo">
          <img src={LogoNameWhite} alt="Musify"/>
        </div>
        {handlerForm()}
      </div>
    </div>
  );
}