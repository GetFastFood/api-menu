const mongoose = require('../database/index'), Schema = mongoose.Schema;

const menu_schema = new Schema({
    id: Schema.Types.ObjectId, 
    name: String,
    description: String,
    Category: String,
    price: Array,
    image: Object,
    items: Array,      
    versionKey: false
});

const menu = mongoose.model("menu", menu_schema);

module.exports = menu;