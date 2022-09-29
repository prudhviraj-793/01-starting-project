import MealItem from "./MealItem"
import './Meals.css'

function Meals() {

    let meals = [
        {
            id: Math.random().toString(),
            name: 'pizza',
            description: 'mushroom with corn',
            price: '$15'
        },
        {
            id: Math.random().toString(),
            name: 'Noodels',
            description: 'boneless chiken pieces',
            price: '$10'
        },
        {
            id: Math.random().toString(),
            name: 'manchuria',
            description: 'chiken manchira with all ingridients',
            price: '$15'
        },
        {
            id: Math.random().toString(),
            name: 'momos',
            description: 'fried chiken crunchy momos',
            price: '$15'
        }
    ]

    return (
        <div className="meals">
            <ul>
            {meals.map(meal => {
            return <li><MealItem key={meal.id} item={meal.name} description={meal.description} price={meal.price} /></li>})}
            </ul>
        </div>
    )

}

export default Meals