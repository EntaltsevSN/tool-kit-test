import { PAGE_REPOSITORIES_COUNT } from "../../config/constants";
import { IRepositoriesDataProps, ISearchRepositoryProps, IStoreMethods } from "../../config/interfaces";
import useStore from "../../config/store";
import RepositoriesItem from "./RepositoriesItem";

const Repositories = () => {
  const { isLoading, repositoriesData, search, page }: IStoreMethods = useStore((state) => state)
  
  function getRepositoriesInRange(list: ISearchRepositoryProps[] | undefined | null) {
    const startPoint = (page - 1) * PAGE_REPOSITORIES_COUNT;
    const repositories = list === undefined || list === null ? [] : list.slice(startPoint, startPoint + PAGE_REPOSITORIES_COUNT);
    return repositories;
  }

  function isDataEmpty(data: IRepositoriesDataProps | null) {
    return data === null || data.data === undefined || data.data === null || !data.data?.length;
  }

  function getHeaderByType(type: string | undefined) {
    if (search === '' || search === '@') return '';
    if (type === 'viewer data') return `Мои репозитории (${'EntaltsevSN'}): `;
    if (type === 'owner data') return `Репозитории автора ${search.slice(1)}: `;
    return `Найденные репозитории по запросу "${search}": `;
  }

  function getRepositoriesMetrics() {
    const startPoint = (page - 1) * 10 + 1;
    const endPoint = startPoint + 10 - 1;
    const total = repositoriesData?.data === undefined || repositoriesData?.data === null 
      ? 0 
      : repositoriesData.data?.length;

    return repositoriesData?.data === undefined ? '' : `${startPoint} - ${endPoint} из ${total}`;
  }

  return <div className="repositories">
    <header className="home__header">
      { !isLoading && `${getHeaderByType(repositoriesData?.type)}${getRepositoriesMetrics()}` }
    </header>
    { 
      isLoading || repositoriesData === null
        ? <div>Загружаю репозитории...</div> 
        : isDataEmpty(repositoriesData)
          ? <div>Подходящих репозиториев нет</div>
          : <ul className="repositories__list">
            {
              getRepositoriesInRange(repositoriesData?.data).map((item) =>
                <RepositoriesItem { ...item } />
              )
            }
          </ul>  
    }
  </div>
}

export default Repositories;