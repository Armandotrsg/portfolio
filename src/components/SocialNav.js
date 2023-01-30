import githubLogo from "../assets/img/githubLogo.svg";
import linkedin from "../assets/img/linkedinNav.svg";
import instagram from "../assets/img/instagramNav.svg";

export const SocialNav = () => {
    return (
        <div className="social-icon">
            <a href="https://www.linkedin.com/in/armando-terrazas-gomez/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/Armandotrsg" target="_blank" rel="noreferrer">
                <img src={githubLogo} alt="github" />
            </a>
            <a href="https://www.instagram.com/armandotrsg/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="Instagram" />
            </a>
        </div>
    );
};
