import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { LayDanhSachPhimAction } from '../../redux/action/QuanLyPhimAction'
class ApiReactClass extends Component {

    state = {
        arrPhim : []
    }

    renderPhim = () => {
        return this.props.arrPhim.arrPhim.map((phim,index)=>{
            return <div className="col-4 mt-2" key={index}>
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
        const action = LayDanhSachPhimAction();
        this.props.dispatch(action)
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


const mapStateToProps = (state) => ({
    arrPhim: state.QuanLyPhimReducer
})

export default connect(mapStateToProps)(ApiReactClass)
