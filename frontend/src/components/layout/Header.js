
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

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }


    return (
        <Fragment>
            
            <div className="container">
                <div className="navbar">
                    <nav>
                        <ul >
                            <li><a href="">HOME</a></li>
                            <li><a href="">MENU</a></li>
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


                                </div>
                            ) : !loading && <Link to="/login" className = "spd">LOGIN</Link>}
                </div>
            </div> 
        </Fragment>
    )
}

export default Header