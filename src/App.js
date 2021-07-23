import React, { Component } from 'react'
import HomeHeader from './Components/HomeHeader/HomeHeader';
import Home from './Pages/Home/Home';

// cấu hình route
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import UseStateDemo from './Pages/_Hooks/UseStateDemo/UseStateDemo';
import DemoUseEffect from './Pages/_Hooks/UseEffectDemo/DemoUseEffect';
import ApiReactClass from './Pages/DemoAPI/ApiReactClass';
import ApiFunction from './Pages/DemoAPI/ApiFunction';
import DemoHookRedux from './Pages/_Hooks/HookRedux/DemoHookRedux';
import Details from './Pages/Details/Details';
import LoginFormik from './Pages/Login/LoginFormik';
import DemoHoc from './Pages/HOC/DemoHoc';
import Modal from './Pages/HOC/Modal';
import { HomeTemplate } from './Templates/HomeTemplate/HomeTemplate';
import { UserTemplate } from './Templates/UserTemplate/UserTemplate';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          
          <Switch>
            
            
            <HomeTemplate  path="/home" component={Home}/>
            <HomeTemplate  path='/about' component={About} />
            <HomeTemplate  path='/contact' component={Contact} />
            <UserTemplate  path='/login' component={Login} />


            <HomeTemplate exact path='/loginform' component={LoginFormik} />
            <HomeTemplate exact path='/profile' component={Profile} />


            <HomeTemplate exact path='/usestate' component={UseStateDemo} />
            <HomeTemplate exact path='/useeffect' component={DemoUseEffect} />


            <HomeTemplate exact path='/detail/:id' component={Details} />

            <HomeTemplate exact path='/demohoc' component={DemoHoc} />

            {/* Cài đặt API */}
            <HomeTemplate exact path='/apiclass' component={ApiReactClass} />
            <HomeTemplate exact path='/apifunction' component={ApiFunction} />

            {/* Hook Redux  */}
            <HomeTemplate exact path='/demohookredux' component={DemoHookRedux} />


            <Route exact path='/' component={Home} />
          </Switch>


        </BrowserRouter>
      </div>
    )
  }
}

