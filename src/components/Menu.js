import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Menu = () => {
  return (
    <>
      <Nav
        className='navbar navbar-expand-lg bg-secondary fixed-top'
        id='mainNav'
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='navbar-brand js-scroll-trigger text-uppercase'>
              Srydercode
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/services'>
                <Nav.Link className='nav-link text-uppercase text-white'>
                  Services
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Nav>
    </>
  )
}

export default Menu
