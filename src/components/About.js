import React from "react"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import me from "../assets/img/me.jpeg"
import colorSharp from "../assets/img/color-sharp2.png"

export const AboutMe = () => {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <header className="about">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1>About me</h1>
                        </Col>
                    </Row>
                </Container>
            </header>
            <section className="about">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <img src={me} alt="Armando Terrazas" className="img-fluid mb-5 aboutImg"/>
                        </Col>
                        <Col xs={12} md={6}>
                            <p>
                                Hello! My name is <strong>Armando Terrazas</strong> and I am a software engineer. I am currently a student at the <strong>Tecnológico de Monterrey</strong> in Zapopan, Jalisco, pursuing a <strong>B.S. degree in Computer Science and Technology</strong>. I am passionate about software development and I am always looking for new opportunities to learn and grow.
                                <br />
                                In my free time I enjoy spending time at the gym with my friends, and sharing a good meal with my family. I also enjoy playing video games and watching movies.
                                <br />
                                I am currently looking for a full-time position as a software engineer. If you are interested in my work, please feel free to contact me!
                            </p>
                            <button role="link" className="vvd" onClick={() => navigate('/connect')}>Let's connect <ArrowRightCircle size={25} /> </button>
                        </Col>
                    </Row>
                    <img src={colorSharp} alt="color sharp" className="background-image-right"/>
                </Container>
            </section>
        </React.Fragment>
    )
}