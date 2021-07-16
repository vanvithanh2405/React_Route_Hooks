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

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <HomeHeader />
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
            
            
            <Route exact path='/usestate' component={UseStateDemo} />
            <Route exact path='/useeffect' component={DemoUseEffect} />

            {/* Cài đặt API */}
            <Route exact path='/apiclass' component={ApiReactClass} />
            <Route exact path='/apifunction' component={ApiFunction} />

            {/* Hook Redux  */}
            <Route exact path='/demohookredux' component={DemoHookRedux}/>

            <Route exact path='/' component={Home} />
          </Switch>


        </BrowserRouter>
      </div>
    )
  }
}

