import Header from './Layout/Header/Header';
import { useState } from "react";
import Summary from "./Layout/Summary/Summary"
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import CartProvider from './UI/Context/CartProvider';

function App() {
  const [state, setState] = useState(true)
  const [cartedItems, setCartedItems] = useState(0)
  function isCancelClickedHandler(res) {
    setState(res)
  }
  function cartClickHandler(res) {
    setState(res)
  }

  function updateCartHandler(res) {
    setCartedItems(res)
  }

  return (
    <CartProvider updateCart={updateCartHandler}>
        {!state && <Cart isCancelClicked={isCancelClickedHandler} />}
        <Header cartedItems={cartedItems} isCartClicked={cartClickHandler}/>
        <Summary />
        <main>
          <Meals />
        </main>
    </CartProvider>
  )
}

export default App;
