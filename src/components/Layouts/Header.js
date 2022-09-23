import React from 'react';

function Header() {
  return (
    <>
      <header>
        <h1>Delicious Meals Corner</h1>
        <button type="submit" onClick={() => console.log('cart clicked...')}>Cart</button>
      </header>
      <div>
        <img alt="Come to have a taste a varities of food" />
      </div>
    </>
  );
}

Header.propTypes = {};

export default Header;
