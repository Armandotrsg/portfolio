import { Card, Button, Container, Row, Col } from "react-bootstrap";

export const Education = () => {
    const edu = [
        {
            name: "Tecnológico de Monterrey, Campus Guadalajara",
            date: "2021 - 2025",
            gpa: "GPA: 98/100",
            title: "B.S. in Computer Science and Technology",
            img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_del_ITESM.svg"
        },
        {
            name: "Tecmilenio Campus Zapopan",
            date: "2018 - 2022",
            gpa: "GPA: 98/100",
            title: "High School Diploma",
            img: "../assets/img/tecmilenio.png"
        },
    ];

    const EduCard = ({ name, date, gpa, title, img }) => {
        return (
            <Col xs={12} md={6} xl={4}>
                <Card className="educationCard">
                    <Card.Body className="cardBody">
                        <div>
                            <Card.Title className="gradient-text">{name}</Card.Title>
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
        <section className="education">
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
                    {/* q: Why is this not working? */}
                    {/* a: Because you are trying to map over an object, not an array. */}
                </Row>
            </Container>
        </section>
    );
};
