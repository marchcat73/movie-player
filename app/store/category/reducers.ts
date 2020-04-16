import {
  GET_CATEGORIES,
  START_FETCHING_CATEGORIES,
  SELECT_CATEGORY,
  CategoryState,
  CategoryActionTypes
} from './types';

const initialState: CategoryState = {
  loading: true,
  categories: null,
  selected_category: null
};

const categoryReducer = (state = initialState, action: CategoryActionTypes) => {
  switch (action.type) {
    case START_FETCHING_CATEGORIES:
      return { ...state, loading: true };
    case GET_CATEGORIES:
      return { ...state, loading: false, categories: action.payload };
    case SELECT_CATEGORY:
      return { ...state, selected_category: action.payload };
    default:
      return state;
  }
};

export { categoryReducer };
export default categoryReducer;
