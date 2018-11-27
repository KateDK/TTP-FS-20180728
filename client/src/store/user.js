import axios from 'axios';
import history from '../history';
import { fetchPositions } from './positions';
import { fetchTransactions } from './transactions';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';
const BUY_STOCKS = 'BUY_STOCKS';
const BUY_FAILD = 'BUY_FAILD';
const BUY_SUCCESS = 'BUY_SUCCESS';

/**
 * INITIAL STATE
 */
const defaultUser = {
  buyError: null,
};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

const buyStocks = stocks => ({ type: BUY_STOCKS, stocks });

const buyFaild = message => ({ type: BUY_FAILD, message });

const buySuccess = balance => ({ type: BUY_SUCCESS, balance });

/**
 * THUNK CREATORS
 */
export const createBuyStocks = (ticker, quantity) => async dispatch => {
  let res;
  try {
    res = await axios.post(`/api/user/buy/${ticker}/${quantity}`);
    // if (res.status === 400) {
    //   return dispatch(buyFaild(res.data));
    // }
  } catch (err) {
    return dispatch(buyFaild(err.response.data));
  }
  try {
    return Promise.all([
      dispatch(fetchPositions()),
      dispatch(fetchTransactions()),
      dispatch(buySuccess(res.data.balance)),
    ]);
  } catch (err) {
    console.log(err);
  }
};

export const auth = (email, password, method) => async dispatch => {
  let res;
  try {
    res = await axios.post(`/api/auth/${method}`, { email, password });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    return dispatch(getUser(res.data));
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};
export const loadInitialData = () => async dispatch => {
  try {
    const user = await axios.get('/api/auth/me');
    return dispatch(getUser(user.data));
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.post('/api/auth/logout');
    history.push('/login');
    return dispatch(removeUser());
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case BUY_SUCCESS:
      return { ...state, balance: action.balance, buyError: null };
    case BUY_FAILD:
      return { ...state, buyError: action.message };
    default:
      return state;
  }
}
