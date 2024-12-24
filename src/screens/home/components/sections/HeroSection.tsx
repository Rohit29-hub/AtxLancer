import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";

const HeroSection = () => {
  const words = [
    "Excellence",
    "Innovation",
    "Creativity",
    "Reliability",
    "Growth",
  ];

  const testimonials = [
    {
     
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
 
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
     
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
   
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
    
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className=" w-full h-screen flex items-center px-10 justify-between pb-11">
      {/* left hero section  */}
      <div className="space-y-2 flex-1 ">
        <div>
          <h2 className="text-7xl font-black font-atxlancer_heading ">
            Welcome to
            <span className="block text-atxlancer_theme_color mt-2">
              {" "}
              ATX'World
            </span>
          </h2>
        </div>
        <div className="flex items-center gap-x-3">
          <h3 className="text-5xl font-black font-atxlancer_heading">
            Where We
          </h3>
          <div className="border-2 text-4xl font-black font-atxlancer_heading rounded-3xl w-min p-1 border-atxlancer_theme_color ">
            <FlipWords words={words} />
          </div>
        </div>
        <div className="pt-2">
          <p className="">
            Welcome to <span>ATXLancer</span> Freelancing Hub! I specialize in
            delivering high-quality web development services tailored to your
            unique needs. With a focus on creativity, professionalism, and
            timely delivery, I help businesses and individuals bring their ideas
            to life. Let's collaborate to make your vision a reality!
          </p>
        </div>
        <div className="flex items-center gap-x-4 pt-2.5">
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
      <div className="flex-1 ">
        <AnimatedTestimonials autoplay={true} testimonials={testimonials}/> 
      </div>
    </div>
  );
};

export default HeroSection;
