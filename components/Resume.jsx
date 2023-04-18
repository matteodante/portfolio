/* eslint-disable @next/next/no-img-element */
import { state } from "./store";
import { FormattedMessage } from "react-intl";

export default function Resume() {
  return (
    <div className="customizer">
      <button className="exit" onClick={() => (state.chat = true)}>
        <FormattedMessage id="page.home.back" />
      </button>
      <a href="/matteo-dante-resume.pdf" download>
        <button className="download">
          <FormattedMessage id="page.home.save" />
        </button>
      </a>
      <div id="resume" className="resume">
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
            <FormattedMessage id="page.resume.summary" />
          </p>
        </div>
        <div className="description">
          <h5>Skills</h5>
          <ul>
            <li>Full-stack development</li>
            <li>
              <FormattedMessage id="page.resume.skills.1" />
            </li>
            <li>
              <FormattedMessage id="page.resume.skills.2" />
            </li>
            <li>
              <FormattedMessage id="page.resume.skills.3" />
            </li>
            <li>
              <FormattedMessage id="page.resume.skills.4" />
            </li>
            <li>
              <FormattedMessage id="page.resume.skills.5" />
            </li>
            <li>
              <FormattedMessage id="page.resume.skills.6" />
            </li>
          </ul>
        </div>
        <div className="description">
          <h5>Education</h5>
          <ul>
            <li>
              <FormattedMessage id="page.resume.education.1" />
            </li>
            <li>
              <FormattedMessage id="page.resume.education.2" />
            </li>
          </ul>
        </div>
        <div className="description">
          <h3>Experiences</h3>
          <h5>IT-Assistant and Web Developer at Galileo S.p.A</h5>
          <ul>
            <li>
              <FormattedMessage id="page.resume.experiences.1" />
            </li>
            <li>
              <FormattedMessage id="page.resume.experiences.2" />
            </li>
          </ul>

          <h5>Full Stack Web Developer at Esafactoring S.r.l</h5>
          <ul>
            <li>
              <FormattedMessage id="page.resume.experiences.3" />
            </li>
            <li>
              <FormattedMessage id="page.resume.experiences.4" />
            </li>
            <li>
              <FormattedMessage id="page.resume.experiences.5" />
            </li>
          </ul>

          <p>
            <FormattedMessage id="page.resume.outro" />
          </p>
        </div>
      </div>
    </div>
  );
}
