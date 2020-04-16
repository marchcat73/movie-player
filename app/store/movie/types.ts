export const START_FETCHING_MOVIES = 'START_FETCHING_MOVIES';
export const GET_MOVIES = 'GET_MOVIES';

export interface MovieState {
  loading: boolean;
  movies: string[];
  page: number;
  maxPage: number | null;
  CATEGORY_FOLDER: string | null;
}

interface StartFetchingMoviesType {
  type: typeof START_FETCHING_MOVIES;
}

export interface MovieActionTypes {
  type: string;
  payload: {
    movies: string[];
    maxPage: number;
    CATEGORY_FOLDER: string;
    page: number;
  };
}

export type MovieTypes =
  | MovieState
  | StartFetchingMoviesType
  | MovieActionTypes;
