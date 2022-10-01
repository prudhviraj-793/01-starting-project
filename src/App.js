import Header from './Layout/Header/Header';
import { useState } from "react";
import Summary from "./Layout/Summary/Summary"
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import CartProvider from './UI/Context/CartProvider';

function App() {

  const [state, setState] = useState(true)
  const [cartedItemsCount, setCartedItemsCount] = useState(0)
  const [cartedItems, setCartedItems] = useState([])

  function isCancelClickedHandler(res) {
    setState(res)
  }
  function cartClickHandler(res) {
    setState(res)
  }

  function updateCartHandler(res) {
    setCartedItemsCount(res)
  }

  function cartedItemsHandler(res) {
    setCartedItems([...res])
  }

  return (
    <CartProvider updateCart={updateCartHandler} cartedItems={cartedItemsHandler}>
        {!state && <Cart isCancelClicked={isCancelClickedHandler} cartedItems={cartedItems} />}
        <Header cartedItemsCount={cartedItemsCount} isCartClicked={cartClickHandler}/>
        <Summary />
        <main>
          <Meals />
        </main>
    </CartProvider>
  )
}

export default App;
