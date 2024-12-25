import { AnimatedImageFlip } from "@/components/ui/animated-image-flip";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import images from '@/data/hero-section-images.json';

const HeroSection = () => {
  const words = [
    "Innovation",
    "Creativity",
    "Reliability",
    "Growth",
  ];

  return (
    <div className="w-full overflow-hidden md:overflow-auto h-min mt-6 lg:mt-0 flex lg:flex-row flex-col items-center lg:gap-x-8 px-3 sm:px-4 md:px-8  lg:px-10 justify-between">
      {/* left hero section  */}
      <div className="flex-1 flex-col">
        <div>
          <h2 className="text-6xl lg:text-8xl font-black font-atxlancer_heading ">
            Welcome to
            <span className="block text-atxlancer_theme_color mt-2">
              {" "}
              ATX'World
            </span>
          </h2>
        </div>
        <div className="flex items-center gap-x-3 pt-2">
          <h3 className="text-3xl lg:text-5xl font-black font-atxlancer_heading">
            Where We
          </h3>
          <div className="relative overflow-hidden border-2 text-2xl lg:text-4xl font-black font-atxlancer_heading rounded-3xl w-min p-1 border-atxlancer_theme_color ">
            <FlipWords words={words} />
          </div>
        </div>
        <div className="pt-2 md:pt-4">
          <p className="text-base">
            Welcome to <span>ATXLancer</span> Freelancing Hub! I specialize in
            delivering high-quality web development services tailored to your
            unique needs. With a focus on creativity, professionalism, and
            timely delivery, I help businesses and individuals bring their ideas
            to life. Let's collaborate to make your vision a reality!
          </p>
        </div>
        <div className="flex items-center gap-x-4 pt-4">
          <Button className="bg-atxlancer_theme_color text-white " size={"lg"}>
            Start Project
          </Button>
          <Button
            className="border-atxlancer_theme_color"
            size={"lg"}
            variant={"outline"}
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* right hero section */}
      <div className="flex-1">
        <AnimatedImageFlip autoplay={true} images={images}/> 
      </div>

    </div>
  );
};

export default HeroSection;
