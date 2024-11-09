import { GITHUB_TOKEN } from "./token";

export async function fetchDataFromGithub(query: string) {
  await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query })
  })
    .then(response => response.json())
    .then(data => console.log('data', data))
} 