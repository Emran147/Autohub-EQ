
// Fine.js/Controllers
const FineModel = require("../models/fine");

class FineController {
    static async getUserFines(req, res) {
        // const userId = req.userId;
        const userId = "65a657bbe0e059a24c54c031";
        try {
            const fines = await FineModel.getFinesByUserId(userId);
            res.json(fines);
        } catch (error) {
            console.error("Error fetching fines:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    
    static async createFine(req, res) {
        // const userId = req.userId;
        const userId = "65a657bbe0e059a24c54c031";
        const { title, description, fineAmount } = req.body;
        if(!title || !description || !fineAmount || !userId) {
            return res.status(400).send("Some data is missing!");
        }

        try {

            const newFine = await FineModel.createFine(title, description,  fineAmount, userId);
            res.status(201).send(newFine);
        } catch (error) {
            console.error("Error creating fine:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    static async payFine(req, res) {
        const { id } = req.body;
        try {
            const fine = await FineModel.payFine(id);

            if (!fine) {
                return res.status(404).json({ message: "Fine not found" });
            }

            const updatedFine = await fine.save();
            res.json(updatedFine);
        } catch (error) {
            console.error("Error updating fine:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = FineController;
