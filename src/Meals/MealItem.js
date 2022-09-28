import InputForm from '../UI/InputForm.js/InputForm'
import './Meals.css'

function MealItem(props) {
    return (
        <div className='mealItemContainer'>
            <div className="mealItem">
                <h3>{props.item}</h3>
                <h4>{props.description}</h4>
                <h3>{props.price}</h3>
            </div>
            <div className='inputForm'>
                <InputForm />
            </div>
        </div>
        
    )
}

export default MealItem