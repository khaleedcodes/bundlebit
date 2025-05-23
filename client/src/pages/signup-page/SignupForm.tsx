import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import UsernameStep from "./UsernameStep";
import EmailStep from "./EmailStep";
// import PasswordStep from "./PasswordStep";

function SignupForm() {
  const [step, setStep] = useState("1");

  // const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const emailInputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  const [searchParams] = useSearchParams();
  const paramUsername = searchParams.get("username");

  useEffect(() => {
    usernameInputRef.current?.focus();
    if (paramUsername && usernameInputRef.current) setUsername(paramUsername);
  }, [paramUsername]);

  switch (step) {
    case "1":
      return (
        <UsernameStep
          setStep={setStep}
          setUsername={setUsername}
          username={username}
          usernameInputRef={usernameInputRef}
          paramUsername={paramUsername || undefined}
        />
      );
    case "2":
      return (
        <EmailStep
          // email={email}
          // emailInputRef={emailInputRef}
          // setEmail={setEmail}
          // setStep={setStep}
          username={username}
        />
      );
    // case "3":
    //   return (
    //     <PasswordStep
    //       email={email}
    //       password={password}
    //       setPassword={setPassword}
    //       setStep={setStep}
    //       username={username}
    //     />
    //   );
  }
}

export default SignupForm;
