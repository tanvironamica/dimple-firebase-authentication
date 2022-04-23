import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () =>{
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setUser(user);
    })
    .catch( error =>{
      console.error(error);
    })
  }
  return (
    <div className="App">
    <button onClick={handleGoogleSignIn}>Google Sign In</button>
    <h2>Name: {user.displayName}</h2>
    <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
