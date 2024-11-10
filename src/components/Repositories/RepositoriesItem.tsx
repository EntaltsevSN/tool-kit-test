import { Link } from 'react-router-dom';
import StarIcon from '../../assets/star.svg?react'

const RepositoriesItem = ({ name, stargazerCount, updatedAt, url, owner }) => {
  return <li className="repositories__item">
    <div className="repositories__data">
      <h2 className='repositories__name'>{ name }</h2>
      <p className='repositories__description'>Последнее обновление: { new Date(updatedAt).toLocaleDateString() }</p>
    </div>
    <div className="repositories__stars">
      <StarIcon /> { stargazerCount }
    </div>
    <Link to={`/repository/${owner.login}==${name}`} className="repositories__link" />
  </li>
}

export default RepositoriesItem;