import { create, StoreApi, UseBoundStore } from 'zustand';
import { IStoreMethods, IOwnerRepositoryProps, ISearchRepositoryProps } from './interfaces';

const useStore: UseBoundStore<StoreApi<IStoreMethods>> = create((set) => ({
  repositoriesData: null,
  updateRepositoriesData(repositoriesData: ISearchRepositoryProps[] | undefined, type: string) {
    set((state) => ({ ...state, repositoriesData: {
      data: repositoriesData, type
    } }))
  },
  repository: null,
  updateRepository(repository: IOwnerRepositoryProps) {
    set((state) => ({ ...state, repository }))
  },
  search: '',
  updateSearch(search: string) {
    set((state) => ({ ...state, search }))
  },
  page: 1,
  updatePage(page: number) {
    set((state) => ({ ...state, page }))
  },
  isLoading: true,
  updateIsLoading(isLoading: boolean) {
    set((state) => ({ ...state, isLoading }))
  }
}));

export default useStore;