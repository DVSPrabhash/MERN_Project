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

//ankagen start
import Menu from "./components/Menu";
import ProductDetails from './components/product/ProductDetails';
import AllOffers from './components/AllOffers'
import OfferDetails from './components/offer/OfferDetails';




//ankagen end


//adminge ewa
import UsersList from './components/admin/UsersList';
import UpdateUser from './components/admin/UpdateUser';
//ankagen start
// Admin Imports
import ProductsList from './components/admin/ProductsList'
import NewProduct from './components/admin/NewProduct'
import UpdateProduct from './components/admin/UpdateProduct'
import OffersList from './components/admin/OffersList';
import NewOffer from './components/admin/NewOffer';
import UpdateOffer from './components/admin/UpdateOffer';

//anukagen end





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

            {/* ankagen  start*/}
           
          <Route path="/" component={Menu} exact />
          <Route path="/search/:keyword" component={Menu} />
          <Route path="/product/:id" component={ProductDetails} exact />
          <Route path="/offers" component={AllOffers} exact />
          <Route path="/offer/:id" component={OfferDetails} exact />
          <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductsList} exact/>
          <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact/>
          <ProtectedRoute path="/admin/product/:id" isAdmin={true} component={UpdateProduct} exact/>
          <ProtectedRoute path="/admin/offers" isAdmin={true} component={OffersList} exact/>
          <ProtectedRoute path="/admin/offer" isAdmin={true} component={NewOffer} exact/>
          <ProtectedRoute path="/admin/offer/:id" isAdmin={true} component={UpdateOffer} exact/>
          </div>
            {/* ankagen end */}




       <Footer/>
      {/*</div>*/}
      
    </Router>
  );
}

export default App;



