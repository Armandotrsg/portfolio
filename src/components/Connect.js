import { Col, Container, Row } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp2.png";
import { Card } from "react-bootstrap";
import { Profiles } from "../shared/Profiles";
import React from "react";
import {Contact} from "./Contact";

export const Connect = () => {
    const profileCard = ({name, user, img, link}) => {
        return (
            <Col md={6} >
                <a href={link} target="_blank" rel="noreferrer" className="cardLink">
                    <Card className="profileCard">
                        <Card.Body className="cardBody">
                            <div>
                                <Card.Img variant="top" src={img} className={name === "LinkedIn" ? "linkedinImg" : "profileImg"} />
                                <Card.Title className="gradient-text my-3"><h5>{name}</h5></Card.Title>
                                <Card.Text>
                                   <strong>
                                        {user}
                                   </strong>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
        )
    }

    return (
        <React.Fragment>
            <header className="connect">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1>Connect with me!</h1>
                        </Col>
                    </Row>
                </Container>
            </header>
            <section className="connect">
                <Container>
                    <Row >
                        {
                            Profiles.map((profile, index) => {
                                return profileCard({...profile, key: index})
                            })
                        }
                    </Row>
                    <img src={colorSharp} alt="color sharp" className="background-image-right"/>
                </Container>
            </section>
            <Contact />
        </React.Fragment>
        
    );
};
