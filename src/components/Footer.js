import "../styles/Footer.css";
import githubLogoImage from "../images/github-repo.jpg";
import linkedinLogoImage from "../images/linkedin-logo.png"

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li >
          <a href="https://github.com/nirav-v">
   
            <img className="github-img" src={githubLogoImage} alt="github logo" />
          </a>
        </li>
        <li >
          <a href="https://www.linkedin.com/in/nirav-venkatesan-b6a903220/">
        
            <img src={linkedinLogoImage} alt="linkedin logo"/>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
