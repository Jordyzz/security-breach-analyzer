import { BreachesState, StoreAction } from './redux.interface';

export const loadBreaches = (payload): StoreAction => ({
  type: 'favorites/INIT',
  payload
});

const initialState: BreachesState = {
  offset: 0,
  items: [],
  hasNext: true
};

export default function breachesReducer(state: BreachesState = initialState, action: StoreAction) {
  switch (action.type) {
    case 'favorites/INIT':
      return {
        items: [...state.items, ...action.payload.items],
        offset: action.payload.offset,
        hasNext: action.payload.hasNext
      };
    default:
      return state;
  }
}
