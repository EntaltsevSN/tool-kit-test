import { MutableRefObject, useEffect, useRef } from 'react';
import StarIcon from '../../assets/star.svg?react'
import useStore from '../../config/store';
import { fetchDataFromGithub } from '../../config/fetchData';
import { Link, useLocation } from 'react-router-dom';
import { getRepositoryByOwnerAndNameQuery } from '../../config/queries';

const Repository = () => {
  const controllerRef: MutableRefObject<AbortController | undefined> = useRef<AbortController>()
  const store = useStore((state) => state)
  const {repository, updateRepository, isLoading, updateIsLoading } = store
  const repositoryData = useLocation().pathname.split('/')[2].split('==')

  console.log(repository, repositoryData)

  async function loadRepositoryData() {
    updateIsLoading(true)
    const fetchedData = await fetchDataFromGithub(getRepositoryByOwnerAndNameQuery(repositoryData[0], repositoryData[1]), controllerRef)
    updateRepository(fetchedData)
    updateIsLoading(false)
  }

  useEffect(() => {
    loadRepositoryData()

    return () => updateIsLoading(true)
  }, [])
  
  return isLoading || repository === null
    ? 'Загружаем репозиторий...'
    : <section className="repository">
      <header className='repository__header'>
        <div className="repository__author">
          <img className='repository__avatar' src={ repository.owner.avatarUrl } alt="" />
        </div>
        <h2 className="repository__title">{ repository.name }</h2>
      </header>
      <div className="repository__stars">
        <StarIcon /> { repository.stargazerCount }
      </div>
      <div className="repository__description">
        Последнее обновление: { new Date(repository.updatedAt).toLocaleDateString() }
      </div>
      <div className="repository__languages">
        { repository.languages.nodes.map(({ name }: { name: string }) => 
          <div className="repository__language">{ name }</div>
        ) }
      </div>
      <Link to={`/?search=@${repository.owner.login}`}>Другие репозитории автора</Link>
    </section>
};

export default Repository;