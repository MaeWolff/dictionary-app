import { API_BASE_URL } from "./apiBaseUrl";

type Fetcher = (
  info: { searchWord: string },
  init?: RequestInit
) => Promise<Response>;

const fetcher: Fetcher = async ({ searchWord }, init) => {
  const url = `${API_BASE_URL}/${searchWord}`;

  const res = await fetch(url, init);
  /**
   * Fetch promises only reject with a TypeError when a network error occurs.
   * Since 4xx and 5xx responses aren't network errors, there's nothing to catch.
   * According to the react query documentation, we should throw in case there is an error.
   * https://tanstack.com/query/v4/docs/guides/queries#query-basics
   */
  if (!res.ok) throw new Error(`${res.status}`);
  return res;
};

export default fetcher;
