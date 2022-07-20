import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import {
  HomePage,
  RandomRecipePage,
  SearchRecipePage,
  PopularIngridientRecipePage,
  SinglrRecipePage,
  AuthPage,
} from "./pages";

const App = () => {
  return (
    <div className='container-fluid'>
      <Navbar />
      <Routes>
        <Route path='/auth' element={<AuthPage />} />

        <Route path='/' element={<HomePage />} />
        <Route path='/random' element={<RandomRecipePage />} />
        <Route path='search/*' element={<SearchRecipePage />} />
        <Route path='search/:id' element={<SinglrRecipePage />} />

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
