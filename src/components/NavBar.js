import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from '../assets/img/logo.png';
import { SocialNav } from "./SocialNav";
import { useLocation, Link } from "react-router-dom";
import resume from '../assets/pdf/resume.pdf';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === '/home') {
            setActiveLink('home');
        } else if (path === '/aboutme') {
            setActiveLink('aboutme');
        } else if (path === '/connect') {
            setActiveLink('connect');
        }
    },[location.pathname])

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

    const downloadResume = () => {
        let link = document.createElement('a');
        link.href = resume;
        link.download = 'Armando_Terrazas_Resume.pdf';
        link.click();
        link.remove();
    }

    return (
        <Navbar expand="lg" className={scrolled || window.innerWidth < 767 ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img src={logo} alt="logo" className="imgLogo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'}>About Me</Nav.Link>
                            <Nav.Link as={Link} to="/connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'}>Connect</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <SocialNav />
                        <button role="link" className="vvd" onClick={downloadResume}>
                            <span>Download my Resume</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
