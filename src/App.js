import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { HomePage, RandomRecipePage, SearchRecipePage, PopularIngridientRecipePage } from "./pages";

const App = () => {
  return (
     <div className='container-fluid'>
       <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} /> 
            <Route path="random" element={<RandomRecipePage />} />
            <Route path="/search" element={<SearchRecipePage />} /> 
            <Route path="/chicken" element={<PopularIngridientRecipePage ingridient="chicken"/>} /> 
            <Route path="/beef" element={<PopularIngridientRecipePage ingridient="beef"/>} /> 
            <Route path="/vegetables" element={<PopularIngridientRecipePage ingridient="broccoli"/>} /> 
              {/* <Route path="recipes/:id" element={<SingleRecipe />} />
            */}
        </Routes>
      
    </div>
  );
};
export default App;
