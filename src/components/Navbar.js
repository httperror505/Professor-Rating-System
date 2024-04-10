import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        const onScroll =() => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        //Navigation bar
 
        <Navbar expand="lg" className={scrolled ? "scrolled": ""} >
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggeler-icon"></span>
                </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="#home" className ={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#post" className ={activeLink === 'post' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('post')}>post</Nav.Link>
                <Nav.Link href="#subjects" className ={activeLink === 'subjects' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('subjects')}>subjects</Nav.Link>
                <Nav.Link href="#teachers" className ={activeLink === 'teachers' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('teachers')}>teachers</Nav.Link>
                <Nav.Link href="#likes" className ={activeLink === 'likes' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('likes')}>likes</Nav.Link>
                <Nav.Link href="#dislikes" className ={activeLink === 'dislikes' ? 'active navbar-link' : 'navbar-link'} onclick={() => onUpdateActiveLink('dislikes')}>dislikes</Nav.Link>
                </Nav>

            </Navbar.Collapse>    
            </Container>
        </Navbar>
    )
}