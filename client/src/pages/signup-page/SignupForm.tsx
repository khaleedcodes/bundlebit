import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading((prevLoading) => !prevLoading);
    setIsButtonDisabled((prevIsButtonDisabled) => !prevIsButtonDisabled);
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
      setLoading((prevLoading) => !prevLoading);
      setIsButtonDisabled((prevIsButtonDisabled) => !prevIsButtonDisabled);
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
        <input
          className="bg-[#040F0F] w-full min-h-11 rounded-md outline-none border-none pl-10"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        {message && <div className="text-third-blue">{message}</div>}
        <button
          disabled={isButtonDisabled}
          type="submit"
          style={{
            cursor: isButtonDisabled ? "not-allowed" : "pointer",
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
