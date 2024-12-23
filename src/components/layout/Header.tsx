import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" flex items-center  px-14 py-2 shadow justify-center sticky top-0 bg-white dark:bg-background gap-10">
      <div className="text-base font-bold text-[]">
        <span className="text-atxlancer_them_color">Atx</span>Lancer
      </div>
      <div className="w-full flex items-center justify-between h-full ">
        <div className=" px-[] py-3 ">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-between gap-7">
              <NavigationMenuItem>
                <Link
                  to="/services"
                  className={`${navigationMenuTriggerStyle()}`}>
                  <NavigationMenuLink asChild>
                    <span>Services</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Portfolio
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col texl-xl w-[10rem] bg-atxlancer_white_color dark:bg-background ">
                  <NavigationMenuLink className=" font-thin px-5 py-3 border-b-2 w-[10rem]">
                    Link
                  </NavigationMenuLink>
                  <NavigationMenuLink className=" font-thin px-5 py-3 border-b-2 w-[10rem]">
                    Link
                  </NavigationMenuLink>
                  <NavigationMenuLink className=" font-thin px-5 py-3 border-b-2 w-[10rem]">
                    Link
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col  gap-2 texl-xl w-[10rem] bg-atxlancer_white_color dark:bg-background ">
                  <NavigationMenuLink className="font-thin px-5 py-3 border-b-2 w-[10rem]">
                    Link
                  </NavigationMenuLink>
                  <NavigationMenuLink className=" font-thin px-5 py-3 border-b-2 w-[10rem]">
                    Link
                  </NavigationMenuLink>
                  <NavigationMenuLink className=" font-thin px-5 py-3 border-b-2 w-[10rem]">
                    Link
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Blog
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col  gap-2 texl-xl w-[10rem] bg-atxlancer_white_color dark:bg-background">
                  <NavigationMenuLink className="font-thin px-5 py-3 border-b-2 w-[10rem]">
                    Link
                  </NavigationMenuLink>
                  <NavigationMenuLink className=" font-thin px-5 py-3 border-b-2 w-[10rem]">
                    Link
                  </NavigationMenuLink>
                  <NavigationMenuLink className=" font-thin px-5 py-3 border-b-2 w-[10rem]">
                    Link
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className={`${navigationMenuTriggerStyle()}`}
                >
                  <NavigationMenuLink asChild>
                    <span>Contact</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex justify-between gap-5 ">
          <Button className="text-sm" variant={"link"} size={"lg"}>
            Sign In
          </Button>
          <Button className="bg-atxlancer_them_color text-sm dark:text-white" size={"lg"}>
            Hire Me
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
