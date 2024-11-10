import { MutableRefObject, RefObject, startTransition, useEffect, useRef, useState } from "react";
import { fetchDataFromGithub } from "../config/fetchData";
import { getRepositoriesByUserNameQuery, getSearchRepositoriesQuery, getViewerRepositoriesQuery } from "../config/queries";
import useStore from "../config/store";
import { useNavigate, useSearchParams } from "react-router-dom";
import { generateSearchParams } from "../config/searchParams";

const Form = () => {
  const controllerRef: MutableRefObject<AbortController | undefined> = useRef<AbortController>()
  const store = useStore((state) => state)
  const { updateRepositoriesData, search, updateSearch, updatePage, updateIsLoading } = store
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate();
  
  function updateSearchInSearchParams(search: string) {
    if (searchParams.size === 0 && !search.length) {
      return;
    }
    if (searchParams.has('page')) {
      searchParams.delete('page');
      setSearchParams(searchParams);
    }
    if (searchParams.has('search') && !search.length) {
      searchParams.delete('search');
      setSearchParams(searchParams);
      navigate('/')
    }
    setSearchParams({ search });
  }

  function getQueryDataBySearch(search: string | null) {
    const clearedSearch = search === null ? '' : search.trim();

    if(!clearedSearch.length) {
      return {
        type: 'viewer data',
        callback: getViewerRepositoriesQuery()
      }
    }
    if(clearedSearch.startsWith('@')) {
      return {
        type: 'owner data',
        callback: getRepositoriesByUserNameQuery(clearedSearch.slice(1))
      }
    }
    return {
      type: 'search data',
      callback: getSearchRepositoriesQuery(clearedSearch)
    }
  }

  async function updateRepositoriesDataInStore(search: string | null) {
    updateIsLoading(true)
    const fetchedData = await fetchDataFromGithub(getQueryDataBySearch(search).callback, controllerRef)
    startTransition(() => {
      updateRepositoriesData(fetchedData, getQueryDataBySearch(search).type)
      updateIsLoading(false)
    })
  }

  async function reloadDataOnChangeSearch(search: string) {
    updateSearchInSearchParams(search)
    updateSearch(search)
    updatePage(1)
    await updateRepositoriesDataInStore(search)
  }

  useEffect(() => {
    const search: string | null = searchParams.has('search') ? searchParams.get('search') : ''
    updateSearch(search)
    updateRepositoriesDataInStore(search)

    return () => updateIsLoading(true)
  }, [])

  return <form action="" className="form">
    <label className="form__label">Найди нужный репозиторий или автора</label>
    <input 
      className="form__input" 
      type="search" 
      placeholder="Введите ключевые слова или имя автора, начиная с @"
      value={search === null ? '' : search}
      onChange={e => reloadDataOnChangeSearch(e.target.value)}
    />
    <div className="form__helper">
      Примеры запросов:
      <a onClick={() => reloadDataOnChangeSearch('@EntaltsevSN')}>@EntaltsevSN</a>
      <a onClick={() => reloadDataOnChangeSearch('react')}>react</a>
      <a onClick={() => reloadDataOnChangeSearch('@facebook')}>@facebook</a>
      <a onClick={() => reloadDataOnChangeSearch('goodbyedpi')}>goodbyedpi</a>
    </div>
  </form>
}

export default Form;