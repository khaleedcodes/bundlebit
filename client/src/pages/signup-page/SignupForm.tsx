import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { Eye, EyeOff } from "lucide-react";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);

  const navigate = useNavigate();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!(password === confirmPassword)) {
      setMessage("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userID", data.user.id);
        navigate("/b/dashboard");
      }
      console.log(data.message);
      setMessage(data.message);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 flex flex-wrap-reverse flex-col items-center gap-8 grow max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-center">
          Join{" "}
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
          required
        />

        {/*username Field*/}
        <input
          className="bg-[#040F0F] w-full min-h-11 rounded-md outline-none border-none pl-10"
          type="text"
          placeholder="Username"
          autoComplete="off"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />

        {/*Password Field*/}
        <div className="flex items-center w-full rounded-md bg-[#040F0F]">
          <input
            className="bg-[#040F0F] w-full min-h-11 rounded-md outline-none border-none pl-10"
            type={isPasswordShown ? `text` : `password`}
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <div
            className="select-none"
            onClick={() => {
              if (isPasswordShown) {
                setIsPasswordShown(false);
              } else {
                setIsPasswordShown(true);
              }
            }}
          >
            {isPasswordShown ? (
              <Eye
                cursor="pointer"
                size={30}
                stroke="grey"
                strokeWidth={1}
                className="pr-1"
              />
            ) : (
              <EyeOff
                cursor="pointer"
                size={30}
                stroke="grey"
                strokeWidth={1}
                className="pr-1"
              />
            )}
          </div>
        </div>
        {/*Confirm Password Field*/}
        <div className="flex items-center w-full rounded-md bg-[#040F0F]">
          <input
            className="bg-[#040F0F] w-full min-h-11 rounded-md outline-none border-none pl-10"
            type={isConfirmPasswordShown ? `text` : `password`}
            placeholder="Confirm Password"
            name="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />
          <div
            className="select-none"
            onClick={() => {
              if (isConfirmPasswordShown) {
                setIsConfirmPasswordShown(false);
              } else {
                setIsConfirmPasswordShown(true);
              }
            }}
          >
            {isConfirmPasswordShown ? (
              <Eye
                cursor="pointer"
                size={30}
                stroke="grey"
                strokeWidth={1}
                className="pr-1"
              />
            ) : (
              <EyeOff
                cursor="pointer"
                size={30}
                stroke="grey"
                strokeWidth={1}
                className="pr-1"
              />
            )}
          </div>
        </div>

        {message && <div className="text-third-blue">{message}</div>}
        <button
          disabled={loading}
          type="submit"
          style={{
            cursor: loading ? "not-allowed" : "pointer",
          }}
          className={`bg-third-blue h-11 disabled:bg-second-blue hover:bg-second-blue transition-all duration-150 p-3 text-white font-bold rounded-md w-full`}
        >
          {loading ? (
            <div className="h-full flex items-center justify-center pb-2">
              <PropagateLoader size={10} color="#fff" />
            </div>
          ) : (
            <p className="h-full flex items-center justify-center">
              create account
            </p>
          )}
        </button>
        <div className="flex gap-4">
          <p>
            Already Have an Account?{" "}
            <a href="/b/login" className="font-bold text-third-blue">
              Log In
            </a>
          </p>
        </div>
      </form>
    </>
  );
}

export default SignupForm;
