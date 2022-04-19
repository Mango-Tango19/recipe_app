import React from "react";
import { useState } from "react";
import HintPanel from "../hint-panel/hint-panel";
import InputTag from "../input-tag/input-tag";
import './search-panel.css'


const SearchPanel =  React.memo(({setMainIngridient}) => {

  console.log('SearchPanel render')

  let [ letter, setUserInput ] = useState('')
  const [ suggest, setSuggest ] = useState('')
  const [ inputTag, setInputTag ] = useState(null)

    const handleChange = (e) => {
      setUserInput( e.target.value )
      setSuggest(e.target.value)

    }

    const addToInput = (ingridient) => {
       setInputTag(ingridient.strIngredient)
       setMainIngridient(ingridient.strIngredient)
       setSuggest('')
       setUserInput('')

  }

  const handleClickOnTag = (e) => {
    e.preventDefault()
    setInputTag(null)
  }


    return (
      <div className="col-md-4 col-xs-12">
            <form className="search_form">
            <div className='mb-3 position-relative'>
                { inputTag ? <InputTag title={inputTag} handleClickOnTag={handleClickOnTag}/> : null }
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
})

export default SearchPanel;
