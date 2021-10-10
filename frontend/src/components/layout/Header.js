
import React,{Fragment} from 'react'
import {  Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

import { logout } from  '../../actions/userActions'




import '../style/header.css'


const Header = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const {cartItems} = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }


    return (
        <Fragment>


            
            <div className="container">
            <Link to="/cart" style={{textDecoration:'none'}}>
                                 <div>
                                 <div className="cartdiv456">
                                <svg className="svg457896k">
                                <path className="cart456logo" d="M 37.3784 42.9994 C 38.257 42.9994 38.906 42.2856 38.906 41.4053 V 30.1134 C 38.906 29.2332 38.257 28.5193 37.3784 28.5193 C 36.4982 28.5193 35.8476 29.2332 35.8476 30.1134 V 41.4053 C 35.8476 42.2872 36.4982 42.9994 37.3784 42.9994 Z M 30.2116 42.9994 C 31.0918 42.9994 31.7408 42.2856 31.7408 41.4053 V 30.1134 C 31.7408 29.2332 31.0918 28.5193 30.2116 28.5193 S 28.6824 29.2332 28.6824 30.1134 V 41.4053 C 28.6824 42.2872 29.3313 42.9994 30.2116 42.9994 Z M 23.0481 42.9994 C 23.9267 42.9994 24.5773 42.2856 24.5773 41.4053 V 30.1134 C 24.5773 29.2332 23.9267 28.5193 23.0481 28.5193 C 22.1678 28.5193 21.5188 29.2332 21.5188 30.1134 V 41.4053 C 21.5188 42.2872 22.1661 42.9994 23.0481 42.9994 Z M 48.9649 14.1623 H 40.1007 L 35.5564 6.8474 C 34.9873 5.8606 33.9256 5.2483 32.7841 5.2483 C 32.225 5.2483 31.6726 5.3964 31.1884 5.6776 C 29.6608 6.5578 29.1366 8.518 30.0419 10.0822 L 32.6444 14.1606 H 19.3723 L 22.0014 10.0422 C 22.8817 8.5164 22.3575 6.5562 20.83 5.6759 C 20.3441 5.3947 19.7933 5.2466 19.2342 5.2466 C 18.0927 5.2466 17.0327 5.8589 16.4803 6.8157 L 11.9159 14.1623 H 4.2831 C 1.9219 14.1623 0 16.0859 0 18.4471 V 20.8932 C 0 23.0131 1.5542 25.0948 3.5809 25.4326 L 6.7941 43.8065 C 6.844 46.1261 8.746 47.9981 11.0756 47.9981 H 42.0343 C 44.3656 47.9981 46.2692 46.1261 46.3174 43.8048 L 49.514 25.4476 C 51.6156 25.173 53.248 23.0664 53.248 20.8932 V 18.4471 C 53.248 16.0859 51.3261 14.1623 48.9649 14.1623 Z M 44.2874 43.5419 L 44.2724 43.7149 C 44.2724 44.948 43.2673 45.9514 42.0343 45.9514 H 11.0756 C 9.8426 45.9514 8.8392 44.948 8.8392 43.7149 L 5.6692 25.5041 H 47.429 L 44.2874 43.5419 Z M 51.2013 20.8932 C 51.2013 22.1245 50.1979 23.4574 48.9649 23.4574 H 4.2831 C 3.0501 23.4574 2.0467 22.1262 2.0467 20.8932 V 18.4471 C 2.0467 17.2141 3.0501 16.2107 4.2831 16.2107 H 13.0541 L 18.2341 7.8724 C 18.5403 7.3432 19.2708 7.1419 19.8049 7.4514 C 20.354 7.7676 20.5437 8.4731 20.2509 8.9823 L 15.6349 16.2107 H 36.38 L 31.7874 9.0222 C 31.4729 8.4731 31.6609 7.7692 32.2084 7.4514 C 32.7459 7.1419 33.4664 7.3283 33.7975 7.9007 L 38.9626 16.2107 H 48.9649 C 50.1979 16.2107 51.2013 17.2141 51.2013 18.4471 V 20.8932 Z M 15.8829 42.9994 C 16.7615 42.9994 17.4104 42.2856 17.4104 41.4053 V 30.1134 C 17.4104 29.2332 16.7615 28.5193 15.8829 28.5193 C 15.0026 28.5193 14.3537 29.2332 14.3537 30.1134 V 41.4053 C 14.3537 42.2872 15.0026 42.9994 15.8829 42.9994 Z"/>
                                </svg>
                                <div className="cartnumber654">{cartItems.length}</div>
                                </div>
                                </div>
                                </Link>
         
                <div className="navbar">
                    <nav>
                        <ul >
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/offers">OFFERS</Link></li>
                            <img src="/images/cupcakes_(2).gif" className="logoheader"></img>
                            <li><a href="">REVIEWS</a></li>
                            <li><Link to="/me">PROFILE</Link></li>
                            
                        </ul>
                    </nav> 

                </div>
                <div className = "loginCon">

                    {user ?(
                             <div>

                               

                                <Link to="/me" type ="button" className = "spd1">
                                    <figure >
                                        <img
                                            src = {user.avatar && user.avatar.url}
                                            alt = {user && user.first_name}
                                            className ="avatar"
                                        />     
                                    </figure>
                                    <br/> 
                                    <span className = "spd">{user && user.first_name}</span>

                                    </Link>
                                    {/*
                                    {user && user.role !== 'admin' ? (
                                        <Link to = "#" className = "spd">My Order</Link>
                                    ): (
                                        <Link to = "#"  className = "spd">Admin Dashboard</Link>
                                    )}
                                    */}

                                    <div  className = "" aria-labelledby = "dropDownMenuButton">
                                        <Link to ="/login"  className = "spd" onClick = {logoutHandler}>
                                            Logout
                                        </Link>

                                    </div>
                            {/* cartButton */}


                                </div>
                            ) : !loading && <Link to="/login" className = "spd">LOGIN</Link>}
                </div>

            </div> 
            <br/><br/><br/><br/><br/>
        </Fragment>
    )
}

export default Header