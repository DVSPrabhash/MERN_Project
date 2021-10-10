import React, { Fragment, useEffect } from 'react'
import './style/anuka.css'

import MetaData from './layout/MetaData'
import Offer from './offer/Offer'
import Loader from './layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert';
import { getOffers } from '../actions/offerActions'


const AllOffers = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, offers, error, offersCount } = useSelector(state => state.offers)

    useEffect(() => {
        if(error) {
            return alert.error(error)

        }
        dispatch(getOffers());

    }, [dispatch, alert, error])
    return (
        <div className="containerMenu" style={{margin:"100px"}}><Fragment></Fragment>
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={'Best Offers from us'}/>

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

                    <h1>Our Offers</h1>

                    <section id="offers">
                        <div style={{display:"flex", flexDirection:"row", justifyContent:'space-between'}}>
                            {offers && offers.map(offer => (
                                <Offer  key={offer._id} offer={offer}/>

                            ))}
                        </div>
                    </section>

                </Fragment>
            )}
        </Fragment></div>
    )
}

export default AllOffers
