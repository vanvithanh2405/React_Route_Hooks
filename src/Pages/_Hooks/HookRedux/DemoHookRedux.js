import React, { useState } from 'react'
import { connect, useSelector,useDispatch } from 'react-redux'
import { addCommentAction } from '../../../redux/action/AppChatAction';
import { ADD_COMMENT } from '../../../redux/action/type/AppChatType';
export default function DemoHookRedux(props) {

    const [state, setState] = useState({
        name: '',
        content: '',
    });



    // tương tự mapStateToProps
    const { arrComment } = useSelector(state => state.AppChatReducer)

    const dispatch = useDispatch()

    const renderComment = () => {
        return arrComment.map((cmt, index) => {
            return <tr>
                <td width="10%" className="p-2">
                    <img src={cmt.img} alt={cmt.img} />
                </td>
                <td>
                    <h3>{cmt.name}</h3>
                    <p>{cmt.content}</p>
                </td>
            </tr>
        })
    }

    const handleChange = (event) => {
        let { value, name } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        // lấy giá từ state và gọi redux
        event.preventDefault();
        let userComment = {...state,img:'https://picsum.photos/id/50/50'};
        
        // const action = addCommentAction(userComment);
        // {type:ADD_COMMENT, userComment: userComment}
        // dispatch(action);

        dispatch(addCommentAction(userComment));
    }

    console.log(arrComment);

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3>App chat !</h3>
            <table className="table w-100">
                <tbody>
                    {renderComment()}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2" >
                            <p>Name</p>
                            <input className="form-group w-100" name="name" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <p>Content</p>
                            <input className="form-group w-100" name="content" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button className="btn btn-success">Send</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </form>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         arrComment:state.AppChatReducer.arrComment
//     }
// }

// export default connect(mapStateToProps) (DemoHookRedux)