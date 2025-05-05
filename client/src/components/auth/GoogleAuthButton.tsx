import { useGoogleLogin } from "@react-oauth/google";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import { useNavigate } from "react-router-dom";

function GoogleAuthButton() {
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { access_token } = tokenResponse;
      const res = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_token }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userID", data.user.id);
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
