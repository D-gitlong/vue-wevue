import {
	SET_CHATS_LIST
} from './mutation-types.js'

export default {
	[SET_CHATS_LIST](state, list ){
		state.chatsLists = list;
	}
}