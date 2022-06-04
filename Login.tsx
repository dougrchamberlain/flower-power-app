import { useState } from 'react';
import * as React from 'react';
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithEmailAndPassword,
  User,
  signOut,
} from 'firebase/auth';
import './style.css';
import config from './config.js';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({} as User);

  function logoff() {
    const app = initializeApp(config);
    const auth = getAuth(app);
    signOut(auth);
    setUser(null); //this is needed to clear out the value in user object when signing out.
  }

  function signIn() {
    //push to firebase
    const app = initializeApp(config);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then(function (userCredential) {
        // Signed in
        const user: User = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  if (user.email) {
    return (
      <div>
        <span>{user.email}</span>
        <button onClick={logoff}>Sign Out/LogOff</button>
      </div>
    );
  } else {
    return (
      <div className="login--page">
        <section>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button onClick={signIn}>Sign In</button>
        </section>
      </div>
    );
  }
}
