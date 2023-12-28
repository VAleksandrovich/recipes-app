function RecipesComponents ({label, image, cuisineType, calories,dishType, ingredients }) {
return (
    <div>
        <div className="container">
        <h2>{label}</h2>
        </div>

          <div className="container">
        <img src={image} alt ="dish" width="300px"/>
        </div>

        <div className="container">
        <h3>Cuisine: {cuisineType}</h3>
        </div>

        <ul className="container list">
            {ingredients.map ((ingredient, index) => (
                <li key = {index}>
                    ✔️{ingredient}
                </li>
            ))}
        </ul>
     
        <div className="container">
        <p> Calories: {calories.toFixed()} kcal</p>
        </div>

        <div className="container">
        <p> Dish Type: {dishType} </p>
        </div>
       
    </div>
)
}

export default RecipesComponents;