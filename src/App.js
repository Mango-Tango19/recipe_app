import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import {
  HomePage,
  RandomRecipePage,
  SearchRecipePage,
  PopularIngridientRecipePage,
  SinglrRecipePage,
} from "./pages";

const App = () => {
  return (
    <div className='container-fluid'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/random' element={<RandomRecipePage />} />
        <Route path='search/*' element={<SearchRecipePage />} >
            <Route
              path='search/:id'
              element={<SinglrRecipePage />}
            />
            </Route>
        <Route
          path='/chicken'
          element={<PopularIngridientRecipePage ingridient='chicken' />}
        />
        <Route
          path='/beef'
          element={<PopularIngridientRecipePage ingridient='beef' />}
        />
        <Route
          path='/salmon'
          element={<PopularIngridientRecipePage ingridient='salmon' />}
        />
           {/* <Route path="*" element={<NotFound />} /> */}
     
      </Routes>
    </div>
  );
};
export default App;
