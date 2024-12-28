import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";

const GithubButton = () => {
    
    // Authenticate user by github
    const authenticateByGithub = () => {
        const popup = window.open(
            `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT}&scope=user:email`,
            'githubLoginPopup',
            'width=600,height=600'
        );

        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== import.meta.env.VITE_BACKEND_URL) return;
            
            if(event.data.success){
                // !TODO do something here. like push in redux.
                console.log(event.data);
            }
            popup?.close();
            window.removeEventListener('message', handleMessage);
        };

        // Listen for messages from the popup
        window.addEventListener('message', handleMessage);
    };

    return (
        <Button className="flex-1 flex items-center justify-center gap-2 w-full bg-white text-black dark:text-white dark:bg-atxlancer_base_color" onClick={authenticateByGithub}>
            <FaGithub size={20}/>
            Continue with Github
        </Button>
    )
}

export default GithubButton