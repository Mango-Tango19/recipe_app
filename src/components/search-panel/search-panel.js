import { useState } from "react";
import HintPanel from "../hint-panel/hint-panel";
import InputTag from "../input-tag/input-tag";
import './search-panel.css'


const SearchPanel = () => {

  let [ letter, setUserInput ] = useState('')
  const [ suggest, setSuggest ] = useState('')

    const handleChange = (e) => {
      setUserInput( e.target.value )
      setSuggest(e.target.value)

    }

    const addToInput = (ingridient) => {
       setUserInput(ingridient.strIngredient)
       setSuggest('')

  }


    return (
      <div className="col-md-4 col-xs-12">
            <form className="search_form">
            <div className='mb-3 position-relative'>

                <InputTag />

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
                {!suggest ? null : <HintPanel hint={suggest} addToInput={addToInput}/>}
            </div>
        </form>
      </div>
    );
};

export default SearchPanel;
