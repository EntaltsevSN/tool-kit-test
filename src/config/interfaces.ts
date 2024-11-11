export interface IOwnerRepositoryProps {
  name: string,
  owner: { avatarUrl: string, login: string },
  stargazerCount: number,
  updatedAt: string,
  languages: { nodes: { name: string }[] }
};

export interface ISearchRepositoryProps {
  name: string,
  stargazerCount: number,
  updatedAt: string,
  url: string,
  owner: { login: string },
  repositoryOwner?: null
};

export interface IRepositoriesDataProps {
  data: ISearchRepositoryProps[] | null | undefined,
  type: string
};

export interface IStoreMethods {
  repositoriesData: IRepositoriesDataProps | null,
  updateRepositoriesData(repositoriesData: ISearchRepositoryProps[] | undefined, type: string): void,
  repository: IOwnerRepositoryProps | null,
  updateRepository(repository: object): void,
  search: string,
  updateSearch(search: string): void,
  page: number,
  updatePage(page: number): void,
  isLoading: boolean,
  updateIsLoading(isLoading: boolean): void
};