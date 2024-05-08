/**
 * The `useSearchParamsState` function is a custom hook in TypeScript that allows you to manage and
 * update a specific search parameter in the URL using React Router.
 * @param {string} searchParamName - The `searchParamName` parameter is a string that represents the
 * name of the search parameter you want to manage in the URL. It is used to retrieve and update the
 * value of the search parameter in the URL.
 * @param {T} defaultValue - The `defaultValue` parameter is the initial value that will be used for
 * the search parameter if it is not present in the URL.
 * @returns The function `useSearchParamsState` returns a tuple containing two elements:
 */
import { useSearchParams } from 'react-router-dom';

type SetSearchParamsState<T> = (newValue: T) => void;
export function useSearchParamsState<T extends string>(
  searchParamName: string,
  defaultValue: T,
): readonly [
  searchParamsState: T,
  setSearchParamsState: SetSearchParamsState<T>,
] {
  const [searchParams, setSearchParams] = useSearchParams();

  const acquiredSearchParam = searchParams.get(searchParamName);
  const searchParamsState = (acquiredSearchParam as T) ?? defaultValue;

  const setSearchParamsState: SetSearchParamsState<T> = (newState: T) => {
    const next = Object.assign(
      {},
      [...searchParams.entries()].reduce(
        (o, [key, value]) => ({ ...o, [key]: value }),
        {},
      ),
      { [searchParamName]: newState.toString() },
    );
    setSearchParams(next);
  };
  return [searchParamsState, setSearchParamsState];
}
