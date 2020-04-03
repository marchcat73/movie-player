import { Action } from 'redux';
import { START_FETCHING_CATEGORIES, CategoryState } from './types';

const initialState: CategoryState = {
  loading: true
};

const categoryReducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case START_FETCHING_CATEGORIES:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export { categoryReducer };
export default categoryReducer;
