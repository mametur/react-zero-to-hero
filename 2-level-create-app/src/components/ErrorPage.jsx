import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="error-page">
      <h1>Opppss!!!!</h1>
      <p>Something went wrong</p>
      <p>{error.status + " " + error.statusText}</p>
    </div>
  );
};

export default ErrorPage;
