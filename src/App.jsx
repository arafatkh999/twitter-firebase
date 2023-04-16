import { useState } from 'react'
import './App.css'
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import app from './firebase/firebase.config';


const auth = getAuth(app);
const twitterProvider = new TwitterAuthProvider();

function App() {

  const[user, setUser] = useState(null);

  const handleTwitterSignIn = () =>{
    signInWithPopup(auth, twitterProvider)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      setUser(loggedUser);
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <div className="App">
      
      <h1>Firebase + React</h1>
      <button onClick={handleTwitterSignIn}>Twitter SignIn</button>

      {
        user && <div className="card">
          <h4>User : {user.displayName}</h4>
       
        </div>
      }
      
      
    </div>
  )
}

export default App
