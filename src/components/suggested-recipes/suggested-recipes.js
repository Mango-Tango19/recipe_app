import { useMemo } from "react";

const SingleIngridientSection = ({ ingridient }) => {

    const imageUrl = useMemo(() => {

        return `https://www.themealdb.com/images/ingredients/${ingridient}.png`

    }, [ingridient])


    return (
        <div className='col-lg-4 col-md-3   col-sm-4  col-xs-1'>
        <a href='#' className='thumb-menu'>
          <img className='img-fluid img-cover' src={`${imageUrl}`} alt={ingridient}/>
        </a>
      </div>
    )
}

const SuggestedRecipes = () => {
  return (
    <section id='gtco-menu' className='section-padding'>
      <div className='container'>
        <div className='section-content'>
          <div className='row mb-2'>
            <div className='col-md-12'>
              <div className='heading-section text-center'>
                <h2>Most Popular Ingridients</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
        
           < SingleIngridientSection ingridient='Chicken'/>

           < SingleIngridientSection ingridient='Beef'/>

           < SingleIngridientSection ingridient='Salmon'/>
           
      
          </div>
        </div>
      </div>
    </section>
  );
};




export default SuggestedRecipes;
