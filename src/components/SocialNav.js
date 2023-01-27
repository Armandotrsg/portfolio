import githubLogo from "../assets/img/githubLogo.svg";
import linkedin from "../assets/img/nav-icon1.svg";
import instagram from "../assets/img/nav-icon3.svg";

export const SocialNav = () => {
    return (
        <div className="social-icon">
            <a href="https://www.linkedin.com/in/armando-terrazas-gomez/" target="_blank">
                <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/Armandotrsg" target="_blank">
                <img src={githubLogo} alt="github" />
            </a>
            <a href="https://www.instagram.com/armandotrsg/" target="_blank">
                <img src={instagram} alt="Instagram" />
            </a>
        </div>
    );
};
