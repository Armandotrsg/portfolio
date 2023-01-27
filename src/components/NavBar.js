import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import {LinkContainer} from 'react-router-bootstrap'
import githubLogo from '../assets/img/githubLogo.svg';
import linkedin from '../assets/img/nav-icon1.svg';
import instagram from '../assets/img/nav-icon3.svg';
import logo from '../assets/img/logo.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () =>  window.removeEventListener("scroll", onScroll); 
    },[]);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <LinkContainer> */}
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                        {/* </LinkContainer> */}
                        {/* <LinkContainer> */}
                            <Nav.Link href="#awards" className={activeLink === 'awards' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
                        {/* </LinkContainer> */}
                            {/* <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Education</Nav.Link> */}
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                            <a href="/">
                                <img src={githubLogo} alt="github" />
                            </a>
                            <a href="/">
                                <img src={instagram} alt="twitter" />
                            </a>
                        </div>
                        <button role="link" className="vvd">
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
