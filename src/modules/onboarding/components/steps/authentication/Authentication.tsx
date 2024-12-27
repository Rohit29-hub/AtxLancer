import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc"; // Import Google icon from react-icons

function Authentication() {
  const responseGoogle = async (authResult: any) => {
    try {
      if (authResult["code"]) {
        console.log(authResult.code);
        const res = await fetch(
          `http://localhost:8001/api/v1/auth/google?code=${authResult.code}`
        );
        const result = await res.json();
        console.log(result.data);
        alert("Successfully logged in");
      } else {
        console.log(authResult);
        throw new Error(authResult);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="border-2 shadow-md dark:shadow-white -translate-y-1 -translate-x-1 flex flex-col lg:flex-row w-full max-w-screen-lg mx-auto mt-10 h-auto lg:h-4/5 px-4 lg:px-0">
      {/* Left Section: Hidden on smaller screens */}
      <div className="left-signup-authContainer hidden lg:flex flex-1 flex-col justify-center items-start bg-gradient-to-r from-gray-100 to-gray-200 p-8">
        <h1 className="text-4xl font-extrabold text-atxlancer_theme_color mb-4">
          Success Starts Here
        </h1>
        <ul className="list-disc pl-6 space-y-3 text-lg font-semibold text-atxlancer_base_color">
          <li>Over 700 categories</li>
          <li>Quality work done faster</li>
          <li>Access to talent and businesses</li>
        </ul>
      </div>

      {/* Right Section: Signup Form */}
      <div className="flex-1 bg-white shadow-lg p-6 flex flex-col justify-center dark:bg-background">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-atxlancer_base_color dark:text-atxlancer_white_color">
            Create a New Account
          </h1>
          <p className="mt-2 text-sm font-medium text-gray-500 dark:text-atxlancer_white_color">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <Input placeholder="Email" className="w-full" />
          <Input placeholder="Password" className="w-full" />
        </div>

        <div className="flex items-center justify-center my-6 relative">
          <span className="absolute bg-white px-2 rounded-full text-gray-500 text-sm">
            OR
          </span>
          <hr className="w-full border-t border-gray-300" />
        </div>

        <Button
          onClick={googleLogin}
          className="flex items-center justify-center gap-2 w-full bg-blue-50 hover:bg-blue-100 border border-gray-300"
        >
          <FcGoogle size={20} /> {/* Google icon */}
          Continue with Google
        </Button>

        <p className="text-sm text-gray-500 mt-4 text-center">
          By joining, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}

export default Authentication;
