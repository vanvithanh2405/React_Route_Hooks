import { ADD_COMMENT } from "./type/AppChatType"

//action creator

export const addCommentAction = (userComment) => {
    return {
        type:ADD_COMMENT,
        userComment: userComment
    }
}