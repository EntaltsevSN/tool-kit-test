import { Link } from 'react-router-dom';
import starIcon from '../../assets/star.svg'
import { ISearchRepositoryProps } from '../../config/interfaces';

const RepositoriesItem = ({ name, stargazerCount, updatedAt, owner }: ISearchRepositoryProps) => {
  return <li className="repositories__item">
    <div className="repositories__data">
      <h2 className='repositories__name'>{ name }</h2>
      <p className='repositories__description'>Последнее обновление: { new Date(updatedAt).toLocaleDateString() }</p>
    </div>
    <div className="repositories__stars">
      <img src={starIcon} /> { stargazerCount }
    </div>
    <Link to={`/repository/${owner.login}==${name}`} className="repositories__link" />
  </li>
}

export default RepositoriesItem;