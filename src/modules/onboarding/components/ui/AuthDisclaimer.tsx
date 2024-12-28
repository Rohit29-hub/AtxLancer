import { Link } from "react-router-dom"
const AuthDisclaimer = () => {
    return (
        <p className="text-sm text-gray-500 mt-4 text-center">
            By logging in, you agree to our{" "}
            <Link to={"/terms-of-service"} className="text-blue-600 hover:underline">
                Terms of Service
            </Link>{" "}
            and{" "}
            <Link to={'privacy-policy'} className="text-blue-600 hover:underline">
                Privacy Policy
            </Link>
        </p>
    )
}

export default AuthDisclaimer