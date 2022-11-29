import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LanguageSelector from '../LanguageSelector';


function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg" >
                <Container>
                    <Navbar.Brand>
                        <Image src='https://www.fonradar.com/wp-content/uploads/2021/10/logo-1.png' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav>
                            <LanguageSelector />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;