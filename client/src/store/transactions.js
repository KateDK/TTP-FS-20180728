import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_TRANSACTIONS = 'GET_TRANSACTIONS';

/**
 * INITIAL STATE
 */
const defaultPositions = [
  {
    id: 1,
    tickerSymbol: 'AAPL',
    numShares: 5,
    action: 'buy',
    price: 172,
    createdAt: '2018-11-25T21:35:10.019Z',
    updatedAt: '2018-11-25T21:35:10.019Z',
    userId: 1,
  },
  {
    id: 2,
    tickerSymbol: 'FB',
    numShares: 5,
    action: 'buy',
    price: 172,
    createdAt: '2018-11-25T21:35:10.019Z',
    updatedAt: '2018-11-25T21:35:10.019Z',
    userId: 1,
  },
];

/**
 * ACTION CREATORS
 */
const getTransactions = () => ({ type: GET_TRANSACTIONS });

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
    case GET_TRANSACTIONS:
      return action.transactions;
    default:
      return state;
  }
}
