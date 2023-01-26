import { Col, Container, Row } from "react-bootstrap";
import githubLogo from '../assets/img/githubLogo.svg';
import linkedin from '../assets/img/nav-icon1.svg';
import instagram from '../assets/img/nav-icon3.svg';
import logo from '../assets/img/logo.svg';

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" className="mt-3" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon mt-4">
                            <a href="https://www.linkedin.com/in/">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                            <a href="/">
                                <img src={githubLogo} alt="github" />
                            </a>
                            <a href="/">
                                <img src={instagram} alt="twitter" />
                            </a>
                        </div>
                        <p> CopyRight 2023. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}