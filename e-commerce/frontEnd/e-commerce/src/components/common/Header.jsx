import React from 'react';
import { crown } from '../assets/images/crown.jpg';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="toggle">
            <button>Menu</button>
          </div>
          <div className="left">
            <img src="{crown}" alt="" />
          </div>
        </nav>
      </div>
    </header>
  );
};
