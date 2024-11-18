// src/components/header/index.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderPage() {
  return (
    <nav className="bg-white text-black p-3 rounded-md">
      <div className="container mx-auto flex items-center">
        <span className="font-bold text-xl mx-3">Cômodos:</span>
        <NavLink
          to="/sala"
          className="mx-3 hover:text-green-500"
          activeClassName="font-bold text-green-500"
        >
          Sala
        </NavLink>
        <NavLink
          to="/cozinha"
          className="mx-3 hover:text-green-500"
          activeClassName="font-bold text-green-500"
        >
          Cozinha
        </NavLink>
        <NavLink
          to="/quarto"
          className="mx-3 hover:text-green-500"
          activeClassName="font-bold text-green-500"
        >
          Quarto
        </NavLink>
      </div>
    </nav>
  );
}

export default HeaderPage;
