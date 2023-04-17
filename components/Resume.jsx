/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { state } from "./store";

export default function Resume() {
  const ref = useRef();

  return (
    <div className="customizer">
      <div className="locales">
        <div className="color-options">
          <div
            className={`circle`}
            style={{ background: `url("/it.png")` }}
          ></div>
          <div
            className={`circle`}
            style={{ background: `url("/en.png")` }}
          ></div>
          <div
            className={`circle`}
            style={{ background: `url("/se.png")` }}
          ></div>
        </div>
      </div>
      <button className="exit" onClick={() => (state.chat = true)}>
        GO BACK
      </button>
      <a href="/matteo-dante-resume.pdf" download>
        <button className="download">SAVE IT</button>
      </a>
      <div ref={ref} id="resume" className="resume">
        <div className="cover-photo">
          <img src="/me.jpeg" className="profile" alt="me" />
        </div>
        <div className="resume-body">
          <h3 className="profile-name">Matteo Dante</h3>
          <p className="about">Full Stack Developer</p>
        </div>
        <div className="description">
          <h5>Summary</h5>
          <p>
            Hi, I&apos;m Matteo Dante, a 24-year-old full-stack developer with 5
            years of experience. Throughout my career, I have gained a strong
            understanding of backend and frontend development using programming
            languages such as Python, PHP, Javascript etc... I&apos;m also
            proficient in popular frontend frameworks like React and Vue. My
            expertise in software engineering principles, design patterns,
            algorithms, and data structures enables me to deliver high-quality
            development solutions. I&apos;m passionate about technology, always
            keeping up to date with the latest developments in the field.
            Outside of work, I enjoy playing video games, watching movies, and
            working out.
          </p>
        </div>
        <div className="description">
          <h5>Skills</h5>
          <ul>
            <li>Full-stack development</li>
            <li>
              Backend development with Laravel (PHP) and Javascript using LAMP
              Stack
            </li>
            <li>Frontend development with React (NextJS) and Vue</li>
            <li>Database queries with MySQL</li>
            <li>
              Software engineering principles, design patterns, algorithms, and
              data structures
            </li>
            <li>Understanding of business processes and workflows</li>
            <li>
              Experience in developing software that meets the specific needs of
              each client
            </li>
          </ul>
        </div>
        <div className="description">
          <h5>Education</h5>
          <ul>
            <li>Istitute Enrico Fermi of Tivoli: Completed studies</li>
            <li>
              La Sapienza University: Completed 1st year of Computer Science
            </li>
          </ul>
        </div>
        <div className="description">
          <h3>Experiences</h3>
          <h5>IT-Assistant and Web Developer at Galileo S.p.A</h5>
          <ul>
            <li>
              Created a user-friendly web interface to interact with IBM systems
            </li>
            <li>
              Developed a good understanding of the systems&apos; functionality
              and how to integrate them with web technologies
            </li>
          </ul>

          <h5>Full Stack Web Developer at Esafactoring S.r.l</h5>
          <ul>
            <li>
              Developed internal management software and other web applications
              for large companies such as Sorgenia S.p.A
            </li>
            <li>
              Gained a strong understanding of business processes and workflows
            </li>
            <li>
              Delivered high-quality development solutions for complex web
              development projects
            </li>
          </ul>

          <p>
            Potential job titles that would be a good fit for me include Full
            Stack Developer, Web Developer, Software Engineer, or Frontend
            Developer. When considering potential job opportunities, it&apos;s
            important to look for positions that align with my interests and
            expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

/*

      <button
        className="download"
        onClick={() => {
          const link = document.createElement("a");
          link.setAttribute("download", "canvas.png");
          link.setAttribute(
            "href",
            document
              .querySelector("canvas")
              .toDataURL("image/png")
              .replace("image/png", "image/octet-stream")
          );
          link.click();
        }}
      >
        DOWNLOAD
      </button> 

*/
