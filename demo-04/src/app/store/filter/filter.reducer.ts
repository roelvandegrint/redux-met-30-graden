import { FilterActionsUnion, FilterActionTypes } from './filter.actions';

export const filterReducer = (state = 'all', action: FilterActionsUnion) => {
  switch (action.type) {
    case FilterActionTypes.SET:
      return action.filter;
    default:
      return state;
  }
};
