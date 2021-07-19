import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { LayDanhSachPhimAction } from '../../redux/action/QuanLyPhimAction';

export default function ApiFunction() {

    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    
    useEffect(() => {
        /*
            dispatch(action):
            + action 1: object {type:'ten_action', payload:data}
            + action 2: function => thực thi xong mới có kết quả để dispatch
        
        */

        // Gọi 1 hàm kết quả trả về là 1 hàm chưa gọi (callback function) closure function
        const action = LayDanhSachPhimAction('GP01');

        dispatch(action);

    }, [])

    //    const [arrPhim,setArrPhim] = useState([]);

    //     useEffect(()=>{
    //         let promise = axios({
    //             url:'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
    //             method:'GET'
    //         });

    //         // Xử lý thành công
    //         promise.then((result)=>{
    //             console.log('result',result.data)
    //             // Sau khi lấy dữ liệu từ api trả về => đưa vào state thông qua hàm setState
    //             setArrPhim(result.data.content)
    //         });

    //         // Xử lí thất bại
    //         promise.catch((errors)=>{
    //             console.log('errors',errors.response?.data)
    //         })
    //     })


    const renderPhim = () => {
        return arrPhim.map((phim, index) => {
            return <div className="col-4 mt-2">
                <div className="card">
                    <img src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="card-body bg-dark text-white">
                        <h3>{phim.tenPhim}</h3>
                        <p>{phim.moTa}</p>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="container mt-2">
            <h3>Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}
