import {ACTION_TYPES_POSTS} from '../actions/action-types'

export default function reducerPosts(state = [], action) {
    switch(action.type) {
        case ACTION_TYPES_POSTS.READ_ALL :
            return action.payload
    }
    return state
}