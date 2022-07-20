import image from "../img/preview.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='row d-flex align-items-center'>
          <div className='col-md-6 hero-left'>
            <h1 className='display-4 mb-5'>
              We Love <br></br>Cooking!
            </h1>

            <h2 className='mb-5'>Please login to use awesome features</h2>

            <div className='mb-2'>
              <Link
                className='btn btn-primary btn-shadow btn-lg'
                to='/auth'
                role='button'
              >
                Login
              </Link>
            </div>

            <ul className='hero-info list-unstyled d-flex text-center mb-0'>
              <li>
                <span className='lnr lnr-smile'></span>
                <h5>Easy Recipes</h5>
              </li>
              <li>
                <span className='lnr lnr-picture'></span>
                <h5>Pictures</h5>
              </li>
              <li>
                <span className='lnr lnr-film-play'></span>
                <h5>Videos</h5>
              </li>
            </ul>
          </div>
          <div className='col-md-6 hero-right'>
            <img src={image} className='img-fluid' alt='Yummy!!' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
