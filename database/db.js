const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(
            "mongodb+srv://root:admin@to-do-listsapatin.vyrtgka.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => console.log(`MongoDB Connected: ${mongoose.connection.host}`))
        .catch ((err) => console.log(err) );
};

module.exports = connectDB;
