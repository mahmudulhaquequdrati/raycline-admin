/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useProfile } from "../components/hooks/userHooks";

const AuthProtected = ({ children }) => {
  // const location = useLocation();
  // const state = useSelector((state) => state.auth);

  // const { user, accessToken } = state || {};
  // console.log(user);
  // console.log(accessToken);
  // return !user && !accessToken ? (
  //   <Navigate to={{ pathname: "/login", state: { from: location } }} />
  // ) : (
  //   children
  // );
  const location = useLocation();
  // const { userProfile, loading } = useProfile();

  const { loading } = useProfile();

  const state = useSelector((state) => state.auth);

  const { user, accessToken } = state || {};

  if (loading) {
    return;
  }

  return !user && !accessToken && !loading ? (
    // dispatch(userFrom(location)),
    <Navigate to={`/login`} state={{ from: location }} />
  ) : (
    // <Navigate to={`/signin`} />
    children
  );
};

export default AuthProtected;
