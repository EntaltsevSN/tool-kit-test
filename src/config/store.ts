import { create } from 'zustand';

const useStore = create((set) => ({
  repositoriesData: null,
  updateRepositoriesData(repositoriesData: unknown, type: string) {
    set((state: object) => ({ ...state, repositoriesData: {
      data: repositoriesData, type
    } }))
  },
  repository: null,
  updateRepository(repository: object) {
    set((state: object) => ({ ...state, repository }))
  },
  search: '',
  updateSearch(search: string) {
    set((state: object) => ({ ...state, search }))
  },
  page: 1,
  updatePage(page: number) {
    set((state: object) => ({ ...state, page }))
  },
  isLoading: true,
  updateIsLoading(isLoading: boolean) {
    set((state: object) => ({ ...state, isLoading }))
  }
}))

export default useStore;