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
import Logo from "../ui/custom-ui/Logo";
import { SidebarTrigger } from "../ui/sidebar";

function Header() {

  return (
    <div className={`w-fll h-min flex items-center justify-between px-3 md:px-14 py-3 shadow dark:shadow-gray-900 sticky top-0 bg-white dark:bg-background z-[1054]`}>
      <Logo />
      <div className="hidden lg:flex h-full flex-1 items-center justify-between">
        {/* navigation links */}
        <div className="md:ml-8 ml-0">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-x-4">
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

        {/* navigation buttons  */}
        <div className="flex gap-x-4 items-center">
          <Button variant="link" className="text-sm">SignIn</Button>
          <Button className="bg-atxlancer_theme_color text-sm dark:text-white" size={"sm"}>
            Hire Me
          </Button>
          <ModeToggle />
        </div>
      </div>

      {/* navbar icon for mobile */}
      <div className="block lg:hidden z-[9999]">
        <SidebarTrigger className="dark:bg-background bg-transparent" />
      </div>
    </div>
  );
}

export default Header;
