const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const ip = "0.0.0.0";
const port = 5000;

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "O.rigin, X-Requested-With, Content-Type, Accept,x-access-token", "Authorization", "X-Requested-With"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('');
});


var filePath = "./shaghayegh.html"
var resolvedPath = path.resolve(filePath);

app.get('/mag', (req, res) => {
    return res.sendFile(resolvedPath);
});

app.all("*", (req, res) => {
    return res.status(404).json({
        success: false,
        msg: "404 Error - Not Found"
    });
});


app.listen(port, ip, () => {
    console.log(`Server is running on ${ip}:${port}`)
})