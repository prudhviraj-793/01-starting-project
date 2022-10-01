import CartIcon from "../../Cart/CartIcon"
import './HeaderCartBtn.css'

function HeaderCartBtn(props) {

    function cartClickHandler(e) {
        e.preventDefault()
        props.isCartClicked(false)
    }

    return(
        <button className="button" onClick={cartClickHandler}>
            <span className="icon"><CartIcon /></span>
            <span>Cart</span>
            <span className="badge">{props.cartedItemsCount}</span>
        </button>
    )

}

export default HeaderCartBtn