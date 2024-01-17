
// Fine.js/Controllers
const FineModel = require("../models/fine");

class FineController {
    static async getUserFines(req, res) {
        const userId = req.userId;
        try {
            const fines = await FineModel.getFinesByUserId(userId);
            res.json(fines);
        } catch (error) {
            console.error("Error fetching fines:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    
    static async createFine(req, res) {
        const { title, description, fineAmount, isActive } = req.body;

        try {
            const newFine = new Fine({title, description,  fineAmount,   isPayed});

            const savedFine = await newFine.save();
            res.status(201).json(savedFine);
        } catch (error) {
            console.error("Error creating fine:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async payFine(req, res) {
        const { id } = req.params;
        try {
            const fine = await Fine.findById(id);

            if (!fine) {
                return res.status(404).json({ message: "Fine not found" });
            }
            fine.isActive = false;

            const updatedFine = await fine.save();
            res.json(updatedFine);
        } catch (error) {
            console.error("Error updating fine:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = FineController;
