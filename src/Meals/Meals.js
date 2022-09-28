import MealItem from "./MealItem"

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
        meals.map(meal => {
            return <MealItem key={meal.id} item={meal.name} description={meal.description} price={meal.price} />
        })
    )

}

export default Meals