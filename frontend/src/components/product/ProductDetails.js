import React, { Fragment, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import '../style/anuka.css'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, clearErrors } from '../../actions/productActions'

const ProductDetails = ({ match }) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, product } = useSelector(state => state.productDetails)

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))

        if(error){
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error, match.params.id])
    
    return (
        <Fragment>

        {loading ? <Loader /> : (
            <Fragment>
                <MetaData title={product.name}/>

                <div className="row f-flex justify-content-around">
                    <div className="col-12 col-lg-5 img-fluid" id="product_image">
                        <Carousel pause='hover'>
                            {product.images && product.images.map(image =>(
                                <Carousel.Item key={image.public_id}>
                                    <img width="400px" height="auto" src={image.url} alt={product.title} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>

                    <div className="allDetails">
                        <h3>{product.name}</h3>
                        <h3>Small Price : Rs.{product.smallPrice}</h3>
                        <h3>Medium Price : Rs.{product.mediumPrice}</h3>
                        <h3>Large Price : Rs.{product.largePrice}</h3>
                        <h3>Fresh Fruit Topping Price : Rs.{product.freshFruitToppingPrice}</h3>
                        <h3>Chocolate Candies And Cashew Nut Topping Price : Rs.{product.chocolateCandiesAndCashewNutToppingPrice}</h3>
                        <h3>Moldable Fondan Topping Price : Rs.{product.moldableFondanToppingPrice}</h3>
                        <h3>Description :{product.description}</h3>
                        <h3>Menu : {product.menu}</h3>
                        {/* <h3>Created At : {product.createdAt}</h3> */}
                        <br/><br/>
                        <button className="buttonAddToCart">Add To Cart</button>
                    </div>

                
                </div>
            </Fragment>
        )}

        </Fragment>
        
    )
}

export default ProductDetails
