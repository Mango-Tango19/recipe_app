import { useState } from "react";
import HintPanel from "../hint-panel/hint-panel";

const SearchPanel = () => {

  const [ userInput, setUserInput ] = useState('')
  const [ suggest, setSuggest ] = useState('')

    const handleChange = (e) => {
      setUserInput(e.target.value)
      setSuggest(e.target.value)

    }


  //   const addToInput = (e, ingridient) => {

  //     e.preventDefault()
  //     console.log(ingridient)

  // }


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
                    value={userInput}
                    onChange={(e) => handleChange(e)}
                />
                {!userInput ? null : <HintPanel hint={suggest} />}
            </div>
        </form>
      </div>
    );
};

export default SearchPanel;
