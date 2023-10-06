import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/collegeDatabase")
    .then(() => { console.log("Database Connected ") })
    .catch((err) => { console.log(err); })

const useSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: Number,
    email: {
        type: String,
        require: true
    },
})

const useModel = new mongoose.model("userCollection", useSchema);

const insertDatabase = async () => {

    try {
        const createData = new useModel({
            name: "Deepti",
            age: 20,
            email: "deep@gmail.com"
        })
        const result = await createData.save();
        console.log(result);

    }
    catch {
        (err) => {
            console.log("error");
        }
    }
}
insertDatabase();

const app2 = express();
app2.get("/", (req, res) => {
    res.send("<h1>Welcome to Home Page</h1>");
})

app2.listen(4000, () => {
    console.log("Server is running on port no. 4000");
})

