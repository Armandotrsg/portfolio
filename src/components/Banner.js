import {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['4th semester student', 'software engineer', 'web developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100); /* To know how fast each letter will come after another */
    const period = 2000;
    
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          //setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          //setIndex(1);
          setDelta(500);
        } else {
          //setIndex(prevIndex => prevIndex + 1);
        }
      }

    return (
        <header className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={7} xl={8}>
                        <TrackVisibility>
                          {({isVisible}) =>
                          <div className={isVisible ? "animated_animated animate_fadeIn" : ""}>
                            <span className="tagline">Hi There!</span>
                                  <div className='fixed-height'>
                                    <h1>I'm Armando a <span className="txt-rotate"><span className={isDeleting ? "writing" : "wrap"}>{text}</span></span></h1>
                                  </div>
                            <p>Example Text</p>
                            <button role="link" className="vvd">Let's connect <ArrowRightCircle size={25} /> </button>
                          </div> }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={5} xl={4}>
                        <img src={'https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/header-img.svg'} alt="banner" />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}