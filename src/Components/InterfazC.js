// InterfazC.js
import React from 'react';

const InterfazC = () => {
  return (
        
    <div>
      {/* NomUser Perfil */}
      <img
        src="https://www.superherohype.com/wp-content/uploads/sites/4/2023/06/spider-woman-header.png?w=1024"
        alt="Imagen de perfil"
        style={{ width: '80px', height: '80px', marginBottom: '10px', objectFit: 'cover' }}
      />
      <h1>Normix☁</h1>
      <p>@NormaROFFICIAL</p>
      <div>
        {/* Datos del perfil */}
        <h4>Catadora profesional de "Y la 🧀 soporte pansona 💁🏻‍♀️"</h4>
        <p>⛳Golf Instructor 📍Chihuahua, México 🎈Born February 22, 1998 📅Joined May 2019</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3>1</h3> <p style={{ marginLeft: '5px', marginRight: '10px' }}>Following</p>
          <h3>6.7M</h3> <p style={{ marginLeft: '5px' }}>Followers</p>
        </div>
        <div>
          <h4 style={{ textDecoration: 'underline' }}>Posts</h4>
        </div>
        <div style={{ borderBottom: '1px solid #000', marginBottom: '10px' }} />
      </div>
    </div>
  );
};

export default InterfazC;
