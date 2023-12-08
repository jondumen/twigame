// InterfazB.js
import React from 'react';
import Counter from './Counter';

const InterfazB = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Space Battle</h1>
      <div style={{ margin: 'auto', maxWidth: '50%', marginTop: '10px' }}>
        <img
          src="https://halo.wiki.gallery/images/thumb/b/b5/FoR.png/800px-FoR.png"
          alt="Imagen de Space Battle"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <Counter />
    </div>
  );
};

export default InterfazB;

