import { Container } from 'react-bootstrap'
import avatar from '../avataaars.svg'

const Header = () => {
  return (
    <header className='masthead bg-primary text-white text-center'>
      <Container className='container d-flex align-items-center flex-column'>
        <img
          className='masthead-avatar mb-5'
          src={avatar}
          alt=''
        />
        <h1 className='masthead-heading mb-0'>srydercode</h1>
        <div className='divider-custom divider-light'>
          <div className='divider-custom-line'></div>
          <div className='divider-custom-icon'>
            <i className='fas fa-star'></i>
          </div>
          <div className='divider-custom-line'></div>
        </div>
        <p className='pre-wrap masthead-subheading font-weight-light mb-0'>
          Graphic Artist - Web Designer - Illustrator
        </p>
      </Container>
    </header>
  )
}

export default Header
