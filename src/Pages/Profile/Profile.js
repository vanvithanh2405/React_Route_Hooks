import React from 'react'
import { Redirect } from 'react-router'



export default function Profile(props) {


    if (!localStorage.getItem('user')) {
        alert('Đăng nhập để vào trang !')
        return <Redirect to='/login' />
    }


    return (
        <div>
            Profile
        </div>
    )
}
