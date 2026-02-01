import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ecommerceImg from "../assets/ecommerce.jpeg";
import erp from "../assets/erp.png";
const projects = [
  {
    id: 2,
    title: "Hospital Management ERP system",
    description:
      "A full-stack hospital management system built to digitize and automate core healthcare operations, including patient records, appointment scheduling, doctor and staff management, billing, and reporting. The system features role-based authentication, secure data handling, and real-time access to patient information, improving workflow efficiency and reducing administrative overhead.",
    tags: [
      "React.js",
      ".NET Core",
      "SignalR",
      "Azure",
      "SQL Server",
      "JWT Auth",
      "Dapper",
      "CI/CD",
    ],
    // demourl: "#",
    // githuburl: "#",
    imgUrl: erp,
  },

  {
    id: 3,
    title: "Full Stack E-commerce (FYP)",
    description:
      "A complete e-commerce platform built using React.js frontend and .NET Core MVC backend with product catalog, secure checkout, Dapper ORM, and real-time order tracking.",
    tags: [
      "React.js",
      ".NET Core MVC",
      "SignalR",
      "Dapper",
      "REST API",
      "SQL Server",
      "Agile",
      "CI/CD",
    ],
    // demourl: "#",
    // githuburl: "#",
    imgUrl: ecommerceImg,
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-width-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured
        </h2>
        <span className="text-primary"> Projects</span>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional and Personal Projects
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-8 lg:grid-cols-2 sm-lg-cols-1">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transiton-transform duration-500 group-hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-cs font-medium bg-primary/20 border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted foreground text-sm mb-4">
                  {project.description}
                </p>
                {/* <div className="flex justify-between items-center ">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      target="_blank"
                      className="text-foregound/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
                    <a
                      target="_blank"
                      className="text-foregound/80 hover:text-primary transition-colors duration-300"
                      href="#"
                    >
                      <Github size={20} />
                      Demo
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="#mygithub"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  );
};
