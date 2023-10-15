

import LoginForm from "../modules/Login/LoginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex justify-between items-start min-h-screen  ">
         <div className=" w-full md:w-6/12 min-h-screen flex justify-center items-center">
        <LoginForm /> 
      </div>
      <div className="bg-[#06355F] min-h-screen w-6/12 rounded-tr-full rounded-br-full hidden md:block">
        <div className="flex justify-start items-center min-h-screen ">
            <Image src="/heroLogin.svg"  width={100} height={100} alt="hero login" className="w-10/12" /> 
        </div>
      </div>
     
    </div>
  );
};

export default LoginPage;
