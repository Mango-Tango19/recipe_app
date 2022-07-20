import { useSelector } from "react-redux";
import "./auth.css";
import { RegistrationForm } from "./registration-form";
const Auth = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <section className='vh-100 gradient-custom'>
      <div className='container py-5 h-100'>
        <div className='row justify-content-center align-items-center h-100'>
          <div className='col-12 col-lg-9 col-xl-7'>
            <div className='card shadow-2-strong card-registration'>
              <div className='card-body p-4 p-md-5'>
                {!isLoggedIn && <RegistrationForm />}
                {isLoggedIn && (
                  <h3 className='text-center'>
                    You are alredy logged in{" "}
                    <span className='lnr lnr-smile'></span>
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
