import { useState } from 'react';
import { auth } from './utils/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Auth from './pages/Auth';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  onAuthStateChanged(auth, (currentUser) => {
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
    auth.signOut();
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
