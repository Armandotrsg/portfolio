import {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['web developer', 'software engineer', 'full stack developer'];
    const [text, setText] = useState('');
    const period = 2000;
    
    useEffect(() => {
        
    });

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Hi There!</span>
                        <h1>{`I'm Armando`}<span className="wrap">web developer</span></h1>
                        <p>Example Text</p>
                        <button role="link" className="vvd">Let's connect </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={'https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/banner-img.svg'} alt="banner" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}