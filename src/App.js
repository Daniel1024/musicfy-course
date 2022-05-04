import { useState } from 'react';
import Auth from './pages/Auth';
import firebase from './utils/Firebase';
import 'firebase/compat/auth';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged(currentUser => {
    setUser(currentUser);
    setIsLoading(false);
  });

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  return user ? <UserLogeed/> : <Auth/>;
}

function UserLogeed() {
  const logout = () => {
    firebase.auth().signOut();
  };
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
  };
  return (
    <div style={style}>
      <h1>Usuario Logeado</h1>
      <button onClick={logout}>Cerrar Sessión</button>
    </div>
  );
}

export default App;
