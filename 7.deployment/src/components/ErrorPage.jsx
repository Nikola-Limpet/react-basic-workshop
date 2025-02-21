import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <h1>Oops! Something went wrong</h1>
      <p>{error.message}</p>
      <Link to="/" className="button-primary">
        Return Home
      </Link>
    </div>
  );
};

export default ErrorPage;