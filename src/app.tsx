import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<SignIn role='client' />} />
          <Route path="lawyers/sign-in" element={<SignIn role='lawyer' />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

