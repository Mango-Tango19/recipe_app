import './profile.css'
const Profile = () => {
    return <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
              <form>
  
                <div className="row">
                  <div className="pb-2">
                    <div className="form-outline">
                      <input type="email" id="emailAddress" className="form-control form-control-lg" required/>
                      <label className="form-label" for="emailAddress">Email</label>
                    </div>
                  </div>
                </div>


                <div className="row">
                  <div className="mb-4">
                    <div className="form-outline">
                      <input type="password" id="pwd" className="form-control form-control-lg" required/>
                      <label className="form-label" for="pwd">Password</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="mb-4">
                    <div className="form-outline">
                      <input type="password" id="rePwd" className="form-control form-control-lg" required/>
                      <label className="form-label" for="rePwd">Repeat password</label>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-2">
                  <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Profile