import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";

const App = () => {
  return (
     <div className='container-fluid'>
       <Navbar />
        <Routes>
      
          <Route path='/' element={<Home />} />
                  {/* <Route path="random" element={<RandomRecipe />} />
            <Route path="/search" element={<Search />} /> 
            <Route path="recipes/:id" element={<SingleRecipe />} />
            */}
        </Routes>
      
    </div>
  );
};
export default App;
