import { useState } from "react";
import HintPanel from "../hint-panel/hint-panel";

const SearchPanel = () => {

  const [ userInput, setUserInput ] = useState('')
  const [ suggest, setSuggest ] = useState('')

    const handleChange = (e) => {
      setUserInput(e.target.value)
      setSuggest(e.target.value)

    }

    const helpElement = (
        <div id='recipeHelp' className='form-text'>
            We'll sugest you yummy dishes 🤩
        </div>
    );

    return (
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
                    value={userInput}
                    onChange={(e) => handleChange(e)}
                />
                {!userInput ? helpElement : <HintPanel hint={suggest} />}
            </div>
        </form>
    );
};

export default SearchPanel;
