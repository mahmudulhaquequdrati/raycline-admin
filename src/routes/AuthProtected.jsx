import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthProtected = ({ children }) => {
  const location = useLocation();
  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};
  console.log(user);
  console.log(accessToken);
  return !user && !accessToken ? (
    <Navigate to={{ pathname: "/login", state: { from: location } }} />
  ) : (
    children
  );
};

export default AuthProtected;
