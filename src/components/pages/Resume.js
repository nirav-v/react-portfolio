import "../../styles/Resume.css";

import niravResume from "../../(4_17_22) NiravVenkatesan_Resume .pdf";

function Resume() {
  return (
    <div className="resume-page container">
      <h2 className="resume-link">
        {" "}
        <a href={niravResume}>see my resume here</a>{" "}
      </h2>
      <h3>Front-end Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-end Skills</h3>
      <ul>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>GraphQl, Apollo Server</li>
      </ul>
    </div>
  );
}

export default Resume;
