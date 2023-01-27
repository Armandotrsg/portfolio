import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { SkillsContent } from "../shared/Skills";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const SkillsCard = ({img, title}) => {
        return(
            <div className="item">
                <img src={img} alt={title} />
                <h5>{title}</h5>
            </div>
        )
    }

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>I have worked with all of these technologies and frameworks <br />and I keep learning outside the university taking different courses that teach me new technologies</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {SkillsContent.map((item, index) => {
                                    return(
                                        <SkillsCard key={index} {...item} />
                                    )
                                })}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
}