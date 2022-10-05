import { useContext } from "react"
import CartIcon from "../../Cart/CartIcon"
import CartContext from "../../UI/Context/cart-context"
import './HeaderCartBtn.css'

function HeaderCartBtn(props) {

    const ctx = useContext(CartContext)

    function cartClickHandler(e) {
        e.preventDefault()
        props.isCartClicked(false)
    }

    return(
        <button className="button" onClick={cartClickHandler}>
            <span className="icon"><CartIcon /></span>
            <span>Cart</span>
            <span className="badge">{ctx.items.length}</span>
        </button>
    )

}

export default HeaderCartBtn