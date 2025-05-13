import WordMark from "../../assets/icons/WordMark";
import LoginForm from "./LoginForm";
import loginImage from "../../assets/images/login.png";
function LoginPage() {
  return (
    <div className="flex w-full justify-center bg-black">
      <div className="fixed left-0 top-0 p-4">
        <WordMark />
      </div>
      <div className="w-full h-full flex text-white">
        <div className="w-full min-h-lvh flex items-center justify-center">
          <LoginForm />
        </div>
        <div className="bg-second-blue w-[40%] flex items-center justify-center max-lg:hidden">
          <img src={loginImage} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
