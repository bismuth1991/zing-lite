import React from 'react';
import { func, string } from 'prop-types';


const MobileResize = ({ currentPhone, handleSwitchPhone }) => {
  const phones = [
    'Galaxy-S5',
    'Pixel-2',
    'Pixel-2-XL',
    'iPhone-5-SE',
    'iPhone-6-7-8',
    'iPhone-6-7-8-Plus',
    'iPhone-X',
  ];

  return (
    <nav className="mobile-resize">
      {phones.map(phone => (
        <button
          key={phone}
          type="button"
          className={`mobile-resize__button${phone === currentPhone ? '--active' : ''}`}
          onClick={handleSwitchPhone}
        >
          {phone}
        </button>
      ))}
    </nav>
  );
};

MobileResize.propTypes = {
  currentPhone: string.isRequired,
  handleSwitchPhone: func.isRequired,
};

export default MobileResize;
