import InputForm from '../UI/InputForm.js/InputForm'
import './MealItem.css'


function MealItem(props) {
    return (
        <div className='meal'>
            <div className="mealItem">
                <h3>{props.item}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>{props.price}</div>
            </div>
            <div className='inputForm'>
                <InputForm />
            </div>
        </div>
        
    )
}

export default MealItem