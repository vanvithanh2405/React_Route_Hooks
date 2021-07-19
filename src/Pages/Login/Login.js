import React, { useState } from 'react'

export default function Login(props) {

    const [state, setState] = useState({
        values: { taiKhoan: '', matKhau: '', email: '' },
        errors: { taiKhoan: '', matKhau: '', email: '' }
    })

    console.log('state', state)
    const handleChangeInput = (event) => {
        let { value, name } = event.target; // {name='taiKhoan',values:'Nguyễn Văn A' }

        // lâý ra 1 thuộc tính {attribute} tự đặt trên thẻ
        let typeEmail = event.target.getAttribute('typeEmail'); // => email
        // xử lý values
        let newValues = { ...state.values }; // {taiKhoan:'',matKhau:''}
        newValues[name] = value;

        // xử lý errors
        let newErrors = { ...state.errors };

        let messageError = '';
        if (newValues[name].trim() === '') {
            messageError = name + 'không được bỏ trống !';
        }

        newErrors[name] = messageError;

        if (typeEmail === 'email') {
            // check mail
            let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(newValues[name])) {
                messageError = 'Email không hợp lệ!'
            }
        }

        setState({
            values: newValues,
            errors: newErrors
        })
    }


    return (
        <div className="container">
            Login

            <div className="form-group">
                <p>Username</p>
                <input className="form-control" name="taiKhoan" value={state.values.taiKhoan} onChange={handleChangeInput} />
                <p className="text text-danger">{state.errors.taiKhoan}</p>
            </div>
            <div className="form-group">
                <p>Password</p>
                <input typeEmail='email' className="form-control" name="matKhau" value={state.values.matKhau} onChange={handleChangeInput} />
                <p className="text text-danger">{state.errors.matKhau}</p>
            </div>
            <div className="form-group">
                <p>Email</p>
                <input className="form-control" name="email" value={state.values.email} onChange={handleChangeInput} />
                <p className="text text-danger">{state.errors.email}</p>

            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-outline-success">Login</button>
            </div>

        </div>
    )
}
