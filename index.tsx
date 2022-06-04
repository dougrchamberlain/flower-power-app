import { initializeApp } from '@firebase/app';
import { onAuthStateChanged } from 'firebase/auth';
import * as React from 'react';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import config from './config';
import { getAuth, User } from 'firebase/auth';
import Login from './Login';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const app = initializeApp(config);
let user: User = {} as User;

onAuthStateChanged(getAuth(app), (u: User) => {
  user = u;
  console.log(user, 'index');
  //wipedata
});

root.render(
  <StrictMode>
    <App />
    <Login />
  </StrictMode>
);
