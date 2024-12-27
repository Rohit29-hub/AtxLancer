import Authentication from "./components/steps/authentication/Authentication";
import { GoogleOAuthProvider } from "@react-oauth/google";

function Onboarding() {
  return (
    <GoogleOAuthProvider clientId="671098030864-cdh0kbakqgaaeh4m89mnkofjo2sbedp0.apps.googleusercontent.com">
      <Authentication />
    </GoogleOAuthProvider>
  );
}

export default Onboarding;
