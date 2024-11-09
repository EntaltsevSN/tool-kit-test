import StarIcon from '../../assets/star.svg?react'

const Repository = () => {
  return <section className="repository">
    <header className='repository__header'>
      <div className="repository__author">
        <img className='repository__avatar' src="https://avatars.githubusercontent.com/u/17544771?s=48&v=4" alt="" />
      </div>
      <h2 className="repository__title">search-plugins</h2>
    </header>
    <div className="repository__stars">
      <StarIcon /> 4286
    </div>
    <div className="repository__description">
      Последнее обновление: { new Date('2024-11-09T15:12:36Z').toLocaleDateString() }
    </div>
    <div className="repository__languages">
      <div className="repository__language">HTML</div>
      <div className="repository__language">CSS</div>
      <div className="repository__language">JAVASCRIPT</div>
    </div>
    <a href="">Другие репозитории автора</a>
  </section>
};

export default Repository;