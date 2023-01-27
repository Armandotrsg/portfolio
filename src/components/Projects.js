import { Row, Col, Tab, Container, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectsInfo } from "../shared/Projects";
import { Awards } from "../shared/Awards";

export const Projects = () => {
    const [title, setTitle] = useState("Projects");
    const [description, setDescription] = useState("These are a few of the projects I have worked on. I have worked on a variety of projects, from web development to different simulations projects. I have also worked on projects that involve machine learning and data science.");

    const handleTabChange = (key) => {
        if (key === "projects") {
            setTitle("Projects");
            setDescription("These are a few of the projects I have worked on. I have worked on a variety of projects, from web development to different simulations projects. I have also worked on projects that involve machine learning and data science.");
        } else if (key === "awards") {
            setTitle("Awards & Participations");
            setDescription("I'm so proud of the different awards I have received. I have received awards for my academic achievements, as well as some of my personal projects.");
        } else if (key === "volunteerings") {
            setTitle("Volunteerings");
            setDescription("I have been involved in a variety of volunteering projects. I have volunteered mainly helping the environment and helping the community.");
        }
    }

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{title}</h2>
                <p>{description}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="projects">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="projects" onClick={() => handleTabChange("projects")}>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="awards" onClick={() => handleTabChange("awards")}>Awards & Contests</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="volunteerings" onClick={() => handleTabChange("volunteerings")}>Volunteerings</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="projects">
                      <Row>
                        {
                          ProjectsInfo.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="awards">
                      <Row>
                      {
                        Awards.map((award, index) => {
                          return(
                            <ProjectCard
                              key={index}
                              {...award}
                            />
                          )
                        })
                      }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="volunteerings">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background" />
        </section>
    );
}