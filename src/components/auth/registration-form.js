import React, { useState } from "react";
import PropTypes from "prop-types";

export const RegistrationForm = ({ setToken }) => {
  const [useremail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  async function loginUser(credentials) {
    return fetch("http://localhost:8080/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      useremail,
      password,
    });
    setToken(token);
  };

  return (
    <>
      <h3 className='mb-4 pb-2 pb-md-0 mb-md-5'>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='pb-2'>
            <div className='form-outline'>
              <input
                type='email'
                id='emailAddress'
                className='form-control form-control-lg'
                required
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <label className='form-label' htmlFor='emailAddress'>
                Email
              </label>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='mb-4'>
            <div className='form-outline'>
              <input
                type='password'
                id='pwd'
                className='form-control form-control-lg'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className='form-label' htmlFor='pwd'>
                Password
              </label>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='mb-4'>
            <div className='form-outline'>
              <input
                type='password'
                id='rePwd'
                className='form-control form-control-lg'
              />
              <label className='form-label' htmlFor='rePwd'>
                Repeat password
              </label>
            </div>
          </div>
        </div>
        <div className='mt-4 pt-2'>
          <input
            className='btn btn-primary btn-lg'
            type='submit'
            value='Submit'
          />
        </div>
      </form>
    </>
  );
};

RegistrationForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};
