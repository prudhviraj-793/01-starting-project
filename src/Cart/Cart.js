import Modal from "../UI/Modal/Modal"

function Cart(props) {
    const cartItems = <ul>{[{id: Math.random().toString(), name: 'pizza', price: '$20', amount: 2}].map(item => {
        return <li key={item.id}>{item.name}</li>
    })}</ul>

    function cancelClickHandler(e) {
        e.preventDefault()
        props.isCancelClicked(true)
    }
    return (
        <Modal>
            {cartItems}
            <div>
                <span>Total Amount</span>
                <span>$35</span>
            </div>
            <div>
                <button onClick={cancelClickHandler}>Cancel</button>
                <button>Order</button>
            </div>
        </Modal>
    )
}

export default Cart