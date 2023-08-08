let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) { 
  function GiveRating(props) {
    return <h3>{stars[props.rating-1]}</h3>
  }
  const isValidating = props.rating >= 1 && props.rating <=5;
   return isValidating ? <GiveRating rating= {props.rating}/>: null; 
  //return stars;
  }
  

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
