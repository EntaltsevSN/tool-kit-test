import { MutableRefObject } from "react";
import { GITHUB_TOKEN } from "./token";

export async function fetchDataFromGithub(query: string, controllerRef: MutableRefObject<AbortController | null>) {
  if(controllerRef?.current) controllerRef.current.abort();

  controllerRef.current = new AbortController();
  const signal: AbortSignal = controllerRef.current.signal;

  const data = await fetch('https://api.github.com/graphql', {
    signal,
    method: 'POST',
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query })
  })
    .then(response => response.json())
    .then(({ data }) => {
      console.log('d', data)
      if(data?.viewer) return data.viewer.repositories.nodes;
      if(data?.search) return data.search.nodes;
      if(data?.repositoryOwner) return [];
      if(data?.repositoryOwner) return data.repositoryOwner.repositories.nodes;

      return data.repository;
    })

  return data;
} 