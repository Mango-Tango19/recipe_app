import { useState } from "react";
import HintPanel from "../hint-panel/hint-panel";

const SearchPanel = () => {

  const [ { letter, words }, setUserInput ] = useState({
    letter: '',
    words: []
  })
  const [ suggest, setSuggest ] = useState('')

    const handleChange = (e) => {
      const letter = e.target.value
      setUserInput({
        ...words,
        letter
        
      })
      setSuggest(e.target.value)

    }

    const addToInput = (ingridient) => {
      console.log(ingridient)
      console.log(words)
      // setUserInput({
      //   ...letter,
      //   words: [ingridient]
      // })

  }


    return (
      <div className="col-md-4 col-xs-12">
            <form>
            <div className='mb-3'>
                <label htmlFor='ingridientInput' className='form-label'>
                    Please, type any ingridient
                </label>
                <input
                    type='text'
                    className='form-control'
                    id='ingridientInput'
                    aria-describedby='recipeHelp'
                    value={letter}
                    onChange={(e) => handleChange(e)}
                />
                {!letter ? null : <HintPanel hint={suggest} addToInput={addToInput}/>}
            </div>
        </form>
      </div>
    );
};

export default SearchPanel;
