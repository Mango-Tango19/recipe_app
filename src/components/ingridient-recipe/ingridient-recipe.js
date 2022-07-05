import Emoji from "../emoji-component/emoji";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const IngridientRecipes = (props) => {


    const emojiObj = useMemo(() => {
        return {
          chicken: "🍗",
          beef: "🍖",
          vegetables: "🥗",
        };
      }, []);

const { emoji } = props

  
    return (
      <div className='col-lg-4 col-sm-4  col-xs-1 d-flex justify-content-center py-3 flex-column '>
        <Link to={`/${emoji}`} className='thumb-menu btn btn-info'>
          {emojiObj[emoji] ? (
            <Emoji label={emoji} symbol={emojiObj[emoji]} />
          ) : (
            <p>{emoji}</p>
          )}
        </Link>

        <p style={{textAlign: 'center'}}>{emoji}</p>
        
            { props.children }
        
      </div>
    );
  };

  export default IngridientRecipes