export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Project Name",
    techs: ["Next.js", "TypeScript"],
    link: "",
  },
  {
    title: "Project Name",
    techs: ["Shell"],
    link: "",
  },
  {
    title: "Project Name",
    techs: ["Next.js", "react-query", "zod"],
    link: "",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro", "TypeScript"],
    link: "",
    isComingSoon: true,
  },
];

export default projects;
