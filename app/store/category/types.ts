export const GET_CATEGORIES = 'GET_CATEGORIES';
export const START_FETCHING_CATEGORIES = 'START_FETCHING_CATEGORIES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export interface CategoryState {
  loading: boolean;
  categories: string[] | null;
  selected_category: number | null;
}

interface StartFetchingCategoryAction {
  type: typeof START_FETCHING_CATEGORIES;
}

type CategoryPayloadTypes = string[] | number | null;

export interface CategoryActionTypes {
  type: string;
  payload: CategoryPayloadTypes;
}

export type CategoryTypes =
  | CategoryActionTypes
  | StartFetchingCategoryAction
  | CategoryState;
