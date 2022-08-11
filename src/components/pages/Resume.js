import "../../styles/Resume.css";

import niravResume from "../../NiravVenkatesan_Resume.pdf";

function Resume() {
  return (
    <div className="resume-page ">
      <a className="resume-link" href={niravResume} target={"_blank"} rel={"noreferrer"}>See a pdf of my resume here</a>
      
      <ul>
        <h3>Front-end Skills</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
    
      <ul>
          <h3>Back-end Skills</h3>
          <li>Python, Flask</li>
          <li>Java, Spring</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize, SQLAlchemy</li>
        <li>MongoDB, Mongoose</li>
        <li>GraphQl, Apollo Server</li>
      </ul>
            
  
      
    </div>
  );
}

export default Resume;