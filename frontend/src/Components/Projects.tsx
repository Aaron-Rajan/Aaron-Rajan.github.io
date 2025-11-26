import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Project.css";
import Footer from "./Footer";

type ProjectItem = {
  id?: number;
  name: string;
  description: string;

  // image is stored in /public/images/projects, JSON just holds the file name
  imageName?: string;

  // links
  link?: string;
  demo?: string;
};

const Projects = () => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const resp = await axios.get<ProjectItem[]>("/data/projects.json");

      // sort by id descending so newer (larger id) projects appear first
      const sorted = [...resp.data].sort((a, b) => {
        const idA = a.id ?? 0;
        const idB = b.id ?? 0;
        return idB - idA; // bigger id comes first
      });

      setProjects(sorted);
    } catch (error) {
      console.log("Error getting projects ", error);
    }
  };

  return (
    <div>
      <section className="projects-section">
        <h1 className="projects-heading">Projects</h1>

        <div className="projects-grid">
          {projects.map((proj, index) => {
            const key = proj.id ?? `${proj.name}-${index}`;
            const linkUrl = proj.link;
            const demoUrl = proj.demo;

            // use project image if provided, otherwise fall back to default.png
            const imgSrc = proj.imageName
              ? `/images/projects/${proj.imageName}`
              : `/images/projects/default.png`;

            return (
              <article className="project-card" key={key}>
                <h2 className="project-title">{proj.name}</h2>

                <div className="project-image-wrapper">
                  <img
                    src={imgSrc}
                    alt={proj.name}
                    className="project-image"
                  />
                </div>

                <p className="project-description">{proj.description}</p>

                <div className="project-links">
                  {linkUrl && (
                    <a
                      href={linkUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Project link"
                    >
                      <i className="fab fa-github" />
                    </a>
                  )}

                  {demoUrl && (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                    >
                      <i className="fas fa-link" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
