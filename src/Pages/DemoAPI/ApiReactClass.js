import React, { Component } from 'react'
import axios from 'axios'
export default class ApiReactClass extends Component {

    state = {
        arrPhim : []
    }

    renderPhim = () => {
        return this.state.arrPhim.map((phim,index)=>{
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

    getApi = () => {
        let promise = axios({
            url:'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method:'GET'
        });

        // Xử lý thành công
        promise.then((result)=>{
            console.log('result',result.data)
            // Sau khi lấy dữ liệu từ api trả về => đưa vào state thông qua hàm setState
            this.setState({
                arrPhim: result.data.content
            })
            
        });

        // Xử lí thất bại
        promise.catch((error)=>{
            console.log('error',error.response?.data)
        })
    }

    render() {
        return (
            <div className="container">
                <button className="btn btn-success" onClick={() => {
                    this.getApi()
                }}>Get Api phim</button>
                <h3>Danh sách phim</h3>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getApi()
    }
}
