import Button from "./Button";

const SplashScreen = () => {
  return <>
    <p className="text-5xl mt-[150px] mb-10">Logo</p>
    <p className="text-gray-600 mb-[250px]">Stay connected to your alumni</p>
    <Button text='Alumni/Students' />
    <p className="text-gray-600 my-2">Or</p>
    <Button text='College' />
  </>
};



export default SplashScreen;
