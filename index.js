const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connection Succeeded");
    })
    .catch((err) => { console.log(err) });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/newDB');
}

const userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Age: Number
});

const User = mongoose.model("User", userSchema);
// const Student = mongoose.model("Student", userSchema);

// const user1 = new User({
//     Name: "Aman",
//     Email: "9330nama@gmail.com",
//     Age: 21
// });
// user1.save();

// const user2 = new User({
//     Name: "Dream Girl",
//     Email: "DreamGirl@gmail.com",
//     Age: 20
// });
// user2.save();

// User.insertMany([
//     { Name: "Abcd", Email: "Abcd@gmail.com", Age: 25 },
//     { Name: "Efgh", Email: "Efgh@gmail.com", Age: 27 },
//     { Name: "Ijkl", Email: "Ijkl@gmail.com", Age: 29 },
//     { Name: "Mnop", Email: "Mnop@gmail.com", Age: 31 },
//     { Name: "Qrst", Email: "Qrst@gm40l.com", Age: 40 },
//     { Name: "Uvwx", Email: "Uvwx@gm40l.com", Age: 50 },
//     { Name: "Yz", Email: "Yz@gm40l.com", Age: 55 }
// ]).then((res) => {
//     console.log(res);
// });

// User.deleteOne({ Name: "Abcd" })
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) });

// User.deleteMany({ Age: 40 })
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) });

// User.findByIdAndDelete("65998a4593e8f72b23863231")
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) });

User.findOneAndDelete({ _id: "65998a4593e8f72b23863230" })
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) });

// User.findOneAndUpdate({ Name: "Efgh" }, { Age: 44 }, { new: true })
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) });

// User.updateOne({ Name: "Abcd" }, { Email: "updateOne@gmail.com" })
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) });

// User.updateMany({ Age: { $gt: 45 } }, { Email: "updateMany@gmail.com", Age: 40 })
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) });

// User.findOne({ Age: { $gt: 40 } })
//     .then((res) => {
//         console.log("Age>40");
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })

// User.findById("65994091e33530845a1995c1")
//     .then((res) => {
//         console.log("Finding by ID");
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })