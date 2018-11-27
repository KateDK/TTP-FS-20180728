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
const defaultPositions = [];

/**
 * ACTION CREATORS
 */
const getPositions = positions => ({ type: GET_POSITIONS, positions });

/**
 * THUNK CREATORS
 */

export const fetchPositions = () => async dispatch => {
  let res;
  try {
    res = await axios.get('/api/user/portfolio');
  } catch (err) {
    console.log(err);
  }
  try {
    dispatch(getPositions(res.data));
  } catch (err) {
    console.log(err);
  }
};

/**
 * REDUCER
 */
export default function(state = defaultPositions, action) {
  switch (action.type) {
    case GET_POSITIONS:
      return [...action.positions];
    default:
      return state;
  }
}
