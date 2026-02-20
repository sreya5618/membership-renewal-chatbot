// server.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const Member = require("./models/Member"); // Import the model
const mongoose = require("./connection");
const connection = require("./connection")
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve Frontend
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Renew Membership
app.post("/renew", async (req, res) => {
    try {
        const { name, email, membershipType, expiryDate } = req.body;

        if (new Date(expiryDate) <= new Date()) {
            return res.status(400).send("Expiry date must be in the future ❌");
        }

        let member = await Member.findOne({ email });

        if (member) {
            member.membershipType = membershipType;
            member.expiryDate = new Date(expiryDate);
            await member.save();
            return res.send("Membership renewed successfully ✅");
        } else {
            const newMember = new Member({
                name,
                email,
                membershipType,
                expiryDate: new Date(expiryDate)
            });
            await newMember.save();
            return res.send("New membership created successfully ✅");
        }

    } catch (error) {
        console.error(error);
        if (error.code === 11000) {
            res.status(400).send("Email already exists ❌");
        } else {
            res.status(500).send("Error processing request ❌");
        }
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

