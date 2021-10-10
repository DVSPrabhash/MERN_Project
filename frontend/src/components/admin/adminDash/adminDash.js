import React,{Fragment, useState,  useEffect} from 'react'


import{ useDispatch, useSelector} from 'react-redux'
import {getFeedbacksCount,getUsersCount,getOffersCount,getProductsCount,getOdersCount } from '../../../actions/adminDashAction'
import{useAlert} from 'react-alert'


import MetaData from '../../layout/MetaData';
import Admin_nav from '../../layout/AdminNav';
import Header from "../../layout/Header";
import Loader from '../../layout/Loader'

import "react-datetime/css/react-datetime.css";
import '../../style/home.css';
import '../../style/adminFeedback.css'


const AdminDash = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, error,feedbacksCount,usersCount,offersCount,odersCount,totalAmount,productsCount  } = useSelector(state => state.count)

    useEffect(() =>{
        if(error){
            return alert.error(error);

        }
        dispatch(getFeedbacksCount(),getUsersCount(),getOffersCount(),getProductsCount(),getOdersCount());

    },[dispatch,alert, error])
    
  return (
      <Fragment>
          <MetaData title ={'Admin Dashboard'}/>
            <link
                                    rel="stylesheet"
                                    type="text/css"
                                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                                    />
                                    <link
                                    rel="stylesheet"
                                    type="text/css"
                                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                                />
                                    <link
                                    href="//db.onlinewebfonts.com/c/157c6cc36dd65b1b2adc9e7f3329c761?family=Amazon+Ember"
                                    rel="stylesheet"
                                    type="text/css"
                                   /> 
            <Fragment>
                <Header/>
                <section className="container_yo">
                    <Admin_nav/>
                </section>
  
                <section className="container55555">

                            {loading ? <Loader /> :(
                                <div class="card1012">
                                <div class="card-body">
                                  <div class="float-left">
                                    <h3>
                                      <span class="count">{feedbacksCount}</span>
                                    </h3>
                                    <p>Feedbacks</p>
                                  </div>
                                  <div class="float-right">
                                    <i class="far fa-comments"></i>
                                  </div>
                                </div>
                        
                        
                        
                                <div class="card-body">
                                  <div class="float-left">
                                    <h3>
                                      <span class="count">20000</span>
                                    </h3>
                                    <p>Total Feedbacks</p>
                                  </div>
                                  <div class="float-right">
                                    <i class="far fa-comments"></i>
                                  </div>
                                </div>
                              </div>
                            )}
                </section>
            </Fragment>

      </Fragment>
  )
}

export default AdminDash