import CartIcon from "../../Cart/CartIcon"
import './HeaderCartBtn.css'

function HeaderCartBtn() {
    return(
        <button className="button">
            <span className="icon"><CartIcon /></span>
            <span>Cart</span>
            <span className="badge">2</span>
        </button>
    )

}

export default HeaderCartBtn