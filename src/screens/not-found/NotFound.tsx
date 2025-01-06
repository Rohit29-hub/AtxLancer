import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { AlertCircle } from "lucide-react";

function NotFound() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex flex-col gap-y-2 pt-24 items-center justify-center">
            <AlertCircle size={50} className="text-red-500" />
            <h1 className="text-4xl font-atxlancer_secondary font-bold mb-2">Page Not Found</h1>
            <p className="text-base">
                Oops! The page <span className="text-blue-600">{location.pathname}</span> does not exist.
            </p>
            <Button onClick={() => navigate("/", { replace: true })}>
                Go to Home
            </Button>
        </div>
    );
}

export default NotFound;
