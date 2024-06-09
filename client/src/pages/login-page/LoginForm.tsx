import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submitted");
    axios
      // .post("http://localhost:3001/login", {
      // .post("https://bundleup-server.onrender.com/login", {
        .post("https://bundleup-fullstack.onrender.com/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data.message === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 flex flex-wrap-reverse flex-col items-center gap-8 grow max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-center">
          Welcome back to{" "}
          <span className="text-third-blue">
            Bundle<span className="text-second-blue">up</span>
          </span>
        </h1>
        {/*email Field*/}
        <input
          className="bg-[#040F0F] w-full min-h-11 rounded-md outline-none border-none pl-10"
          type="email"
          placeholder="Email Address"
          autoComplete="off"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        {/*Password Field*/}
        <input
          className="bg-[#040F0F] w-full min-h-11 rounded-md outline-none border-none pl-10"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button
          type="submit"
          className="bg-third-blue hover:bg-second-blue transition-all duration-150 p-3 text-white font-bold rounded-md w-full"
        >
          Login
        </button>
        <div className="flex gap-4">
          <p>
            Don't Have an Account Yet?{" "}
            <Link to="/signup" className="font-bold text-third-blue">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
