import { Fragment } from "react"
import image from '../../Images/dining.jpg'
import './Header.css'
import HeaderCartBtn from "./HeaderCartBtn"

function Header(props) {
    function isCartClickedHandler(res) {
        props.isCartClicked(res)
    }
    return (
        <Fragment>
            <header className="header">
                <h1>ReactMeals</h1>
                <HeaderCartBtn cartedItems={props.cartedItems} isCartClicked={isCartClickedHandler} />
            </header>
            <div className="main-image">
                <img src={image} alt='food' />
            </div>
        </Fragment>
    )
}

export default Header