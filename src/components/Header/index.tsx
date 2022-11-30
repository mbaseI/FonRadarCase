import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';
import styles from './style.module.scss'

function Header() {
    const navigate = useNavigate();

    const { t } = useTranslation();

    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <Navbar className='mb-3' bg="light" expand="lg" >
            <Container>
                <Navbar.Brand role='button' onClick={() => navigate('/')}>
                    <Image src='https://www.fonradar.com/wp-content/uploads/2021/10/logo-1.png' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <LanguageSelector />
                        {localStorage.getItem('token') && <Button className={styles.logOutButton} onClick={logOut}>{t('button.logOut')}</Button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;