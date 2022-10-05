import MealItem from "./MealItem"
import './Meals.css'

function Meals() {

    let meals = [
        {
            id: 'i1',
            name: 'pizza',
            description: 'mushroom with corn',
            price: 250
        },
        {
            id: 'i2',
            name: 'Noodels',
            description: 'boneless chiken pieces',
            price: 80
        },
        {
            id: 'i3',
            name: 'manchuria',
            description: 'chiken manchira with all ingridients',
            price: 50
        },
        {
            id: 'i4',
            name: 'momos',
            description: 'fried chiken crunchy momos',
            price: 60
        }
    ]

    return (
        <div className="meals">
            {meals.map(meal => {
            return <MealItem key={meal.id} id={meal.id} item={meal.name} description={meal.description} price={meal.price} />})}
        </div>
    )

}

export default Meals