// connection.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/membership", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => {
    console.error("❌ MongoDB Connection Failed");
    console.error(err);
});

module.exports = mongoose;
