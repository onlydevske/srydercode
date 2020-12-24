import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
    <section className='page-section portfolio' id='portfolio'>
      <div className='text-center'>
        <h2 className='page-section-heading text-secondary mb-0 d-inline-block'>
          PORTFOLIO
        </h2>
      </div>
      <div className='divider-custom'>
        <div className='divider-custom-line'></div>
        <div className='divider-custom-icon'>
          <i className='fas fa-star'></i>
        </div>
        <div className='divider-custom-line'></div>
      </div>

      <PortfolioItem />
    </section>
  )
}

export default Portfolio
