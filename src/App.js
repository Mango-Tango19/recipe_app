import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import { Home, RandomRecipePage, SearchRecipe } from "./pages";

const App = () => {
  return (
     <div className='container-fluid'>
       <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path="random" element={<RandomRecipePage />} />
            <Route path="/search" element={<SearchRecipe />} /> 
              {/* <Route path="recipes/:id" element={<SingleRecipe />} />
            */}
        </Routes>
      
    </div>
  );
};
export default App;
