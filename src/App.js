import Firebase from './utils/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  onAuthStateChanged(getAuth(Firebase), (user) => {
    console.log(user ? 'Estamos logeado' : 'No estamos logeado');
  });

  return (
    <div className="App">
      <h1>App Electron + React</h1>
    </div>
  );
}

export default App;
