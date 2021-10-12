const mongoose = require('mongoose')

const supplySchema = new mongoose.Schema({
    supplier_id: {
        // type: mongoose.Schema.Types.ObjectId,
        // required: [true, 'Enter supplier\'s ID'],
        // ref: 'supplier'
        type: String,
        required: [true, 'Enter supplier\'s ID'],
    },
    supply_item_id: {
        // type: mongoose.Schema.Types.ObjectId,
        // required: [true, 'Enter supplied item\'s ID'],
        // ref: 'supplied_items'
        type: String,
        required: [true, 'Enter supplied item\'s ID'],
    }
})

module.exports = mongoose.model('supply', supplySchema);