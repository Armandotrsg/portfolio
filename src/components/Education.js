import { Card, Container, Row, Col } from "react-bootstrap";

export const Education = () => {
    const edu = [
        {
            name: "Tecnológico de Monterrey, Campus Guadalajara",
            date: "2021 - 2025",
            gpa: "GPA: 4.0/4.0",
            title: "B.S. in Computer Science and Technology",
        },
        {
            name: "Tecmilenio Campus Zapopan",
            date: "2018 - 2022",
            gpa: "GPA: 4.0/4.0",
            title: "High School Diploma",
        },
    ];

    const EduCard = ({ name, date, gpa, title }) => {
        return (
            <Col xs={12} md={6} xl={4}>
                <Card className="educationCard">
                    <Card.Body className="cardBody">
                        <div>
                            <Card.Title className={name === "Tecnológico de Monterrey, Campus Guadalajara" ? "gradient-text-tec" : "gradient-text-tecmilenio"}>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {date}
                            </Card.Subtitle>
                            <Card.Text>
                                {title}
                                <br />
                                {gpa}
                            </Card.Text>
                        </div>
                        
                    </Card.Body>
                </Card>
            </Col>
        );
    };

    return (
        <section className="education" id="education">
            <Container>
                <Row >
                    <Col className="text-center">
                        <h1>Education</h1>
                        <p>Currently studying my 4th semester in the university</p>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                    {edu.map((school, index) => {
                        return <EduCard key={index} {...school} />;
                    })}
                </Row>
            </Container>
        </section>
    );
};
