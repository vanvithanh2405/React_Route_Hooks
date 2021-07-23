import { combineReducers, createStore, applyMiddleware } from 'redux';
import { AppChatReducer } from './Reducer/AppChatReducer/AppChatReducer';
import { QuanLyPhimReducer } from './Reducer/QuanLyPhimReducer/QuanLyPhimReducer';

import reduxThunk from 'redux-thunk'
import { ModalReducer } from './Reducer/ModalReducer';

const rootReducer = combineReducers({
    AppChatReducer,
    QuanLyPhimReducer,
    ModalReducer
});


// Đối với state là object hoặc array 
// => Redux chỉ render lại khi object hoặc array được gán = object hoặc array mới immutable
/*
    Ví dụ có objectA
    objectA.thuocTinh = giá trị mới => không thay đổi (redux không biết được giá trị đó thay đổi => không render lại giao diện)

    objectA = {}  => gán = object mới 
    objectA = {...objectA, thuocTinh:'giaTriMoi'}

*/

export const store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk),
);