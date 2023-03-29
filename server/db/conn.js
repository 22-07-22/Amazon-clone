const mongoose = require("mongoose");


// user id and pwd
//Vinnu and Vinnu

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>console.log("data base connected")).catch((error)=>console.log("error : "+error.message));
// mongoose.set('strictQuery', true);



/*

mongoose.connect(DB,{useNewUrlParser: true,
    useUnifiedTopology: true}).then(()=>console.log("data base connected")).catch((error)=>console.log("error : "+error.message));
*/