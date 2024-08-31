const express =  require("express")
const app = express();
const cors = require('cors');
const errorMiddleWare = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload=require("express-fileupload");


// Configure CORS
app.use(cors({
    origin: 'http://localhost:5173/', // Replace with your frontend's URL
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const product = require("./routes/productRoutes");
const user = require("./routes/userRoutes");

app.use("/api/v1",product);
app.use("/api/v1",user);




app.use(errorMiddleWare);

module.exports = app ;