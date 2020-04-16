import { GET_MOVIES, START_FETCHING_MOVIES } from './types';

const { ipcRenderer } = require('electron');

export const startFetchingMovies = () => {
  return { type: START_FETCHING_MOVIES };
};

export const getMovies = (categoryId: number, page: number) => (
  dispatch: (arg0: {
    type: string;
    payload: {
      movies: string[];
      maxPage: number;
      CATEGORY_FOLDER: string;
      page: number;
    };
  }) => void
) => {
  ipcRenderer.send('movies:get', { categoryId, page });
  ipcRenderer.on(
    'movies:list',
    (_event, { movies, maxPage, CATEGORY_FOLDER }) => {
      dispatch({
        type: GET_MOVIES,
        payload: { movies, maxPage, CATEGORY_FOLDER, page }
      });
    }
  );
};
