import Modal from "../UI/Modal/Modal"

function Cart() {
    const cartItems = <ul>{[{id: Math.random().toString(), name: 'pizza', price: '$20', amount: 2}].map(item => {
        return <li key={item.id}>{item.name}</li>
    })}</ul>
    return (
        <Modal>
            {cartItems}
            <div>
                <span>Total Amount</span>
                <span>$35</span>
            </div>
            <div>
                <button>Cancel</button>
                <button>Order</button>
            </div>
        </Modal>
    )
}

export default Cart