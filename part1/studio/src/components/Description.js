import styles from './Description.module.css'
import React from 'react'

function RecipeAuthor() {
    const authorLink = "https://www.loveandlemons.com/broccoli-salad/";
    const authorPhoto = "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/IMG_41499-layers.jpg";
    const authorName = "Jeanine";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Love and Lemons</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
    return(
    <div> 
        <div>
           <h1> Best Broccoli Salad </h1>
           <p>Delicious broccoli salad!</p>
        </div>
        <RecipeAuthor />
     </div>
     )
     }
    }

    export default RecipeDescription;