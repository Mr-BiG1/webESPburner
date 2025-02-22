const express = require('express');
const expressLayout = require('express-ejs-layouts');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require("path");
// loading the env variables
dotenv.config();
const port = process.env.PORT || 9090;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.use(expressLayout);
app.set("view engine", "ejs");
app.set("layout", "./layouts/main");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// setting up the routes 
app.use("/", require("./server/routes/espRoutes"));

// setting the listener 
// const listener = async()=>{
//     try {
//         await connectDB();
//         await sequelize.sync();
//         console.log("Database synchronized");
//         app.listen(port, () => {
//             console.log(`server is running on http://localhost:${port}`);
//         })
//     } catch (error) {
//         console.log(`server failed to start error:${error}`);
//     }
// }    

// listener();
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})