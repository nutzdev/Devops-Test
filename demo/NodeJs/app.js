import express from "express";

const app = express();
const port = 3001;
//Parsing incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, async () => {
    console.log("");
    console.log("API Listening on Port : ", port);
});

//checkStatus
app.use(async (req, res) => { res.json({ status: 200, data: `Application is Now Live` }) });
