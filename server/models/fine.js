const Fine = require("../db/schemas/fine");

class FineModel {
    static getFinesByUserId(userId) {
        return Fine.find({user: userId});
    }

    static createFine() {

    }

    static payFine() {
        
    }
}

async function test() {
    await require("../db/dbConnect").dbConnect();

    const fines = await FineModel.getFinesByUserId("65a657bbe0e059a24c54c031");
    console.log(fines)
}
// test();

module.exports = FineModel;