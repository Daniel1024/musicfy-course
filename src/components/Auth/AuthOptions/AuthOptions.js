import { Button } from 'semantic-ui-react';
import './AuthOptions.scss';

export default function AuthOptions({ setSelectedForm }) {
  return (
    <span>
      <div className="auth-options">
        <h2>Millones de canciones, gratis en Musicfy</h2>
        <Button className="register" onClick={() => setSelectedForm('register')}>Registarte gratis</Button>
        <Button className="login" onClick={() => setSelectedForm('login')}>Iniciar sessión</Button>
      </div>
    </span>
  );
}
