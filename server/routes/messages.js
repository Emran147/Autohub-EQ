// messages.js
const { Router } = require("express");

const router = Router();



module.exports = router;

router.get("/:language", (req, res) => {
   
    res.send("List of messages");
});

router.post("/send", (req, res) => {
    
    res.send("Message created");
});