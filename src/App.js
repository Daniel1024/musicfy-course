import { useState } from 'react';
import Firebase from './utils/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth(Firebase);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setIsLoading(false);
  });

  if (isLoading) {
    return <h1>Cargando</h1>;
  }

  return !user ? <h1>Usuario no logeado</h1> : <h1>Usuario logeado</h1>;
}

export default App;
