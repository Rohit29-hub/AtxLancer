import { Button } from "@/components/ui/button";
import apiRequest from "@/services/api";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {

    // authenticate with google
    const authenticateByGoogle = async (result: any) => {
        if (result['code']) {
            const data = await apiRequest('GET',`/api/v1/auth/google?code=${result.code}`);
            // !TODO do something here to track their data;
            console.log(data);
        }
    };

    const handleGoogleAuthentication = useGoogleLogin({
        onSuccess: authenticateByGoogle,
        onError: authenticateByGoogle,
        flow: "auth-code",
    });

    return (
        <Button
            onClick={handleGoogleAuthentication}
            className="flex-1 flex items-center justify-center gap-2 w-full"
        >
            <FcGoogle size={20} />
            Continue with Google
        </Button>
    )
}

export default GoogleButton