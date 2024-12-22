import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className=" flex items-center justify-between px-14 py-7 border-b-4">
      <div className="text-4xl font-bold text-[#00bfa6]">LOGO</div>
      <div className=" px-[200px] py-3">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-between gap-7">
            <NavigationMenuItem className="text-xl font-semibold home">
              <a href="#">Home</a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl text-[#00bfa6]">
                Demo one
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col texl-xl w-[10rem]">
                <NavigationMenuLink className="bg-white font-thin px-5 py-3 border-b-2 w-[10rem]">
                  Link
                </NavigationMenuLink>
                <NavigationMenuLink className="bg-white font-thin px-5 py-3 border-b-2 w-[10rem]">
                  Link
                </NavigationMenuLink>
                <NavigationMenuLink className="bg-white font-thin px-5 py-3 border-b-2 w-[10rem]">
                  Link
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl text-[#00bfa6]">
                Demo Two
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col  gap-2 texl-xl w-[10rem]">
                <NavigationMenuLink className="bg-white   font-thin px-5 py-3 border-b-2 w-[10rem]">
                  Link
                </NavigationMenuLink>
                <NavigationMenuLink className="bg-white font-thin px-5 py-3 border-b-2 w-[10rem]">
                  Link
                </NavigationMenuLink>
                <NavigationMenuLink className="bg-white font-thin px-5 py-3 border-b-2 w-[10rem]">
                  Link
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl text-[#00bfa6]">
                Demo Thr
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col  gap-2 texl-xl w-[10rem]">
                <NavigationMenuLink className="bg-white   font-thin px-5 py-3 border-b-2 w-[10rem]">
                  Link
                </NavigationMenuLink>
                <NavigationMenuLink className="bg-white font-thin px-5 py-3 border-b-2 w-[10rem]">
                  Link
                </NavigationMenuLink>
                <NavigationMenuLink className="bg-white font-thin px-5 py-3 border-b-2 w-[10rem]">
                  Link
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex justify-between gap-5">
        <Button className=" font-serif bg-[#00bfa6] text-2xl rounded-[5px] hover:bg-[#369c8f] ">
          Login
        </Button>
        <Button className=" font-serif bg-[#00bfa6] text-2xl rounded-[5px] hover:bg-[#369c8f]">
          SignUp
        </Button>
      </div>
    </div>
  );
}

export default Header;
