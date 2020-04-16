import {
  GET_MOVIES,
  START_FETCHING_MOVIES,
  MovieState,
  MovieActionTypes
} from './types';

const INITIAL_STATE: MovieState = {
  loading: false,
  movies: [],
  page: 1,
  maxPage: null,
  CATEGORY_FOLDER: null
};

const movieReducer = (state = INITIAL_STATE, action: MovieActionTypes) => {
  switch (action.type) {
    case START_FETCHING_MOVIES:
      return { ...state, loading: true };
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload.movies,
        page: action.payload.page,
        maxPage: action.payload.maxPage,
        CATEGORY_FOLDER: action.payload.CATEGORY_FOLDER,
        loading: false
      };
    default:
      return state;
  }
};

export { movieReducer };
export default movieReducer;
