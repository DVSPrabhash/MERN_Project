import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdbreact'
import { RatingView } from 'react-simple-star-rating'

import MetaData from '../layout/MetaData';
import Admin_nav from '../layout/AdminNav';
import Header from "../layout/Header";
import Loader from '../layout/Loader'

import AdminFooter from '../layout/AdminFooter';

import "react-datetime/css/react-datetime.css";
import '../style/home.css';
import '../style/adminFeedback.css'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminFeedbacks, adminDeleteFeedback, clearErrors } from '../../actions/feedbackActions' 
import { DELETE_ADMIN_FEEDBACK_RESET } from '../../constants/feedbackConstants'


const FeedbackReport = ({history}) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, feedbacks,feedbackCount } = useSelector(state => state.feedbacks);
    const { error: deleteError, isDeleted } = useSelector(state => state.adminDelete);


    useEffect(() => {
        dispatch(getAdminFeedbacks());

        if(error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if(deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if(isDeleted) {
            alert.success('Feedback deleted successfully');
            history.push('/Admin_Feedback');
            dispatch({ type: DELETE_ADMIN_FEEDBACK_RESET })
        }

    }, [dispatch, alert, error, deleteError, isDeleted, history])

    const setFeedback = () => {
        const data = {
            columns: [
                {
                    label: 'Order ID',
                    field: 'orderid',
                    sort: 'asc'
                },
                {
                    label: 'Feedback ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Rating',
                    field: 'rating',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Description',
                    field: 'description',
                    sort: 'asc'
                },
                
            ],
            rows: []

        }
    
        
    
        
        feedbacks.forEach(feedbacks => {
            data.rows.push({
                id:feedbacks._id,
                orderid:feedbacks.orderId,
                rating: <RatingView 
                size={40}
                ratingValue={feedbacks.rating}/>,
                name: feedbacks.name,
                description: feedbacks.description,
                
            })
        })
        
        return data;
    
    
        
    }
    

    return (
        <Fragment>
            <MetaData title ={'Admin Feedbacks'}/>
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
                
                
                <section className="container553546553555">
                    <h1>All Feedbacks</h1>

                            {loading ? <Loader /> :(
                                <MDBDataTable
                                    data={setFeedback()}
                                    borderless
                                    striped
                                    hover
                                    fixed
                                    paging={false}
                                />
                            )}
                </section>
                
            </Fragment>
        </Fragment>
    )
}

export default FeedbackReport
 