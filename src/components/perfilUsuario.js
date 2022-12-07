import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const PerfilUsuario = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Espere por favor...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <div className='d-flex justify-content-start'>
          <img className='img-perfil' src={user.picture} alt={user.name} style={{ width: '50px' }} />
        </div>
        <div className='d-flex justify-content-start'>
          <h3 className='titulo'>Bienvenid@ {user.name}</h3>
        </div>
        <div className='d-flex justify-content-start'>
          <p>Correo electronico: {user.email}</p>
        </div>
        <div className='d-flex justify-content-start'>
          <p>{user.profile}</p>
        </div>
      </>
    )
  );
}