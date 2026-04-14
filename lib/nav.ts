export type NavItem = {
  title: string;
  href: string;
  items?: NavItem[];
};

export const sidebarNav: NavItem[] = [
  {
    title: "Frontend Interview",
    href: "/fe-interview",
    items: [
      { title: "Basic", href: "/fe-interview/basic" },
      { title: "Intermediate", href: "/fe-interview/intermediate" },
      { title: "Advanced", href: "/fe-interview/advanced" },
    ],
  },
  {
    title: "Backend Interview",
    href: "/be-interview",
    items: [
      { title: "Basic", href: "/be-interview/basic" },
      { title: "Intermediate", href: "/be-interview/intermediate" },
      { title: "Advanced", href: "/be-interview/advanced" },
    ],
  },
  {
    title: "MySQL",
    href: "/mysql",
    items: [
      { title: "Basics", href: "/mysql/basics" },
      { title: "Operators", href: "/mysql/operators" },
      { title: "Joins", href: "/mysql/join" },
      { title: "Advanced SQL", href: "/mysql/advanced-sql" },
      { title: "Cheat Sheet", href: "/mysql/cheatsheet" },
    ],
  },
  {
    title: "React",
    href: "/react",
    items: [
      { title: "Components", href: "/react/components" },
      { title: "Rendering", href: "/react/rendering" },
      { title: "Hooks", href: "/react/hooks" },
    ],
  },
  {
    title: "TypeScript",
    href: "/typescript",
  },
  {
    title: "CSS",
    href: "/css",
  },
  {
    title: "Gym",
    href: "/gym",
  },
];

export const headerNav: NavItem[] = [
  { title: "Docs", href: "/fe-interview" },
  { title: "MySQL", href: "/mysql" },
  { title: "React", href: "/react" },
  { title: "Gym", href: "/gym" },
];
