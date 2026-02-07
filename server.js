// server.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./connection");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Schema
const memberSchema = new mongoose.Schema({
    name: String,
    email: String,
    membershipType: String,
    expiryDate: Date
});

const Member = mongoose.model("Member", memberSchema);

// Serve HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Renew Membership (Insert or Update)
app.post("/renew", async (req, res) => {
    try {
        const { name, email, membershipType, expiryDate } = req.body;

        // Check if member already exists
        let member = await Member.findOne({ email });

        if (member) {
            // Update expiry date
            member.membershipType = membershipType;
            member.expiryDate = expiryDate;
            await member.save();
            res.send("Membership renewed successfully ✅");
        } else {
            // Create new member
            const newMember = new Member({
                name,
                email,
                membershipType,
                expiryDate
            });

            await newMember.save();
            res.send("New membership created successfully ✅");
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("Error processing request ❌");
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

