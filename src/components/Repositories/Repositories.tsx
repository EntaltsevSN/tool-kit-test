import { PAGE_REPOSITORIES_COUNT } from "../../config/constants";
import useStore from "../../config/store";
import RepositoriesItem from "./RepositoriesItem";

const Repositories = () => {
  const { isLoading, repositoriesData, search, page }: { isLoading: boolean } = useStore((state: unknown) => state)
  
  function getRepositoriesInRange(list: object[]) {
    const startPoint = (page - 1) * PAGE_REPOSITORIES_COUNT
    const repositories = list.slice(startPoint, startPoint + PAGE_REPOSITORIES_COUNT)
    return repositories
  }

  function isDataEmpty(data: object | undefined | null | object[]) {
    return data.data === undefined || data === null || !data.data.length || data.data?.repositoryOwner
  }

  function getHeaderByType(type: string) {
    if (type === 'viewer data') return `Мои репозитории (${'EntaltsevSN'})`
    if (type === 'owner data') return `Репозитории автора ${search.slice(1)}`
    return `Найденные репозитории по запросу "${search}"`
  }

  function getRepositoriesMetrics() {
    const startPoint = (page - 1) * 10 + 1
    const endPoint = startPoint + 10 - 1

    return `${startPoint} - ${endPoint} из ${repositoriesData.data.length}`
  }

  return <div className="repositories">
    <header className="home__header">
      { !isLoading && `${getHeaderByType(repositoriesData.type)}: ${getRepositoriesMetrics()}` }
    </header>
    { 
      isLoading || repositoriesData === null
        ? <div>Загружаю репозитории...</div> 
        : isDataEmpty(repositoriesData)
          ? <div>Подходящих репозиториев нет</div>
          : <ul className="repositories__list">
            {
              getRepositoriesInRange(repositoriesData.data).map((item) =>
                <RepositoriesItem { ...item } />
              )
            }
          </ul>  
    }
  </div>
}

export default Repositories;