
const Fine = require("../db/schemas/fine");

class FineModel {
    static getFinesByUserId(userId) {
        return Fine.find({user: userId});
    }

    static createFine(title, description, fineAmount, userId) {
        return Fine.create({ title, description, fineAmount, userId });
    }

    static payFine(fineId) {
        return Fine.findByIdAndUpdate(fineId, {$set: {isPayed: true}}, {new: true});
    }
}

async function test() {
    await require("../db/dbConnect").dbConnect();
    await Fine.deleteMany({});

    const fine1 = await FineModel.createFine("fine1", "because1", 100, "65a657bbe0e059a24c54c031")
    const fine2 = await FineModel.createFine("fine2", "because2", 200, "65a657bbe0e059a24c54c031")
    const fine3 = await FineModel.createFine("fine3", "because3", 300, "65a657bbe0e059a24c54c031")
    const fine4 = await FineModel.createFine("fine4", "because4", 1000, "65a657bbe0e059a24c54c031")
    const fine5 = await FineModel.createFine("fine5", "because5", 500, "65a657bbe0e059a24c54c031")

    await FineModel.payFine(fine1._id);
    await FineModel.payFine(fine5._id);

    const fines = await FineModel.getFinesByUserId("65a657bbe0e059a24c54c031");

    await require("../db/dbConnect").dbDisconnect();
}
// test();

module.exports = FineModel;

