import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../features/auth/authSlice";

const getLoggedinUser = () => {
  const user = localStorage.getItem("authNutraNextAdmin");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

const useProfile = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const userProfileSession = getLoggedinUser();

    if (userProfileSession) {
      dispatch(
        userLoggedIn({
          accessToken: userProfileSession.accessToken,
          user: userProfileSession.user,
        })
      );
    }

    setLoading(false);
  }, [dispatch]);
  return { loading };
};

export { useProfile };
