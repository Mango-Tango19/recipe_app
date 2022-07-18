

const ErrorIndicator = ({message}) => {
  return (
    <div className="container">
    <div class="alert alert-danger" role="alert">
  <h4 class="alert-heading">Got en error!</h4>
  <p>{ message ? message : 'Something went wrong' }</p> 
  <hr></hr>
  <span class="mb-0">Please connect the support or </span>
  <a href="/"  class="alert-link">go to the main page</a>

</div>
    </div>
  
  );
};




export default ErrorIndicator