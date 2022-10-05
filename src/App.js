import Header from './Layout/Header/Header';
import { useState } from "react";
import Summary from "./Layout/Summary/Summary"
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import CartProvider from './UI/Context/CartProvider';

function App() {

  const [state, setState] = useState(true)

  function isCancelClickedHandler(res) {
    setState(res)
  }
  
  function cartClickHandler(res) {
    setState(res)
  }

  return (
    <CartProvider >
        {!state && <Cart isCancelClicked={isCancelClickedHandler} />}
        <Header isCartClicked={cartClickHandler}/>
        <Summary />
        <main>
          <Meals />
        </main>
    </CartProvider>
  )
}

export default App;
