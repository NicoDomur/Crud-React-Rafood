import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NavbarPrincipal } from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pruebas from './pages/pruebas';
import Login from './components/login';
import Principal from './pages/principal';
import Perfil from './pages/perfil';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Espere por favor...</div>;
  }

  if (isAuthenticated) {
    return (
      <div className="App">
        <BrowserRouter>
          <NavbarPrincipal />
          <Routes>
            <Route exact path='/' element={<Principal />} />
            <Route exact path='/pruebas' element={<Pruebas />} />
            <Route exact path='/perfil' element={<Perfil />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }


}

export default App;
