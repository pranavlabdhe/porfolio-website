import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Medium Blog Post",
    description: "The application allows users to write and publish their own blogs it also features an admin dashboard for managing blog content. Built with React, Redux, Firebase, and ChatGPT API.",
    image: "/projects/project1.png",
    tags: ["HTML/CSS", "Javadcript","React","Redux", "Node.js", "Express.js", "Mongo", "Firebase","ChatGPT API","Render"],
    demoUrl: "https://medium-blog-post.onrender.com/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "YouTube Thumbnail Downloader",
    description:
      "YouTube thumbnail downloader web application that supports multiple languages (English, Spanish, Hindi, German). Users can simply paste a YouTube video link to download the thumbnail in four resolutions",
    image: "/projects/project2.png",
    tags: ["HTML/CSS", "Javascript", "React.js","Vercel"],
    demoUrl: "https://yoothumbnail.com/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Schedulo App",
    description:
      "Schedulo is your smart desktop task planner that helps you block time, manage daily priorities, and stay focused. Easily add, update, or delete tasks with custom statuses like To-Do, In-Progress, or Done. With built-in calendar blocking and time-slot scheduling, Schedulo turns your cluttered day into a clear plan — one task at a time.",
    image: "/projects/project3.png",
    tags: ["HTML/CSS", "Typescript", "Angular", "Vercel"],
    demoUrl: "#",
    githubUrl: "#",
  },
  // {
  //   id: 4,
  //   title: "Schedulo App",
  //   description:
  //     "Schedulo is your smart desktop task planner that helps you block time, manage daily priorities, and stay focused. Easily add, update, or delete tasks with custom statuses like To-Do, In-Progress, or Done. With built-in calendar blocking and time-slot scheduling, Schedulo turns your cluttered day into a clear plan — one task at a time.",
  //   image: "/projects/project3.png",
  //   tags: ["HTML/CSS", "Typescript", "Angular", "Vercel"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="w-full md:w-[48%] lg:w-[30%] bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {/* <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a> */}
                  </div>
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
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
