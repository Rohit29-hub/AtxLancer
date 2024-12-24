import { FlipWords } from "@/components/ui/flip-words";

const HeroSection = () => {
  const words = ['Excellence', 'Innovation', 'Creativity', 'Reliability', 'Growth'];
  
    return (
        <div className="h-[40rem] flex justify-center items-center px-4">
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Build
                <div className="border-2 rounded-3xl w-min p-1 border-atxlancer_theme_color ">
                    <FlipWords words={words} />
                </div> <br />
                websites with Aceternity UI
            </div>
        </div>
    );
}

export default HeroSection