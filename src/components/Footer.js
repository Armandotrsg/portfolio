import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import { SocialNav } from "./SocialNav";

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <a href="/home">
                            <img src={logo} alt="Logo" className="mt-3 imgLogo" />
                        </a>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="mt-4">
                            <SocialNav />
                        </div>
                        <p>©Copyrights 2023. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}