import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Perfil = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Espere por favor...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} style={{width: '75px'}} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}