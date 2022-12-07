import React from 'react';
import { PerfilUsuario } from '../components/perfilUsuario';

export default function Perfil() {
  return (
    <div className='contenedor'>
      <div>
        <h1 className='titulo'>
          Detalles de perfil.
        </h1>
      </div>
      <div>
        <PerfilUsuario />
      </div>
    </div>
  );
}
