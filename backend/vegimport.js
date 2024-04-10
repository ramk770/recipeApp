
require("dotenv").config();
const veg = require('./model/recipeModel');
const fs = require('fs');
const mongoose = require("mongoose");

mongoose.connect(process.env.DB).then(() => {
    console.log("Connected to the database");
});

const vegrecipedata = JSON.parse(fs.readFileSync(`${__dirname}/veg.json`));

const importdress = async () => {
    try {
        await veg.create(vegrecipedata); // Use dressdata directly, not { dressdata }
        console.log('Data stored successfully');
    } catch (e) {
        console.log(e);
    }
    process.exit();
};

const deletedress = async () => {
    try {
        await veg.deleteMany();
        console.log('Data deleted successfully');
    } catch (e) {
        console.log(e);
    }
    process.exit();
};

if (process.argv[2] === "__import") {
    importdress();
} else if (process.argv[2] === "__delete") {
    deletedress();
} else {
    console.log("Please enter 'import' or 'delete'");
}
