import React from 'react'

export default function Login(props) {
    return (
        <div className="container">
            Login

            <div className="form-group">
                <p>Username</p>
                <input />
            </div>
            <div className="form-group">
                <p>Password</p>
                <input />
            </div>
            <div className="form-group">
                <button onClick={() => {
                    // ví dụ login thành công => chuyển hướng
                    props.history.push('/profile');

                    // props.history.replace('/profile');
                }}>Login</button>
            </div>

        </div>
    )
}
