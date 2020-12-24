import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

// const OldMenu = () => {
//   return (
//     <>
//       <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
//         <Container>
//           <LinkContainer to='/'>
//             <Navbar.Brand>Srydercode</Navbar.Brand>
//           </LinkContainer>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='ml-auto'>
//               <LinkContainer to='/about'>
//                 <Nav.Link>About</Nav.Link>
//               </LinkContainer>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   )
// }

const Menu = () => {
  return (
    <>
      <Nav className='navbar navbar-expand-lg bg-secondary fixed-top' id='mainNav'>
        <Container>
          <a className='navbar-brand js-scroll-trigger text-uppercase' href='#page-top'>
            srydercode
          </a>
          <Button
            className='navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            Menu <i class='fas fa-bars'></i>
          </Button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                  href='#portfolio'
                >
                  PORTFOLIO
                </a>
              </li>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                  href='#about'
                >
                  ABOUT
                </a>
              </li>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                  href='#contact'
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </Nav>
    </>
  )
}

export default Menu
