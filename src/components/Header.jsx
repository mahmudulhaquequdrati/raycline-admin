import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../features/auth/authSlice";
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogut = () => {
    localStorage.removeItem("authNutraNextUser");
    dispatch(userLoggedOut());
    navigate("/login");
  };
  return (
    <div className="px-4 md:px-8 py-[1.30rem] bg-[#fff] flex justify-center items-center">
      <div className="max-w-[1140px] w-full mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} className="w-[80%] md:w-[100%]" alt="logo" />
        </Link>

        <div className="flex gap-3 md:gap-8 uppercase ">
          <Link
            to="/"
            className={` cursor-pointer text-primary text-sm font-medium`}
          >
            VETERINARI
          </Link>
          <Link
            to="/utenti"
            className={` cursor-pointer text-primary text-sm font-medium`}
          >
            UTENTI
          </Link>
          <h2
            onClick={handleLogut}
            className={` cursor-pointer text-primary text-sm font-medium`}
          >
            LOGOUT
          </h2>
        </div>
      </div>
    </div>
  );
}
