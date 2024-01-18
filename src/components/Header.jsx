import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <div className="px-4 md:px-8 py-[1.30rem] bg-[#fff] flex justify-center items-center">
      <div className="max-w-[1140px] w-full mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} className="w-[80%] md:w-[100%]" alt="logo" />
        </Link>

        <div className="flex gap-3 md:gap-8 uppercase ">
          <Link
            to="/login"
            className={` cursor-pointer text-primary text-sm font-medium`}
          >
            accedi
          </Link>
          <h2 className={` cursor-pointer text-primary text-sm font-medium`}>
            Profilo Admin
          </h2>
        </div>
      </div>
    </div>
  );
}
