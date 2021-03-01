let express = require("express");
let bodyParser = require("body-parser");
let user=require('./routes/user')
let app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', user.router)

app.listen(3000);
console.log("Server Listening on port 3000");
