import './InputForm.css'
import { useContext, useState } from 'react'
import CartContext from '../Context/cart-context'

function InputForm(props) {

    const [quantity, setQuantity] = useState(1)

    const ctx = useContext(CartContext)

    function inputHandler(e) {
        e.preventDefault()
        if (e.target.value > 0) {
            setQuantity(e.target.value)
        }
    }

    const item = {
        id: props.id,
        item: props.item,
        price: props.price,
        amount: quantity
    }

    function addToCart(e) {
        e.preventDefault()
        ctx.addItem(item)
        setQuantity(1)
    }

    return (
        <form onSubmit={addToCart} className="form">
            <div className='input'>
                <label>Amount</label>
                <input type='number' onChange={inputHandler} value={quantity} required/>
            </div>
            <button type='submit'>+Add</button>
        </form>
    )
}

export default InputForm