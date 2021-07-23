import React, { useState } from 'react';
import Modal from './Modal';
import Register from '../Regsister/Regsister';
import Login from '../Login/Login'
import { useDispatch } from 'react-redux';
export default function DemoHoc(props) {
    
    const [Component,setComponent] = useState(<p>Default</p>)
    const dispatch = useDispatch();
    
    return (
        <div className="container mt-3">
            <button onClick={()=>{
                dispatch({ 
                    type: 'OPEN_MODAL',
                    Component: Register
                })
            }} className="btn btn-outline-success" data-toggle="modal" data-target="#modelId">Đăng ký</button>
            <br />        
            <br />        
            <button onClick={()=>{
                dispatch({
                    type: 'OPEN_MODAL',
                    Component: Login
                })
            }} className="btn btn-outline-danger" data-toggle="modal" data-target="#modelId">Đăng nhập</button>
            
            
            <Modal Component={Component} />        
        </div>
    )
}
