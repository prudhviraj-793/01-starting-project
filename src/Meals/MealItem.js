import { Fragment } from "react"

function MealItem(props) {
    return (
        <Fragment>
            <h3>{props.item}</h3>
            <h4>{props.description}</h4>
            <h3>{props.price}</h3>
        </Fragment>
    )
}

export default MealItem