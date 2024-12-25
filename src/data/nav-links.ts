// Define the structure of menu items.
interface MenuItem {
    title: string;
    url?: string;
    collapsible: boolean;
    subItems?: { title: string; url: string }[];
}

// Menu items array.
export const items: MenuItem[] = [
    {
        title: "Home",
        url: "#home",
        collapsible: false,
    },
    {
        title: "Portfolio",
        collapsible: true,
        subItems: [
            { title: "Projects", url: "#portfolio-projects" },
            { title: "Gallery", url: "#portfolio-gallery" },
            { title: "Case Studies", url: "#portfolio-case-studies" },
        ],
    },
    {
        title: "About",
        collapsible: true,
        subItems: [
            { title: "Our Story", url: "#about-story" },
            { title: "Team", url: "#about-team" },
        ],
    },
    {
        title: "Services",
        collapsible: true,
        subItems: [
            { title: "Web Development", url: "#services-web" },
            { title: "App Development", url: "#services-app" },
            { title: "UI/UX Design", url: "#services-design" },
            { title: "SEO Optimization", url: "#services-seo" },
        ],
    },
    {
        title: "Contact",
        url: "#contact",
        collapsible: false,
    },
];
