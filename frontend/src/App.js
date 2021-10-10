//import './App.css';


import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


import Login from './components/user/Login';
import Register from './components/user/Register';


import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';

//adminge ewa
import UsersList from './components/admin/UsersList';
import UpdateUser from './components/admin/UpdateUser';

import ProtectedRoute from './components/route/ProtectedRoute';
import{ loadUser, updatePassword } from './actions/userActions'
import store from './store'


//import { Router } from 'express';

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    
    //header footer and the others component implement in here
    <Router>
      <div className="App">
        <Header/>

          {/*<div className ="container2">*/}
            <Route path = "/login" component = {Login}/>
            <Route path = "/register" component = {Register}/>
            <Route path = "/password/forgot" component = {ForgotPassword} exact/>
            <Route path = "/password/reset/:token" component = {NewPassword} exact/>
          
            <ProtectedRoute path = "/me" component = {Profile} exact />
            <ProtectedRoute path = "/me/update" component = {UpdateProfile} exact  />
            <ProtectedRoute path = "/password/update" component = {UpdatePassword} exact  />


            <Route path = "/admin/users" component = {UsersList} exact  />
            <Route path = "/admin/user/:id" component = {UpdateUser} exact  />
          </div>

       <Footer/>
      {/*</div>*/}
      
    </Router>
  );
}

export default App;



