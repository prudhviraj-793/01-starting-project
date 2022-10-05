import InputForm from '../UI/InputForm.js/InputForm'
import './MealItem.css'


function MealItem(props) {
    return (
        <div className='meal'>
            <div className="mealItem">
                <h3>{props.item}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>Rs {props.price}</div>
            </div>
            <div className='inputForm'>
                <InputForm key={props.id} id={props.id} item={props.item} price={props.price} />
            </div>
        </div>
        
    )
}

export default MealItem