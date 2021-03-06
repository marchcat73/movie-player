import { GET_CATEGORIES, START_FETCHING_CATEGORIES } from './types';

const { ipcRenderer } = require('electron');

export const startFetchingCategories = () => {
  return { type: START_FETCHING_CATEGORIES };
};

export const getCategories = () => (
  dispatch: (arg0: { type: string; payload: string[] }) => void
) => {
  ipcRenderer.send('categories:get');
  ipcRenderer.on('categories:list', (_event, categories) => {
    dispatch({ type: GET_CATEGORIES, payload: categories });
  });
};
