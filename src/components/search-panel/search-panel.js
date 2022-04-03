const SearchPanel = () => {
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
            />
            <div id='recipeHelp' className='form-text'>
              We'll sugest you yummy dishes 🤩
            </div>
          </div>
        </form>
      );
}


export default SearchPanel