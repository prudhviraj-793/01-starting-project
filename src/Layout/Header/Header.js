import { Fragment } from "react"
import image from '../../Images/dining.jpg'
import './Header.css'
import HeaderCartBtn from "./HeaderCartBtn"

function Header() {
    return (
        <Fragment>
            <header className="header">
                <h1>ReactMeals</h1>
                <HeaderCartBtn />
            </header>
            <div className="main-image">
                <img src={image} alt='food' />
            </div>
        </Fragment>
    )
}

export default Header