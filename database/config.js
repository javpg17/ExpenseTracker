const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("database online");
    } catch (error) {
        console.log("Error initialing the variable");
        console.log(error);
    }
};

module.exports = {
    dbConnection
}