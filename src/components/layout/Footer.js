import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../styles/Footer.css";

const Footer = () => {
  return(
    <div className='footer'>
      <footer  className="py-4 bg-primary text-white text-center">
        Copyright &copy;
        <span className="year"> {new Date().getFullYear()}</span> Blogs Manager
        <div className="author">
          Created by Adam Misiak 
          &nbsp;
          <a target="_blank" rel="noreferrer" href="https://github.com/AdamMisiak">
            <FontAwesomeIcon color="white" icon={faGithub} />
          </a>
          &nbsp;
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/adammisiak/">
            <FontAwesomeIcon color="white" icon={faLinkedinIn} />
          </a>
          &nbsp;
          <a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/adammisiak">
            <FontAwesomeIcon color="white" icon={faCoffee} />
          </a>

        </div>
      </footer>
    </div>
  );