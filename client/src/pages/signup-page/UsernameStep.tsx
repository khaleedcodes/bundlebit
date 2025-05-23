import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";
import { CheckCircle } from "lucide-react";
import { XCircle } from "lucide-react";

interface UsernameStepProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<string>>;
  paramUsername?: string;
  usernameInputRef: RefObject<HTMLInputElement>;
}

function UsernameStep({
  username,
  setUsername,
  setStep,
  paramUsername,
  usernameInputRef,
}: UsernameStepProps) {
  async function handleUsernameSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username.length < 1) {
      return;
    }
    if (isUsernameAvailable) setStep("2");
  }

  useEffect(() => {
    async function checkIsUsernameAvailable() {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/api/auth/check-username?username=${username}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      setUsernameSuggestions(data.suggestions);
      if (data.isUsernameAvailable) {
        setIsUsernameAvailable(true);
      } else {
        setIsUsernameAvailable(false);
      }
    }
    if (username.length < 1) return;
    checkIsUsernameAvailable();
  }, [username]);

  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);
  const [usernameSuggestions, setUsernameSuggestions] = useState([]);

  return (
    <>
      <form
        onSubmit={handleUsernameSubmit}
        className="p-4 flex flex-wrap-reverse flex-col items-center gap-8 grow max-w-2xl w-full justify-center"
      >
        <h1 className="text-4xl font-bold text-center">
          Join{" "}
          <span className="text-new-main-1">
            Bundle<span className="text-new-main-2">bit</span>
          </span>
          {paramUsername && ` as @${paramUsername}`}
        </h1>
        {/* Username Field */}
        <div className="w-full flex flex-col">
          <div
            className={`flex bg-[#040F0F] w-full rounded-md pl-10 items-center group focus-within:ring-2 focus-within:ring-third-blue ${
              isUsernameAvailable
                ? "focus-within:ring-2 focus-within:ring-green-600"
                : "focus-within:ring-2 focus-within:ring-red-600"
            }`}
          >
            <span className="text-grey text-base font-medium">
              bundlebit.me/
            </span>
            <input
              ref={usernameInputRef}
              className="w-full bg-[#040F0F]  min-h-11 rounded-md border-none focus:outline-none "
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
              required
            />
            <span className="text-grey text-base font-medium">
              {isUsernameAvailable ? (
                <CheckCircle
                  className="text-green-500 pr-1"
                  strokeWidth={1}
                  size={24}
                />
              ) : (
                <XCircle
                  className="text-red-500 pr-1"
                  size={24}
                  strokeWidth={1}
                />
              )}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              {!isUsernameAvailable && (
                <p className="text-red-500">
                  That username has been taken please choose another one
                </p>
              )}
            </div>
            <div className="flex gap-2 w-full">
              {/* {isUsernameAvailable ? "available" : "unavailable"} */}
              {usernameSuggestions &&
                usernameSuggestions.map((usernameSuggestion, index) => (
                  <span
                    key={index}
                    onClick={() => {
                      setUsername(usernameSuggestion);
                    }}
                    className="text-third-blue hover:underline cursor-pointer"
                  >
                    @{usernameSuggestion}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <button
          disabled={!isUsernameAvailable || username.length < 1}
          style={{
            cursor:
              !isUsernameAvailable || username.length < 1
                ? "not-allowed"
                : "pointer",
          }}
          className={`bg-third-blue h-11 disabled:bg-second-blue hover:bg-second-blue transition-all duration-150 p-3 text-white font-bold rounded-md w-full`}
        >
          <p className="h-full flex items-center justify-center">continue</p>
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

export default UsernameStep;
