export const RegistrationForm = () => {
  return (
    <>
      <h3 className='mb-4 pb-2 pb-md-0 mb-md-5'>Registration Form</h3>
      <form>
        <div className='row'>
          <div className='pb-2'>
            <div className='form-outline'>
              <input
                type='email'
                id='emailAddress'
                className='form-control form-control-lg'
                required
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
                required
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
