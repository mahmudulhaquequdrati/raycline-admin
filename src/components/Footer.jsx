import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-[16px] md:py-8 px-5 md:px-6 xl:px-28 flex justify-center">
      <div className="max-w-[1140px] w-full mx-auto">
        <div className="">
          <div className="w-[125px] mb-3">
            <img src={logo} className="w-[80%] md:w-[100%]" alt="logo" />
          </div>
          <ul>
            <li className="text-[13px] leading-5">Racyline S.r.l.</li>
            <li className="text-[13px] leading-5">
              Via Castagnola, 42010, Toano (RE), Italia
            </li>
            <li className="text-[13px] leading-5">P.IVA 03008740353</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-3 sm:mt-8">
          <p className="text-[13px] leading-5">
            Al rights reserved | Copyright &copy; 2023
          </p>
          <ul className="flex gap-4 items-center">
            <li className="text-[13px] leading-5">Terms and Conditions</li>
            <li className="w-[3px] h-[3px] rounded-full bg-black"></li>
            <li className="text-[13px] leading-5">Privacy policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
