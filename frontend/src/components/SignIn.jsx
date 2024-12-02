import Button from "./Button";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <>
      <div className="h-[153px] w-[153px] bg-[#F4C39F] rounded-full flex justify-center items-center text-5xl font-extrabold mt-14">LOGO</div>
      <div className="w-full my-10">
        <p className="text-left text-2xl ml-2">Sign In</p>
        <input className="border-2 rounded-md p-[14px] w-full mt-10 text-base" type="text" placeholder="Username"/>
        <input className="border-2 rounded-md p-[14px] w-full mt-5 text-base" type="password" placeholder="Password"/>
        <p className="text-right"><a className="text-blue-800 underline" href="#">Forgot Password</a></p>
      </div>
      <Button text='Sign in'/>
      <div className="mt-7 flex justify-center items-center gap-4">
        <div className="h-[1px] bg-gray-400 w-[100px]"></div>
        <p>Or</p>
        <div className="h-[1px] bg-gray-400 w-[100px]"></div>
      </div>
      <div className="w-[100px] flex justify-between items-center mt-7">
      <a href="#"><FcGoogle className="text-3xl"/></a>
      <a href="#"><BsFacebook className="text-[#1877F2] text-3xl"/></a>
      </div>
      <p className="text-blue-800 underline my-7">Don’t Have an account. Sign Up</p>
    </>
  )
};

export default SignIn;
