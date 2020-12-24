import { Container } from 'react-bootstrap'

const CopyRight = () => {
  const currentYear = 2021
  return (
    <>
      <section className='copyright py-4 text-center text-white'>
          <Container>
          <small className="pre-wrap">Copyright © {currentYear}</small>
          </Container>
      </section>
    </>
  )
}

export default CopyRight
