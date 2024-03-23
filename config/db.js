const mongoose = require('mongoose')

// connect database
const DBconnect = async () => {
    await mongoose.connect(process.env.DBpath).then((conn) => {
        console.log(`Connected to DataBase ${conn.connection.host}`);
    }).catch((err) => {
        console.log(`Cannot Connect TO DB `);
        process.exit(1);
    })
}

module.exports = DBconnect;