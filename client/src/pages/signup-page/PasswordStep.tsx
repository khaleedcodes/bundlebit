import  { useState, Dispatch, SetStateAction, useRef } from "react";
// import { PropagateLoader } from "react-spinners";
// import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";

interface EmailStepProps {
  password: string;
  email: string;
  username: string;
  setPassword: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<string>>;
}

function PasswordStep({
  password,
  // email,
  // username,
  setPassword,
}: EmailStepProps) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [isConfirmPasswordFocus, setIsConfirmPasswordFocus] = useState(false);
  // const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  // const { login } = useAuth();

  // const navigate = useNavigate();

  // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   if (!(password === confirmPassword)) {
  //     setMessage("Passwords do not match");
  //     return;
  //   }
  //   setLoading(true);
  //   try {
  //     const res = await fetch(
  //       `${import.meta.env.VITE_API_URL}/api/auth/bundlebit/register`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ email, username, password }),
  //       }
  //     );
  //     const data = await res.json();
  //     if (res.ok) {
  //       const { token, user } = data;
  //       login(token, user);
  //       navigate("/b/dashboard");
  //     }
  //     console.log(data.message);
  //     setMessage(data.message);
  //     setLoading(false);
  //   } catch (err) {
  //     console.error(err);
  //     setMessage("Something went wrong. Please try again.");
  //     setLoading(false);
  //   }
  // }

  // console.log(message);
  return (
    <>
      <form className="p-4 flex flex-wrap-reverse flex-col items-center gap-8 grow max-w-2xl w-full">
        {/* Password Field */}
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
              setIsPasswordShown((prev) => !prev);
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

        {/* Confirm Password Field */}
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
            name="confirmPassword"
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
              setIsConfirmPasswordShown((prev) => !prev);
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
        {/* <button
          disabled={loading}
          style={{ cursor: loading ? "not-allowed" : "pointer" }}
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
        </button> */}
      </form>
    </>
  );
}

export default PasswordStep;
