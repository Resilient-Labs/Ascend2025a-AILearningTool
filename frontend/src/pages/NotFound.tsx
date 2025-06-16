import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <main className="not-found-container">
      <h1>404 - Resource Not Found</h1>
      <h2>The requested endpoint does not exist or has been deprecated.</h2>
      <p>
        Try navigating <Link to="/">home</Link> or checking the URL for typos.
      </p>
    </main>
  );
};

export default NotFound;
