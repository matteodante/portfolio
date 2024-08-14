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
          <img src="/me.jpeg" className="profile" alt="Matteo Dante" />
        </div>
        <div className="description">
          <h5><FormattedMessage id="page.resume.summaryTitle" /></h5>
          <p>
            <FormattedMessage id="page.resume.summary" />
          </p>
        </div>
        <div className="description">
          <h5><FormattedMessage id="page.resume.skillsTitle" /></h5>
          <ul>
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
          <h5><FormattedMessage id="page.resume.educationTitle" /></h5>
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
          <h3><FormattedMessage id="page.resume.experiencesTitle" /></h3>
          <h5>Pilatus Aircraft Ltd - Software Engineer</h5>
          <ul>
            <li>
              <FormattedMessage id="page.resume.experiences.6" />
            </li>
          </ul>

          <h5>DonTouch SA - Back End Developer</h5>
          <ul>
            <li>
              <FormattedMessage id="page.resume.experiences.7" />
            </li>
          </ul>

          <h5>Hexa Credit Care - Full Stack Developer</h5>
          <ul>
            <li>
              <FormattedMessage id="page.resume.experiences.8" />
            </li>
          </ul>

          <h5>Galileo SpA - IT Specialist</h5>
          <ul>
            <li>
              <FormattedMessage id="page.resume.experiences.1" />
            </li>
            <li>
              <FormattedMessage id="page.resume.experiences.2" />
            </li>
          </ul>

          <p>
            <FormattedMessage id="page.resume.outro" />
          </p>
          <div className="resume-body">
            <h3 className="profile-name">
              <a className="cta" href="mailto:matteo.dante659@gmail.com">
                <FormattedMessage id="page.resume.contact" />
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
