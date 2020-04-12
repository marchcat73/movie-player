import {
  GET_CATEGORIES,
  START_FETCHING_CATEGORIES,
  CategoryState,
  CategoryActionTypes
} from './types';

const initialState: CategoryState = {
  loading: true,
  categories: null
};

const categoryReducer = (state = initialState, action: CategoryActionTypes) => {
  switch (action.type) {
    case START_FETCHING_CATEGORIES:
      return { ...state, loading: true };
    case GET_CATEGORIES:
      return { ...state, loading: false, categories: action.payload };
    default:
      return state;
  }
};

export { categoryReducer };
export default categoryReducer;
