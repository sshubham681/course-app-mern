const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({});

const PurchaseModel = mongoose.model("purchase", PurchaseSchema);

module.exports = PurchaseModel;
