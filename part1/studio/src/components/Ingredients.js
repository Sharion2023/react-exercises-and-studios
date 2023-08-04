import styles from './Ingredients.module.css';


export default function RecipeIngredients(){
    const ingredients = ["1 pound broccoli crowns", "3 tablespoons extra-virgin olive oil", "3 tablespoons mayonnaise", "1½ tablespoons apple cider vinegar",
     "2 teaspoons Dijon mustard"]

     return (
     <div>
      <h3>Recipe Ingredients</h3>
      <ul className = {styles.ingredientList}>
         <li>{ingredients[0]}</li>
         <li>{ingredients[1]}</li>
         <li>{ingredients[2]}</li>
         <li>{ingredients[3]}</li>
         <li>{ingredients[4]}</li>
      </ul>
   </div>)
}