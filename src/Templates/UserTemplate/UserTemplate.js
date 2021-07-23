import React, { Fragment } from "react"
import { Route } from "react-router"
import { NavLink } from "react-router-dom"






export const UserTemplate = (props) => {

    return <Route exact path={props.path} render={(propsRoute)=>{
        return <div className="d-flex">
            <div style={{width:'50%',height:'50vh'}}>
                <img className="w-100" src="https://picsum.photos/2000/2000" alt="..." />
            </div>
            <div className="w-50 d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
                <div>
                <props.component {...propsRoute} />
                <NavLink to="/home">Trang chủ</NavLink>
                </div>
            </div>
        </div>
    }} />
}