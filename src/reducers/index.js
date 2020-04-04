import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
