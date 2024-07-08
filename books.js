const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connection Succeeded");
    })
    .catch((err) => { console.log(err) });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        maxLength: 25
    },
    Price: {
        type: Number,
        min: 500
    }
});

const Book = mongoose.model("Book", bookSchema);

// let book3 = new Book({
//     Title: "Engineering Mathematics",
//     Author: "RD Sharm and RS Agarwal",
//     Price: 400
// });

// book3.save()
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) });

Book.findByIdAndUpdate("659ae2de2ede76cb901a1d70", { Price: 250 }, { runValidators: true })
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) });

// let book1 = new Book({
//     Title: "Concepts of Physics",
//     Author: "HC Verma",
//     Price: 1000
// });

// book1.save()
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) });

// let book2 = new Book({
//     Author: "RD Sharma",
//     Price: 800
// });

// book2.save()
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) });