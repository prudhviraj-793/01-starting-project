import Header from './Layout/Header/Header';
import { Fragment } from "react";
import Summary from "./Layout/Summary/Summary"
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <Summary />
      <Meals />
    </Fragment>
  )
}

export default App;
