import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  return user ? (
    children
  ) : (
    <Navigate state={location.pathname} to="/auth/login"></Navigate>
  );
};

export default PrivateRoute;
