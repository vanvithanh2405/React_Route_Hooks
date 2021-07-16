import { ADD_COMMENT } from "../action/type/AppChatType";


const stateDefault = {
    arrComment: [
        { name: 'Chim trắng mồ côi', content: 'Hello cả nhà', img: 'https://picsum.photos/id/20/50/50' },
        { name: 'Ngồi trong toilet gào thét tên em ', content: 'Tham lam !', img: 'https://picsum.photos/id/30/50/50' },
    ]
}

export const AppChatReducer = ( state=stateDefault, action ) => {

    switch(action.type){
        case ADD_COMMENT :{
            state.arrComment = [...state.arrComment,action.userComment]
            return {...state}
        }
        default: return state;
    }
}