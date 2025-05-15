import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { Eye, EyeOff } from "lucide-react";
import GoogleAuthButton from "../../auth/GoogleAuthButton";
import { useAuth } from "../../context/AuthContext";
import { useSearchParams } from "react-router-dom";

function SignupForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [isConfirmPasswordFocus, setIsConfirmPasswordFocus] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const { login } = useAuth();

  const [searchParams] = useSearchParams();
  const paramUsername = searchParams.get("username");

  useEffect(() => {
    emailInputRef.current?.focus();
    if (paramUsername && usernameInputRef.current) setUsername(paramUsername);
  }, [paramUsername]);

  const navigate = useNavigate();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!(password === confirmPassword)) {
      setMessage("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/bundlebit/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, username, password }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        const { token, user } = data;
        login(token, user);
        navigate("/b/dashboard");
      }
      console.log(data.message);
      setMessage(data.message);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Please try again.");
      setLoading(false);
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
          <span className="text-new-main-1">
            Bundle<span className="text-new-main-2">bit</span>
          </span>
          {paramUsername && ` as @${paramUsername}`}
        </h1>
        {/*email Field*/}
        <input
          ref={emailInputRef}
          className="bg-[#040F0F] w-full min-h-11 rounded-md pl-10 border-none focus:outline-none focus:ring-2 focus:ring-third-blue"
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
          ref={usernameInputRef}
          className="bg-[#040F0F] w-full min-h-11 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-third-blue pl-10"
          type="text"
          placeholder="Username"
          autoComplete="off"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />

        {/*Password Field*/}
        <div
          className={`flex items-center w-full rounded-md bg-[#040F0F] border-none ${
            isPasswordFocus ? " ring-2 ring-third-blue" : ""
          }`}
        >
          <input
            ref={passwordInputRef}
            className="bg-[#040F0F] w-full min-h-11 rounded-md border-none outline-none pl-10"
            type={isPasswordShown ? `text` : `password`}
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            onFocus={() => {
              setIsPasswordFocus(true);
            }}
            onBlur={() => {
              setIsPasswordFocus(false);
            }}
          />
          <div
            className="select-none"
            onMouseDown={(e) => {
              e.preventDefault();
              if (isPasswordShown) {
                setIsPasswordShown(false);
              } else {
                setIsPasswordShown(true);
              }
              passwordInputRef.current?.focus();
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
        <div
          className={`flex items-center w-full rounded-md bg-[#040F0F] border-none ${
            isConfirmPasswordFocus ? " ring-2 ring-third-blue" : ""
          }`}
        >
          <input
            ref={confirmPasswordInputRef}
            className="bg-[#040F0F] w-full min-h-11 rounded-md border-none outline-none pl-10"
            type={isConfirmPasswordShown ? `text` : `password`}
            placeholder="Confirm Password"
            name="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
            onFocus={() => {
              setIsConfirmPasswordFocus(true);
            }}
            onBlur={() => {
              setIsConfirmPasswordFocus(false);
            }}
          />
          <div
            className="select-none"
            onMouseDown={(e) => {
              e.preventDefault();
              if (isConfirmPasswordShown) {
                setIsConfirmPasswordShown(false);
              } else {
                setIsConfirmPasswordShown(true);
              }
              confirmPasswordInputRef.current?.focus();
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
        <div className="w-full flex flex-col gap-4">
          <button
            disabled={loading}
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
          <GoogleAuthButton />
        </div>
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
