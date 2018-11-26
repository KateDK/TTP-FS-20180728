import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_TRANSACTIONS = 'GET_TRANSACTIONS';

/**
 * INITIAL STATE
 */
const defaultTransactions = [
  //{
  //   id: 1,
  //   tickerSymbol: 'AAPL',
  //   numShares: 5,
  //   action: 'buy',
  //   price: 172,
  //   createdAt: '2018-11-25T21:35:10.019Z',
  //   updatedAt: '2018-11-25T21:35:10.019Z',
  //   userId: 1,
  // },
  // {
  //   id: 2,
  //   tickerSymbol: 'FB',
  //   numShares: 5,
  //   action: 'buy',
  //   price: 172,
  //   createdAt: '2018-11-25T21:35:10.019Z',
  //   updatedAt: '2018-11-25T21:35:10.019Z',
  //   userId: 1,
  // },
];

/**
 * ACTION CREATORS
 */
const getTransactions = transactions => ({
  type: GET_TRANSACTIONS,
  transactions,
});

/**
 * THUNK CREATORS
 */

export const fetchTransactions = () => async dispatch => {
  let res;
  try {
    res = await axios.get('/api/user/history');
  } catch (err) {
    console.log(err);
  }
  try {
    dispatch(getTransactions(res.data));
  } catch (err) {
    console.log(err);
  }
};
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
export default function(state = defaultTransactions, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return [...action.transactions];
    default:
      return state;
  }
}
