import {ACTION_TYPES_POSTS} from '../actions/action-types'

export default function reducerActivePost(state = null, action) {
    switch(action.type) {
        case ACTION_TYPES_POSTS.READ :
            return action.payload

        default :
            return state
    }
}