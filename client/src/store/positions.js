import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_POSITIONS = 'GET_POSITIONS';
const UPDATE_POSITION = 'UPDATE_POSITION';
const REMOVE_POSITION = 'REMOVE_POSITION'; //DO WE REALLY NEED THIS??

/**
 * INITIAL STATE
 */
const defaultPositions = [
  {
    id: 1,
    tickerSymbol: 'AAPL',
    numShares: 5,
    createdAt: '2018-11-25T21:35:10.046Z',
    updatedAt: '2018-11-25T21:35:10.046Z',
    userId: 1,
    totalStockVal: 861.4499999999999,
    stockPrice: 172.29,
    trend: 'down',
  },
  {
    id: 2,
    tickerSymbol: 'FB',
    numShares: 5,
    createdAt: '2018-11-25T21:35:10.046Z',
    updatedAt: '2018-11-25T21:35:10.046Z',
    userId: 1,
    totalStockVal: 861.4499999999999,
    stockPrice: 172.29,
    trend: 'down',
  },
];

/**
 * ACTION CREATORS
 */
const getPositions = () => ({ type: GET_POSITIONS });
const updatePosition = position => ({ type: UPDATE_POSITION });

/**
 * THUNK CREATORS
 */
// export const getAllPositions = (email, password, method) => async dispatch => {
//   let res;
//   try {
//     res = await axios.post(`/api/auth/${method}`, { email, password });
//   } catch (authError) {
//     return dispatch(getPositions({ error: authError }));
//   }

//   try {
//     dispatch(getPositions(res.data));
//   } catch (dispatchOrHistoryErr) {
//     console.error(dispatchOrHistoryErr);
//   }
// };
/**
 * REDUCER
 */
export default function(state = defaultPositions, action) {
  switch (action.type) {
    case GET_POSITIONS:
      return action.position;
    default:
      return state;
  }
}
