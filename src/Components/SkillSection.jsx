import { useState } from "react";

const skills = [
  { name: "C", level: 100, category: "backend" },
  { name: "C#", level: 100, category: "backend" },
  { name: "JavaScript", level: 100, category: "frontend" },
  { name: "TypeScript", level: 100, category: "frontend" },
  { name: "Python", level: 100, category: "backend" },
  { name: "SQL", level: 100, category: "database" },
  { name: "React.js", level: 100, category: "frontend" },
  { name: "Blazor WebAssembly", level: 100, category: "frontend" },
  { name: "MVC", level: 100, category: "backend" },
  { name: ".NET Framework", level: 100, category: "backend" },
  { name: ".NET Core", level: 100, category: "backend" },
  { name: "ASP.NET Core", level: 100, category: "backend" },
  { name: "Node.js", level: 100, category: "backend" },
  { name: "Express.js", level: 100, category: "backend" },
  { name: "SQL Server", level: 100, category: "database" },
  { name: "MongoDB (Mongoose)", level: 100, category: "database" },
  { name: "Dapper", level: 100, category: "database" },
  { name: "T-SQL (Transact-SQL)", level: 100, category: "database" },
  { name: "PostgreSQL", level: 100, category: "database" },
  { name: "Entity Framework", level: 100, category: "database" },
  { name: "AWS", level: 100, category: "cloud" },
  { name: "Azure", level: 100, category: "cloud" },
  { name: "Docker", level: 100, category: "devops" },
  { name: "Microservices Architecture", level: 100, category: "architecture" },
  { name: "CI/CD (Jenkins)", level: 100, category: "devops" },
  { name: "CI/CD (Azure DevOps)", level: 100, category: "devops" },
  { name: "JWT Authentication", level: 100, category: "backend" },
  { name: "Git", level: 100, category: "version-control" },
  { name: "Tortoise SVN", level: 100, category: "version-control" },
  { name: "Machine Learning", level: 100, category: "ml" },
  { name: "Deep Learning", level: 100, category: "ml" },
  { name: "IIS Hosting", level: 100, category: "devops" },
  { name: "Agile (Scrum)", level: 100, category: "softskill" },
  { name: "User Stories", level: 100, category: "softskill" },
  { name: "REST API", level: 100, category: "backend" },
];
export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skills, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-lef mb-4">
                <h3 className="font-semibold text-lg">{skills.name}</h3>
              </div>
              <div className="w-fulll bg-secondary/50 rounded-full overflow-hidden"></div>
              <div
                style={{ wdith: skills.level + "%" }}
                className="bg-primary h-2 rounded-full origin-left animate-=[grow_1.5_ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
