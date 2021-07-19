import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { layChiTietPhim } from '../../redux/action/QuanLyPhimAction';

export default function Details(props) {
    
    console.log('props',props)
    
    const {chiTietPhim} = useSelector(state=>state.QuanLyPhimReducer);
    const dispatch = useDispatch()
    console.log('chiTietPhim', chiTietPhim)
    const {id} = props.match.params

    useEffect(()=>{
        // gọi api
        const action = layChiTietPhim(id);
        // gọi 1 action thunk (action 2 là function)
        dispatch(action)
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh}/>
                </div>
                <div className="col-8">
                    
                </div>
            </div>
        </div>
    )
}
