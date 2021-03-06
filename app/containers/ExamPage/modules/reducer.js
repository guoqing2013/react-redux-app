import { Map } from 'immutable';

import {
  QUERY_DETAIL,
  QUERY_DETAIL_SUCCESS,
  QUERY_DETAIL_ERROR,
  SUBMIT_ANSWER,
  SUBMIT_ANSWER_SUCCESS,
  SUBMIT_ANSWER_ERROR
} from './constants';


const initialState = Map({
  loading: false,
  error: false,
  detail: false,
  examResult: false
});



function reducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_DETAIL:
      return state
        .set('detail', false)
        .set('loading', true)
        .set('error', false)
    case QUERY_DETAIL_SUCCESS:
      return state
        .set('detail', action.response.content)
        .set('error', false)
        .set('loading', false)
    case QUERY_DETAIL_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
		    .set('detail', false);
    case SUBMIT_ANSWER:
      return state
        .set('loading', true)
        .set('error', false)
        .set('examResult', false)
    case SUBMIT_ANSWER_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('examResult', action.response.content)
    case SUBMIT_ANSWER_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
        .set('examResult', false)
    default:
      return state;
  }
}

export default reducer;
