import React, { Fragment } from 'react'
import '../../App.css'
import '../style/Pages_thiran.css'

export const Home = () => {
    return (
        <Fragment>

            {/* <sector>

            <div className="thiran_parallax1">
                <button> Inventory Management Home </button>
                <button> Register Supplier </button>
            </div>
            <div className="thiran_parallax2">
                <button> Order Management Home </button>
                <button> Place Order </button>
            </div>
            <div className="thiran_parallax3">
                <button> User Management Home </button>
                <button> Register User </button>
            </div>

            </sector> */}
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <span>
            <div class="supplier_home_container">
                <div class="supplier_home_content">
                    <p>
                    Register new suppliers or view all registered suppliers
                    </p>
                    <div class="supplier_button_body">
                        <button class="f1">
                            <button class="supplier_button-os a1">
                                <a href="#">Register</a>
                            </button>
                        </button>
                        <button class="f1">
                            <button class="supplier_button-os a1">
                                <a href="#">View All</a>
                            </button>
                        </button>
                    </div>
                </div>
                <div class="supplier_home_flap"></div>
            </div>

            <div class="suppliedItem_home_container">
                <div class="suppliedItem_home_content">
                    <p>
                    Register new suppliers or view all registered suppliers
                    </p>
                    <div class="suppliedItem_button_body">
                        <button class="f1">
                            <button class="suppliedItem_button-os a1">
                                <a href="#">Register</a>
                            </button>
                        </button>
                        <button class="f1">
                            <button class="suppliedItem_button-os a1">
                                <a href="#">View All</a>
                            </button>
                        </button>
                    </div>
                </div>
                <div class="suppliedItem_home_flap"></div>
            </div>
            </span>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
        </Fragment>
    )
}