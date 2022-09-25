import { useState } from 'react';
import { Cart } from './components/Cart';
import { Header } from './components/Layouts';
import { Meals } from './components/Meals';
import { CartProvider } from './components/Context';

const App = () => {
  const [isShowCart, setIsShowCart] = useState(false);
  const showCartHandler = () => setIsShowCart(true);
  const hideCartHandler = () => setIsShowCart(false);
  return (
    <CartProvider>
      {isShowCart && <Cart onClose={hideCartHandler} />}
      <Header onOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};
export default App;
