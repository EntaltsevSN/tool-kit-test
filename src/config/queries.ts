export const viewerQuery = `query {
  viewer {
    name
    repositories(last: 10) {
      nodes {
        name
        stargazerCount
        updatedAt
        url
      }
    }
  }
}`

export function getSearchQuery(search: string) {
  return `query {
    search(query: "${search}", type:REPOSITORY, last: 10) {
      repositoryCount
    	nodes {
        ... on Repository {
          name
          stargazerCount
          updatedAt
          url
        }
      }
    }
  }`
}

export function getCurrentRepository(owner: string, name: string) {
  return `query {
    repository(owner: "${owner}", name: "${name}") {
    	name
    	stargazerCount
    	updatedAt
    	languages {
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
}