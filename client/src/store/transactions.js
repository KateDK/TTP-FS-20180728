import axios from 'axios';

/**
 * ACTION TYPES
 */

const GET_TRANSACTIONS = 'GET_TRANSACTIONS';

/**
 * INITIAL STATE
 */
const defaultTransactions = [];

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
