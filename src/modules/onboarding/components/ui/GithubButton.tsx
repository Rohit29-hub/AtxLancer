import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";

const GithubButton = ({ handleGithubResponse }: { handleGithubResponse: (data: any) => void }) => {

    // Authenticate user by github
    const authenticateByGithub = () => {
        const popup = window.open(
            `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT}&scope=user:email`,
            'githubLoginPopup',
            'width=600,height=600'
        );

        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== import.meta.env.VITE_BACKEND_URL) return;
            console.log(event);
            if (event.data.success) {
                handleGithubResponse(event.data.data);
            }
            popup?.close();
            window.removeEventListener('message', handleMessage);
        };

        // Listen for messages from the popup
        window.addEventListener('message', handleMessage);
    };

    return (
        <Button size={'lg'} className="flex-1 flex items-center justify-center gap-2 w-full text-black  bg-white hover:bg-white dark:text-white dark:bg-background border border-input" onClick={authenticateByGithub}>
            <FaGithub size={20} />
            Continue with Github
        </Button>
    )
}

export default GithubButton