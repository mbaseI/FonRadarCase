import Container from 'react-bootstrap/Container';
import Header from '../Header';

type LayoutProps = {
    children: JSX.Element[] | JSX.Element
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
        </>
    );
}

export default Layout;