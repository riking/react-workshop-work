import { Link } from 'react-router-dom';
// import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className='ErrorPage'>
        Error! <Link to="/">Return Home</Link>
    </div>
  )
};

export default ErrorPage;
