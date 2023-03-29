const Products = require("./models/productsSchema");
const productsdata= require("./constant/productsdata");


const DefaultData = async()=>{
    // print the products data and also on data base
    try{

        // as we run the files many times,data saves multiple times,so we delete duplicates
        await Products.deleteMany({}, { timeout: 30000 });

        const storeData = await Products.insertMany(productsdata);
        console.log(storeData);
    }catch(error){
        console.log("error : "+error.message);
    }
};

module.exports = DefaultData;