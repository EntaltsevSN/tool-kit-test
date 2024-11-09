import StarIcon from '../../assets/star.svg?react'

const Home = () => {  
  return <section className="home">
    <header className="home__header">
      Мои репозитории (EntaltsevSN): 1 - 10 
    </header>
    <ul className="repositories">
      {
        Array(10).fill(null).map(item =>
          <li className="repositories__item">
            <div className="repositories__data">
              <h2 className='repositories__name'>search-plugins</h2>
              <p className='repositories__description'>Последнее обновление: { new Date('2024-11-09T15:12:36Z').toLocaleDateString() }</p>
            </div>
            <div className="repositories__stars">
              <StarIcon /> 4286
            </div>
            <a href='/repository/search-plugins' className="repositories__link" />
          </li>
        )
      }
      <ul className="pagination">
        {
          Array(10).fill(null).map((item, index) =>
            <li className={`pagination__item ${index === 0 && 'pagination__item--active'}`}>
              <a className="pagination__link">{ ++index }</a>
            </li>
          )
        }
      </ul>
    </ul>
  </section>
};

export default Home;