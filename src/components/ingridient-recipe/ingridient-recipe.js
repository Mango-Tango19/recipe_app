import Emoji from "../emoji-component/emoji";
import { useMemo } from "react";

const IngridientRecipes = ({ emoji }) => {

    const emojiObj = useMemo(() => {
        return {
          chicken: "🍗",
          beef: "🍖",
          vegetables: "🥗",
        };
      }, []);


  
    return (
      <div className='col-lg-4 col-sm-4  col-xs-1 d-flex justify-content-center py-3 flex-column '>
        <a href='/' className='thumb-menu btn btn-info'>
          {emojiObj[emoji] ? (
            <Emoji label={emoji} symbol={emojiObj[emoji]} />
          ) : (
            <p>{emoji}</p>
          )}
        </a>
        <img
          className='img-fluid img-cover'
          src='https://spoonacular.com/recipeImages/654959-312x231.jpg'
          alt='Hello!'
        />
        <h6>Australian Organic Beef</h6>
      </div>
    );
  };

  export default IngridientRecipes