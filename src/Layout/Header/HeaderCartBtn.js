import { useContext } from "react"
import CartIcon from "../../Cart/CartIcon"
import CartContext from "../../UI/Context/cart-context"
import './HeaderCartBtn.css'

function HeaderCartBtn(props) {

    const cartCtx = useContext(CartContext)

    const numOfCartItems = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0)

    function cartClickHandler(e) {
        e.preventDefault()
        props.isCartClicked(false)
    }
    return(
        <button className="button" onClick={cartClickHandler}>
            <span className="icon"><CartIcon /></span>
            <span>Cart</span>
            <span className="badge">{numOfCartItems}</span>
        </button>
    )

}

export default HeaderCartBtn