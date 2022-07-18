const ErrorIndicator = ({message}) => {
  return (
    <div className="container">
    <div class="alert alert-danger" role="alert">
  <h4 class="alert-heading">Got en error!</h4>
  <p>{ message ? message : 'Something went wrong' }</p>
  <hr></hr>
  <p class="mb-0">Please connect the support or</p>
  <button type="button" class="btn btn-primary">Go to the main page</button>

</div>
    </div>
  
  );
};




export default ErrorIndicator