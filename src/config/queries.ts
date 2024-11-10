export function getViewerRepositoriesQuery() {
  return `query {
    viewer {
      name
      repositories(last: 100) {
        nodes {
          name
          stargazerCount
          updatedAt
          url
          owner {
            login
          }
        }
      }
    }
  }`
};

export function getSearchRepositoriesQuery(search: string) {
  return `query {
    search(query: "${search}", type:REPOSITORY, last: 100) {
      repositoryCount
    	nodes {
        ... on Repository {
          name
          stargazerCount
          updatedAt
          url
          owner {
            login
          }
        }
      }
    }
  }`
};

export function getRepositoriesByUserNameQuery(login: string) {
  return `query {
    repositoryOwner(login: "${login}") {
    repositories(last: 100) {
      nodes {
        name
        stargazerCount
        updatedAt
        url
        owner {
          login
        }
      }
    }
  }
  }`
};

export function getRepositoryByOwnerAndNameQuery(owner: string, name: string) {
  return `query {
    repository(owner: "${owner}", name: "${name}") {
    	name
    	stargazerCount
    	updatedAt
    	languages(last: 100) {
        nodes {
          ... on Language {
            name
          }
        }
      }
    	owner {
        avatarUrl
        login
      }
  	}
  }`
};