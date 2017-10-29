import axios from 'axios'
import * as types from './mutation-types.js'

// 异步操作
export default{
	loadChatsList: function ({ commit,state }) {
    	axios.get('/static/mock/chats/chats.json').then((response) => {
        commit(types.SET_CHATS_LIST, response.data )
    	}, (err) => {
        	console.log(err)
    	})
    }
}