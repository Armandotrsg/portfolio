import { Col, Container, Row } from 'react-bootstrap';
import notFound from '../assets/img/error404.png';

export const NotFound = () => {
    return (
        <section>
            <Container>
                <Row >
                    <Col md={3} />
                    <Col className='text-center'>
                        <div className='d-block'>
                            <img src={notFound} className="errorImg" alt='404 screen' />
                        </div>
                    </Col>
                    <Col md={3} />
                </Row>
            </Container>
        </section>
    );
}