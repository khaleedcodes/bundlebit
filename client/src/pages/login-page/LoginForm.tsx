import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { Eye, EyeOff } from "lucide-react";
import GoogleAuthButton from "../../auth/GoogleAuthButton";
import { useAuth } from "../../context/AuthContext";

function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  const identifierInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const { login } = useAuth();

  useEffect(() => {
    identifierInputRef.current?.focus();
  }, []);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/bundleup/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });
      const data = await res.json();
      if (res.ok) {
        const { token, user } = data;
        login(token, user);
        navigate("/b/dashboard");
      }
      console.log(data.message);
      setMessage(data.message);
      setLoading(false);
    } catch (error) {
      console.error(error);
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
          Welcome back to{" "}
          <span className="text-third-blue">
            Bundle<span className="text-second-blue">up</span>
          </span>
        </h1>
        {/*Identifier Field*/}
        <input
          ref={identifierInputRef}
          className="bg-[#040F0F] w-full min-h-11 rounded-md pl-10 border-none focus:outline-none focus:ring-2 focus:ring-third-blue"
          type="text"
          placeholder="Email or Username"
          name="identifier"
          onChange={(e) => setIdentifier(e.target.value)}
          value={identifier}
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
            className="bg-[#040F0F] w-full min-h-11 rounded-md outline-none border-none pl-10"
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
        {message && <div className="text-third-blue">{message}</div>}
        <div className="w-full flex flex-col gap-4">
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
              <p className="h-full flex items-center justify-center">Login</p>
            )}
          </button>
          <GoogleAuthButton />
        </div>
        <div className="flex gap-4">
          <p>
            Don't Have an Account Yet?{" "}
            <Link to="/b/signup" className="font-bold text-third-blue">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
