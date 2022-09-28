import Header from './Layout/Header/Header';
import { Fragment } from "react";
import Summary from "./Layout/Summary/Summary"
import Meals from './Meals/Meals';

function App() {
  return (
    <Fragment>
      <Header />
      <Summary />
      <Meals />
    </Fragment>
  )
}

export default App;
