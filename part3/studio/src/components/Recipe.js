const RecipeAuthor = () => {
   let authorLink = "https://www.loveandlemons.com/broccoli-salad/";
   let authorPhoto = "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/IMG_41499-layers.jpg";
   let authorName = "Jeanine";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["1 pound broccoli crowns",
      "3 tablespoons extra-virgin olive oil",
      "3 tablespoons mayonnaise",
      "1½ tablespoons apple cider vinegar",
      "2 teaspoons Dijon mustard"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://cdn.loveandlemons.com/wp-content/uploads/2019/05/broccoli-salad-683x1024.jpg" alt="Broccoli salad" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}