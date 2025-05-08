// import { ArrowRight, ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     title: "Medium Blog Post",
//     description: "A comprehensive full-stack blogging application built with the MERN stack. Users can create, edit, and publish blog posts, as well as like and comment (with edit capabilities) on posts. The platform features secure authentication, robust user profile management, and an advanced admin dashboard for managing blog content, users, and comments.",
//     image: "/projects/project1.png",
//     tags: ["HTML/CSS", "Javascript","React","Redux", "Node.js", "Express.js", "Mongo", "MERN", "Vercel" ,"Render"],
//     demoUrl: "https://medium-blog-2025.vercel.app",
//     githubUrl: "#",
//   },
//   {
//     id: 2,
//     title: "YouTube Thumbnail Downloader",
//     description:
//       "A multilingual web application that allows users to download YouTube video thumbnails by simply pasting the video URL. Supports four thumbnail resolutions (max, high, medium, and default) and is available in multiple languages including English, Spanish, Hindi, and German for a seamless user experience.",
//     image: "/projects/project2.png",
//     tags: ["HTML/CSS", "Javascript", "Bootstrap", "React.js","Vercel"],
//     demoUrl: "https://yoothumbnail.com/",
//     githubUrl: "",
//   },
//   {
//     id: 3,
//     title: "Schedulo App",
//     description:
//       "Schedulo is your smart desktop task planner that helps you block time, manage daily priorities, and stay focused. Easily add, update, or delete tasks with custom statuses like To-Do, In-Progress, or Done. With built-in calendar blocking and time-slot scheduling, Schedulo turns your cluttered day into a clear plan — one task at a time.",
//     image: "/projects/project3.png",
//     tags: ["HTML/CSS", "Typescript", "Angular", "Vercel"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   // {
//   //   id: 4,
//   //   title: "Schedulo App",
//   //   description:
//   //     "Schedulo is your smart desktop task planner that helps you block time, manage daily priorities, and stay focused. Easily add, update, or delete tasks with custom statuses like To-Do, In-Progress, or Done. With built-in calendar blocking and time-slot scheduling, Schedulo turns your cluttered day into a clear plan — one task at a time.",
//   //   image: "/projects/project3.png",
//   //   tags: ["HTML/CSS", "Typescript", "Angular", "Vercel"],
//   //   demoUrl: "#",
//   //   githubUrl: "#",
//   // },
// ];

// export const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           {" "}
//           Featured <span className="text-primary"> Projects </span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Here are some of my recent projects. Each project was carefully
//           crafted with attention to detail, performance, and user experience.
//         </p>

//         <div className="flex flex-wrap justify-center gap-8">
//           {projects.map((project, key) => (
//             <div
//               key={key}
//               className="w-full md:w-[48%] lg:w-[30%] bg-card rounded-lg overflow-hidden shadow-xs card-hover"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               <div className="p-6">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag) => (
//                     <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
//                 <p className="text-muted-foreground text-sm mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <div className="flex space-x-3">
//                     <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                     >
//                       <ExternalLink size={20} />
//                     </a>
//                     {/* <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                     >
//                       <Github size={20} />
//                     </a> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <a
//             className="cosmic-button w-fit flex items-center mx-auto gap-2"
//             target="_blank"
//             href="https://github.com/pranavlabdhe"
//           >
//             Check My Github <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };


import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Medium Blog Post",
    description:
      "A comprehensive full-stack blogging application built with the MERN stack. Users can create, edit, and publish blog posts, as well as like and comment (with edit capabilities) on posts. The platform features secure authentication, robust user profile management, and an advanced admin dashboard for managing blog content, users, and comments.",
    image: "/projects/project1.png",
    tags: ["HTML/CSS", "JavaScript", "React", "Redux", "Node.js", "Express", "MongoDB","Vercel","Render","MERN"],
    demoUrl: "https://medium-blog-2025.vercel.app",
    githubUrl: "https://github.com/pranavlabdhe/medium-blog-2025",
  },
  {
    id: 2,
    title: "YouTube Thumbnail Downloader",
    description:
      "A multilingual web application that allows users to download YouTube video thumbnails by simply pasting the video URL. Supports four thumbnail resolutions (max, high, medium, and default) and is available in multiple languages including English, Spanish, Hindi, and German for a seamless user experience.",
    image: "/projects/project2.png",
    tags: ["HTML/CSS", "JavaScript", "Bootstrap", "React", "Vercel"],
    demoUrl: "https://yoothumbnail.com/",
    githubUrl: "https://github.com/pranavlabdhe/Youtube-thumbnail-Downloader",
  },
  {
    id: 3,
    title: "Task Schedular",
    description:
      "A task scheduling desktop app for focused work. Manage tasks by blocking calendar time and track statuses with a simple UI.",
    image: "/projects/project3.png",
    tags: ["HTML/CSS", "TypeScript", "Angular", "Local Storage", "Vercel"],
    demoUrl: "https://task-scheduling-app-k19c.vercel.app/",
    githubUrl: "https://github.com/pranavlabdhe/task-scheduling-app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <style>
        {`
          .line-clamp-4 {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one demonstrates a strong focus on design, performance, and clean code.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full sm:w-[90%] md:w-[48%] lg:w-[30%] bg-card rounded-lg shadow-md flex flex-col overflow-hidden"
              style={{ minHeight: "540aupx" }}
            >
              {/* Image */}
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tags */}
              <div className="p-4 pb-0" style={{height:'142px'}}>
                <div className="flex flex-wrap gap-2 mb-2" >
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Bottom-Aligned */}
              <div className="flex flex-col justify-between flex-grow p-4 pt-2">
                <div className="">
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex space-x-4 mt-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/pranavlabdhe"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
