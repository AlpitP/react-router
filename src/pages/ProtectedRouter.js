import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export default ProtectedRoute;
