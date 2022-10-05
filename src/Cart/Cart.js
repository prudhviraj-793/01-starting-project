import { useContext } from "react"
import CartContext from "../UI/Context/cart-context"
import Modal from "../UI/Modal/Modal"
import './Cart.css'

function Cart(props) {

    const ctx = useContext(CartContext)

    const cartItems = ctx.items

    function cancelClickHandler(e) {
        e.preventDefault()
        props.isCancelClicked(true)
    }

    function reduceItem(item) {
        ctx.removeItem(item.id)
    }

    return (
        <Modal>
            <div className="cart-items">
                {cartItems.length === 0 && <p>Add Items to Cart</p>}
                <ul>
                    {cartItems.map(item => {
                        return <li key={item.id}>
                            {item.item} - Rs {item.price} X {item.amount}
                            <button onClick={() => reduceItem(item)}>-</button>
                            <button>+</button>
                        </li>
                    })}
                </ul>
            </div>
            <div className="total">
                <span>Total Amount</span>
                <span>Rs {ctx.totalAmount} /-</span>
            </div>
            <div className="actions">
                <button onClick={cancelClickHandler}>Cancel</button>
                <button>Order</button>
            </div>
        </Modal>
    )
}

export default Cart