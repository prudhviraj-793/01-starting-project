import './InputForm.css'

function InputForm() {
    return (
        <div className="form">
            <div className='input'>
                <label>Amount</label>
                <input type='number' required/>
            </div>
            <button>+Add</button>
        </div>
    )
}

export default InputForm