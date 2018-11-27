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
const UPDATE_BALANCE = 'UPDATE_BALANCE';

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

const buyStocks = stocks => ({ type: BUY_STOCKS, stocks });

const buyFaild = message => ({ type: BUY_FAILD, message });

const updateBalance = balance => ({ type: UPDATE_BALANCE, balance });

/**
 * THUNK CREATORS
 */
export const createBuyStocks = (ticker, quantity) => async dispatch => {
  let res;
  try {
    res = await axios.post(`/api/user/buy/${ticker}/${quantity}`);
  } catch (err) {
    return dispatch(buyFaild({ error: err }));
  }
  try {
    return Promise.all([
      dispatch(fetchPositions()),
      dispatch(fetchTransactions()),
      dispatch(updateBalance(res.data.balance)),
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
    await axios.post('/auth/logout');
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
    case UPDATE_BALANCE:
      return { ...state, balance: action.balance };
    default:
      return state;
  }
}
