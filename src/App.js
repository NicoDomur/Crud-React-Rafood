import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/login';
import { Logout } from './components/logout';
import { Perfil } from './components/perfil';
import { useAuth0 } from '@auth0/auth0-react'
import { NavbarPrincipal } from './components/navbar';

function renderSwitch(param) {
  switch(param) {
    case 'foo':
      return 'bar';
    default:
      return 'foo';
  }
}

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Espere por favor...</div>;
  }

  if (isAuthenticated) {
    return (
      <div className="App">
        <NavbarPrincipal />

        <div>
          {renderSwitch('foo')}
        </div>

        <h1>Hola</h1>
        <Logout />
        <Perfil />
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <h1>Necesitas iniciar sesion</h1>
        <Login />
      </div>
    );
  }


}

export default App;
