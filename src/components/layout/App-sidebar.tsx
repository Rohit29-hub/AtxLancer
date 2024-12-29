import { useState } from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "../ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import { ModeToggle } from "../ui/mode-toggle";
import { Link } from "react-router-dom";
import { items } from "@/data/nav-links";


export function AppSidebar() {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

    const toggleSection = (title: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
      <Sidebar variant="inset" className="relative scrollbar-hidden">
        <SidebarContent className="px-2 pb-2 scrollbar-hidden">
          <SidebarGroup className="flex-1">
            <SidebarGroupContent>
              <SidebarMenu className="gap-y-6">
                {items.map((item) =>
                  item.collapsible ? (
                    <Collapsible
                      key={item.title}
                      defaultOpen={false}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className="text-base bg-transparent flex justify-between"
                            onClick={() => toggleSection(item.title)}
                          >
                            <span>{item.title}</span>
                            {openSections[item.title] ? (
                              <ChevronUp />
                            ) : (
                              <ChevronDown />
                            )}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems?.map((subItem) => (
                              <SidebarMenuSubItem
                                key={subItem.title}
                                className="flex text-base items-center px-4 py-2"
                              >
                                <Link to={subItem.url}>{subItem.title}</Link>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        className="bg-transparent text-base"
                        asChild
                      >
                        <Link to={item.url!} className="flex items-center ">
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarFooter>
            <div className="flex flex-wrap gap-x-4 items-center">
              <Button
                variant={"destructive"}
                className=" text-sm dark:text-white"
                size={"lg"}
              >
                <Link to={"/onboarding/signup"}>Signup</Link>
              </Button>
              <ModeToggle />
            </div>
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
    );
}
