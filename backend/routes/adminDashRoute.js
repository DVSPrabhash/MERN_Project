const express = require('express');
const router = express.Router();

const { 
    userCount,
    feedbackCount,
    offerCount,
    orderCount,
    productCount,

    


} = require('../controllers/adminDashController');


router.route('/userCount').get(userCount);
router.route('/feedbackCount').get(feedbackCount);
router.route('/offerCount').get(offerCount);
router.route('/orderCount').get(orderCount);
router.route('/productCount').get(productCount);

module.exports = router;