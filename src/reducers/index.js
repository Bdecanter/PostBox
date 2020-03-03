import { combineReducers } from 'redux'
import ReducerPosts from './reducers-posts'
import ReducerActivePost from './reducer-active-post'
import {reducer as ReducerForm} from 'redux-form'

const rootReducer = combineReducers({
  // name: nomDuReducer
  posts: ReducerPosts,
  activePost: ReducerActivePost,
  form: ReducerForm
});

export default rootReducer;
