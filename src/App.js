
import { useEffect, useState } from 'react';
import './App.css';
import video from './appetizer.mp4';
import icon from './icons8-pan-48.png'
import RecipesComponents from './RecipesComponents';



function App() {
  const MY_ID = "22441fe9";
  const MY_KEY = "dd475d1884f884b92210b67f5e248087";

  const [mySearch, setMySearch] = useState ("");
  const [myRecipes, setMyRecipes] = useState ([]);
  const [wordSubmitted, setWordSubmitted] = useState ("apple");

  useEffect ( () => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
setMySearch(e.target.value);

  }

  const finalSearch = (e) => {
e.preventDefault();
setWordSubmitted(mySearch)
  }

  return (
    <div className="App">

    <div className="container">
    <video autoPlay muted loop>
     <source src={video} type="video/mp4" />
  </video>
  
    <h1>Find a Recipe</h1>
    </div>

    <div className='container'>
     <form onSubmit={finalSearch}>
         <input className='search' placeholder='Add ingredient..' onChange={myRecipeSearch} value={mySearch} />
    </form>
</div>

<div className='container'>
     <button onClick={finalSearch}>
         <img src={icon} alt="icon"/>
      </button>
</div>

{myRecipes.map ((element, index) => (
  <RecipesComponents key ={index} label={element.recipe.label} 
  cuisineType={element.recipe.cuisineType} 
  image={element.recipe.image} 
  calories={element.recipe.calories} 
  dishType={element.recipe.dishType}
  ingredients={element.recipe.ingredientLines}/>
))}
  
    </div>
  )
}

export default App;
