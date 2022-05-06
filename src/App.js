import { useState } from 'react';
import Auth from './pages/Auth';
import firebase from './utils/Firebase';
import 'firebase/compat/auth';
import { ToastContainer } from 'react-toastify';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged(currentUser => {
    console.log({ currentUser });
    if (!currentUser?.emailVerified) {
      firebase.auth().signOut();
      setUser(null);
    } else {
      setUser(currentUser);
    }
    setIsLoading(false);
  });

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      {user ? <UserLogeed/> : <Auth/>}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover={true}
        draggable
      />
    </>
  );
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
