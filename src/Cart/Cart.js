import Modal from "../UI/Modal/Modal"
import './Cart.css'

function Cart(props) {
    const cartItems = props.cartedItems

    function cancelClickHandler(e) {
        e.preventDefault()
        props.isCancelClicked(true)
    }
    return (
        <Modal>
            <div className="cart-items">
                <ul>
                    {cartItems.map(item => {
                        return <li key={item.id}>{item.item} - {item.price}</li>
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