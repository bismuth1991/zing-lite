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
      {/* {phones.forEach(phone => (
        <button
          type="button"
          className={`mobile-resize__button ${phone === currentPhone ? 'active' : ''}`}
          onClick={handleSwitchPhone}
        >
          {phone}
        </button>
      ))} */}

      <button type="button" onClick={handleSwitchPhone}>Galaxy-S5</button>
      <button type="button" onClick={handleSwitchPhone}>Pixel-2</button>
      <button type="button" onClick={handleSwitchPhone}>Pixel-2-XL</button>
      <button type="button" onClick={handleSwitchPhone}>iPhone-5-SE</button>
      <button type="button" onClick={handleSwitchPhone}>iPhone-6-7-8</button>
      <button type="button" onClick={handleSwitchPhone}>iPhone-6-7-8-Plus</button>
      <button type="button" onClick={handleSwitchPhone}>iPhone-X</button>
    </nav>
  );
};

MobileResize.propTypes = {
  currentPhone: string.isRequired,
  handleSwitchPhone: func.isRequired,
};

export default MobileResize;
