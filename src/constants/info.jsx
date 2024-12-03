import portfolio from "../assets/portfolio-project.jpeg"
import autosorter from "../assets/AutoSorter.jpeg"
import anniversary from "../assets/Anniversary.png"

export const PROJECTS = [
  {
    title: "Auto FileSorter",
    image: autosorter,
    description:
      "I created a AutoSorter into an executable file for sorting new image files, text files, and powerpoint presentations for my laptop.",
    technologies: ["Python"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "Created a website in react along with vite to showcase and document my projects and showcase my journey and uploaded it through vercel. (Still WIP)",
    technologies: ["HTML", "CSS", "ReactJS", "Javascript", "Tailwind", "FramerMotion"],
  },
  {
    title: "Anniversary Project",
    image: anniversary,
    description: "Website used React framework using ThreeJS for the 3d Model, Framer Motion, React-Typed Animation, Tailwind for Design (Still WIP)",
    technologies: ["ReactJS", "Tailwind", "ThreeJS", "FramerMotion", "ReactTyped", "Blender"]
  }
];

