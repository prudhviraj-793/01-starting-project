import { Fragment } from "react"

function InputForm() {
    return (
        <Fragment>
            <label>Amount</label> <input type='number' />
            <button>+Add</button>
        </Fragment>
    )
}

export default InputForm