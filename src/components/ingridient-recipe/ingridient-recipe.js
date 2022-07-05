import Emoji from "../emoji-component/emoji";
import { useMemo } from "react";


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
        <a href='/' className='thumb-menu btn btn-info'>
          {emojiObj[emoji] ? (
            <Emoji label={emoji} symbol={emojiObj[emoji]} />
          ) : (
            <p>{emoji}</p>
          )}
        </a>

        <p style={{textAlign: 'center'}}>{emoji}</p>
        
            { props.children }
        
      </div>
    );
  };

  export default IngridientRecipes