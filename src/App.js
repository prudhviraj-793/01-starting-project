import Header from './Layout/Header/Header';
import { Fragment, useState } from "react";
import Summary from "./Layout/Summary/Summary"
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';

function App() {
  const [state, setState] = useState(true)
  function isCancelClickedHandler(res) {
    setState(res)
  }
  function cartClickHandler(res) {
    setState(res)
  }
  return (
    <Fragment>
      {!state && <Cart isCancelClicked={isCancelClickedHandler} />}
      <Header isCartClicked={cartClickHandler}/>
      <Summary />
      <Meals />
    </Fragment>
  )
}

export default App;
