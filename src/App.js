import { useState } from 'react';
import { Cart } from './components/Cart';
import { Header } from './components/Layouts';
import { Meals } from './components/Meals';

const App = () => {
  const [isShowCart, setIsShowCart] = useState(false);
  const showCartHandler = () => setIsShowCart(true);
  const hideCartHandler = () => setIsShowCart(false);
  return (
    <>
      {isShowCart && <Cart onClose={hideCartHandler} />}
      <Header onOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};
export default App;
