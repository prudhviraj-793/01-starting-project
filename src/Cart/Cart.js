import { useState } from "react"
import Modal from "../UI/Modal/Modal"
import './Cart.css'

function Cart(props) {

    const cartItems = props.cartedItems

    const [quantity, setQuantity] = useState(0)

    function cancelClickHandler(e) {
        e.preventDefault()
        props.isCancelClicked(true)
    }

    function reduceItem(item) {
        if (item.amount > 0) {
            item.amount = item.amount - 1
            setQuantity(item.amount)
        }
    }

    return (
        <Modal>
            <div className="cart-items">
                <ul>
                    {cartItems.map(item => {
                        return <li key={item.id}>
                            {item.item} - {item.price} X {item.amount}
                            <button onClick={() => reduceItem(item)}>-</button>
                            <button>+</button>
                        </li>
                    })}
                </ul>
            </div>
            <div className="total">
                <span>Total Amount</span>
                <span>$35</span>
            </div>
            <div className="actions">
                <button onClick={cancelClickHandler}>Cancel</button>
                <button>Order</button>
            </div>
        </Modal>
    )
}

export default Cart