import AaronImg from "../assets/Aaron.jpg";
import Resume from "../assets/Resume.pdf";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-hero">
        <img src={AaronImg} alt="Aaron" className="about-photo" />

        <div className="about-intro">
          <p className="about-greeting">
            Hey there! <span className="wave">👋🏽</span>
            <br /> I&apos;m <span className="name">Aaron Rajan</span>
          </p>

          <div className="social-links">
            <a
              href="https://github.com/Aaron-Rajan"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-rajan/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a href={Resume} target="_blank" rel="noreferrer">
              <i className="fas fa-file-pdf" />
            </a>
            <a href="mailto:aaronmraj@gmail.com">
              <i className="far fa-envelope" />
            </a>
          </div>
        </div>
      </div>

      <div className="about-description">
        <h1>About Me</h1>

        <p>
          I'm a recent{" "}
          <strong>Computer Engineering &amp; Management</strong> graduate from{" "}
          <strong>McMaster University</strong>, now working as a{" "}
          <strong>Software Developer</strong> at{" "}
          <strong>Intact Insurance</strong>. On the{" "}
          <strong>Developer Platforms &amp; DevOps Centre of Excellence</strong>{" "}
          team, I build and support tools that help other developers ship
          reliable software—mainly using <strong>Java</strong>,{" "}
          <strong>Spring Boot</strong>, <strong>React</strong>, and{" "}
          <strong>TypeScript</strong>.
        </p>

        <p>
          This site is one of my personal sandboxes. I rebuilt it with{" "}
          <strong>React + TypeScript</strong> on top of vanilla JavaScript, and
          wired it to a lightweight <strong>Spring Boot backend</strong> that
          maintains JSON files for my projects and experience. The frontend
          pulls that data with <strong>Axios</strong>, so updating my portfolio
          is as simple as updating the backend.
        </p>

        <p>
          I enjoy designing systems end-to-end: from <strong>REST APIs</strong>{" "}
          and <strong>databases</strong> to frontends that feel clean and
          responsive. Outside of work, I&apos;m usually experimenting with new
          tech, refining projects like this one, or looking for the next problem
          I can turn into a build.
        </p>
      </div>
    </section>
  );
};

export default About;
