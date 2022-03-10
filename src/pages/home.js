import { Link } from "react-router-dom";

const Home = () => {
    return <>
           <div className="hero">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 hero-left">
                        <h1 className="display-4 mb-5">We Love <br></br>Cooking!</h1>
                      
                        <div className="mb-2">
                            <Link className="btn btn-primary btn-shadow btn-lg" to="/profile" role="button">Log In</Link>
                        </div>
                        <ul className="hero-info list-unstyled d-flex text-center mb-0">
                            <li >
                                <span className="lnr lnr-rocket"></span>
                                <h5>
                               Easy Recipes
                                </h5>
                            </li>
                            <li >
                                <span className="lnr lnr-leaf"></span>
                                <h5>
                               Instructions with Pictures
                                </h5>
                            </li>
                            <li>
                                <span className="lnr lnr-bubble"></span>
                                <h5>
                                    24/7 Support
                                </h5>
                            </li>
                        </ul>

                   

                    </div>
                    <div className="col-md-6 hero-right">
                    <img src="https://spoonacular.com/recipeImages/654959-312x231.jpg" className="img-fluid" alt="Yummy!!" /> 
                    </div>
                </div>
            </div>
        </div> 
     </>

}

export default Home