import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from '../assets/img/logo.png';
import { SocialNav } from "./SocialNav";
import { useNavigate, useLocation } from "react-router-dom";

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

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    const navigate = useNavigate();
    const handleClick = () => {
        onUpdateActiveLink('connect');
        navigate('/connect');
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>

                <Navbar.Brand href="/home">
                    <img src={logo} alt="logo" className="imgLogo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                            <Nav.Link href="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
                        
                            <Nav.Link href="/aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'}>About Me</Nav.Link>
                        
                    </Nav>
                    <span className="navbar-text">
                        <SocialNav />
                        <button role="link" className="vvd" onClick={handleClick}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
