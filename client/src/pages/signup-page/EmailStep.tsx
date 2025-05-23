// import React, { useState, Dispatch, SetStateAction, RefObject } from "react";
// import { PropagateLoader } from "react-spinners";
import GoogleAuthButton from "../../auth/GoogleAuthButton";

interface EmailStepProps {
  // email: string;
  username: string;
  // setEmail: Dispatch<SetStateAction<string>>;
  // setStep: Dispatch<SetStateAction<string>>;
  // emailInputRef: RefObject<HTMLInputElement>;
}

function EmailStep({
  // email,
  // emailInputRef,
  // setEmail,
  username,
}: EmailStepProps) {
  // const [isEmailExists, setIsEmailExists] = useState(null);
  // const [emailLoading, setEmailLoading] = useState(false);
  // const [emailMessage, setEmailMessage] = useState(false);
  // const [message, setMessage] = useState("");
  // const [verificationCode, setVerificationCode] = useState("");

  // step 2
  // async function handleEmailSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   setEmailLoading(true);

  //   if (email.length < 1) {
  //     return;
  //   }

  //   const isEmailExists = await checkEmailExists();
  //   console.log(isEmailExists);
  //   setIsEmailExists(isEmailExists);
  //   sendVerificationCode();

  //   // console.log(checkEmailExists);
  //   // sendVerificationCode();
  //   // if (isUsernameAvailable) setStep("2");
  // }

  // async function checkEmailExists() {
  //   const res = await fetch(
  //     `${import.meta.env.VITE_API_URL}/api/auth/check-email?email=${email}`,
  //     {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );
  //   const data = await res.json();
  //   setEmailLoading(false);
  //   return data.isEmailExists;
  // }

  // async function sendVerificationCode() {
  //   const res = await fetch(
  //     `${import.meta.env.VITE_API_URL}/api/auth/verification-code/generate`,
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, purpose: "signup" }),
  //     }
  //   );
  //   const data = await res.json();
  //   console.log(data);
  //   setEmailMessage(data.message);
  //   setMessage(data.message);
  // }

  // async function validateVerificationCode(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   const res = await fetch(
  //     `${import.meta.env.VITE_API_URL}/api/auth/verification-code/validate`,
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, verificationCode }),
  //     }
  //   );
  //   const data = await res.json();
  //   console.log(data);
  // }

  return (
    <>
      <form
        // onSubmit={handleEmailSubmit}
        className="p-4 flex flex-wrap-reverse flex-col items-center gap-8 grow max-w-2xl w-full justify-center"
      >
        <h1 className="text-4xl font-bold text-center">
          Join{" "}
          <span className="text-new-main-1">
            Bundle<span className="text-new-main-2">bit</span>
          </span>
          {username && ` as @${username}`}
        </h1>
        {/* <div className="w-full flex flex-col gap-2">
          <input
            ref={emailInputRef}
            className="bg-[#040F0F] w-full min-h-11 rounded-md pl-10 border-none focus:outline-none focus:ring-2 focus:ring-third-blue"
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            disabled={!isEmailExists && isEmailExists != null}
          />
          <div>
            {isEmailExists && (
              <p className="text-third-blue">Email Address already in use</p>
            )}
          </div>
        </div> */}

        {/* {!isEmailExists && isEmailExists != null && (
          <form
            onSubmit={validateVerificationCode}
            className="flex flex-col gap-8 max-w-2xl w-full"
          >
            <div className="w-full flex flex-col gap-2">
              <input
                className="bg-[#040F0F] w-full min-h-11 rounded-md pl-10 border-none focus:outline-none focus:ring-2 focus:ring-third-blue"
                type="text"
                placeholder="verification code"
                name="verification code"
                onChange={(e) => setVerificationCode(e.target.value)}
                value={verificationCode}
                required
              />
              {emailMessage && <p>{emailMessage}</p>}
            </div>

            <div className="w-full flex flex-col gap-4">
              <button
                disabled={emailLoading}
                style={{ cursor: emailLoading ? "not-allowed" : "pointer" }}
                className={`bg-third-blue h-11 disabled:bg-second-blue hover:bg-second-blue transition-all duration-150 p-3 text-white font-bold rounded-md w-full`}
              >
                {emailLoading ? (
                  <div className="h-full flex items-center justify-center pb-2">
                    <PropagateLoader size={10} color="#fff" />
                  </div>
                ) : (
                  <p className="h-full flex items-center justify-center">
                    continue
                  </p>
                )}
              </button>
            </div>
          </form>
        )} */}

        {/* {message && <div className="text-third-blue">{message}</div>} */}

        <div className="w-full flex flex-col gap-4">
          {/* {(isEmailExists === null || isEmailExists) && (
            <button
              disabled={emailLoading}
              style={{ cursor: emailLoading ? "not-allowed" : "pointer" }}
              className={`bg-third-blue h-11 disabled:bg-second-blue hover:bg-second-blue transition-all duration-150 p-3 text-white font-bold rounded-md w-full`}
            >
              {emailLoading ? (
                <div className="h-full flex items-center justify-center pb-2">
                  <PropagateLoader size={10} color="#fff" />
                </div>
              ) : (
                <p className="h-full flex items-center justify-center">
                  continue
                </p>
              )}
            </button>
          )} */}

          <GoogleAuthButton username={username} />
        </div>
      </form>
    </>
  );
}

export default EmailStep;
