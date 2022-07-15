import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-light'>
      <Link className='navbar-brand' to='/'>
        Foody
      </Link>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#foodyNavbar'
        aria-controls='foodyNavbar'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='foodyNavbar'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/random'>
              Random Recipe{" "}
            </Link>
          </li>

          <li className='nav-item active'>
            <Link className='nav-link' to='/search'>
              Search By Main Ingridient
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
