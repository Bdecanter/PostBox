import { combineReducers } from 'redux'
import ReducerPosts from './reducers-posts'
import ReducerActivePost from './reducer-active-post'

const rootReducer = combineReducers({
  // name: nomDuReducer
  posts: ReducerPosts,
  activePost: ReducerActivePost
});

export default rootReducer;
