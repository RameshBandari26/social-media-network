const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


url="mongodb+srv://bloguser:PhmPaHevnGq3iNJF@cluster0.v1b2m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(url , (err)=>{
if (err)
{
    console.log(err)
}
else
{
    console.log("connected Success")
}

} )
