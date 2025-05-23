import { useGoogleLogin } from "@react-oauth/google";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function GoogleAuthButton({ username }: { username?: string }) {
  const navigate = useNavigate();

  const { login } = useAuth();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { access_token } = tokenResponse;
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/google`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ access_token, username }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        const { token, user } = data;
        login(token, user);
        navigate("/b/dashboard");
      }
      console.log(data.message);
    },
    onError: (err) => console.log(err),
  });

  return (
    <>
      <button
        type="button"
        onClick={() => {
          googleLogin();
        }}
        className={`h-11 bg-black border-[3px] border-third-blue transition-all duration-150 p-3 font-bold rounded-md w-full flex items-center justify-center`}
      >
        <GoogleIcon className="w-10" />
        <p className="h-full flex items-center justify-center text-third-blue">
          Continue with Google
        </p>
      </button>
    </>
  );
}

export default GoogleAuthButton;
