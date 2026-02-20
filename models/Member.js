// models/Member.js
const mongoose = require("../connection");

// Member Schema
const memberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    membershipType: { type: String, required: true },
    expiryDate: { type: Date, required: true }
});

// Export Member model
module.exports = mongoose.model("Member", memberSchema);