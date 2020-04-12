export interface CategoryState {
  loading: boolean;
  categories: string[] | null;
}

export const GET_CATEGORIES = 'GET_CATEGORIES';

export const START_FETCHING_CATEGORIES = 'START_FETCHING_CATEGORIES';

interface StartFetchingCategoryAction {
  type: typeof START_FETCHING_CATEGORIES;
}

export interface CategoryActionTypes {
  type: string;
  payload: string[];
}

export type CategoryTypes = CategoryActionTypes | StartFetchingCategoryAction;
