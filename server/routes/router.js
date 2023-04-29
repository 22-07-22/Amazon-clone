const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const athenicate = require("../middleware/authenticate");


// get productsdata api
router.get("/getproducts",async(req,res)=>{
    try{
        const productsdata = await Products.find();
       // console.log("console the data "+productsdata);
       res.status(201).json(productsdata);
    }catch(error){
        console.log("error : "+error.message);
    }
})


// get individual data
router.get("/getproductsone/:id",async(req,res)=>{
   try{
    const {id} = req.params;
    // console.log(id);

    const individualdata = await Products.findOne({id:id})

    // console.log(individualdata + "individual data")

    res.status(201).json(individualdata);

   } catch(error){
    res.status(201).json(individualdata);
    console.log("error : "+error.message);
   }
});

//register data

router.post("/register",async(req,res)=>{
    // console.log(req.body);

    const {fname,email,mobile,password,cpassword} = req.body;
    if(!fname || !email || !mobile || !password || !cpassword){
        res.status(422).json({error:"Fill all the data"});
        console.log("Not all the data available");
    };
    try{
        const preuser = await USER.findOne({email:email});
        if(preuser){
            res.status(422).json({error:"User Already Present"})
        }else if(password != cpassword){
            res.status(422).json({error:"Password and CPassword not matching"})
        }else{
            const finalUser = new USER({
                fname,email,mobile,password,cpassword
            });

            // encrypt and decription algo
            // harsh->hyfsa->harsh

            //password hashing process

            const storedata = await finalUser.save();
            console.log(storedata);

            res.status(201).json(storedata);
        }
    }catch(error){

    }
});

//creating a login api

//login user api

router.post("/login",async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        res.status(400).json({error:"fill complete data"})
    }

    try{
        const userlogin = await USER.findOne({email:email});
        console.log(userlogin + " user value");

        if(userlogin){
            const isMatch = await bcrypt.compare(password,userlogin.password);
            console.log(isMatch+ "  pass match");
            // // token generate
            const token = await userlogin.generateAuthtokenn();
            console.log(token);

            res.cookie("Amazonweb",token,{
                expires:new Date(Date.now() + 90000000),
                // cookie expires after 15min
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({error:"invalid details"})
            }else{
                res.status(201).json(userlogin);
                // console.log(userlogin);
            }
        }else{
            res.status(400).json({error:"Invalid details"})
        }
    }catch(error){
        res.status(400).json({error:"Invalid details, Please check"})
    }
})

// adding data into cart
//calling post api

router.post("/addcart/:id",athenicate,async(req,res)=>{
    try {
        const {id} = req.params;
        const cart = await Products.findOne({id:id});
        console.log(cart+ " cart value")


        const UserContact = await USER.findOne({_id:req.userID});
        console.log(UserContact);

        if(UserContact){
            const cartData = await UserContact.addcartdata(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        }else{
            res.status(401).json({error:"invalid user"});
        }

    } catch (error) {
        res.status(401).json({error:"invalid user"});
    }
})


// get cart details

router.get("/cartdetails",athenicate,async(req,res)=>{
    try {
        const buyuser = await USER.findOne({_id:req.userID});
        res.status(201).json(buyuser);
    } catch (error) {
        console.log("error "+ error)
    }
})

//get valid user

router.get("/validuser",athenicate,async(req,res)=>{
    try {
        const validuserone = await USER.findOne({_id:req.userID});
        res.status(201).json(validuserone);
    } catch (error) {
        console.log("error "+ error)
    }
})


//remove item from cart
// activating delete button at cart page
router.delete("/remove/:id",athenicate,async(req,res)=>{
    try {
        const {id} = req.params;

        req.rootUser.carts = req.rootUser.carts.filter((cruval)=>{
            return cruval.id != id;
        });

        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("Item Removed");
    } catch (error) {
        console.log("error "+error);
        res.status(400).json(req.rootUser);
    }
})

// for user logout
//token and cookie has to be removed - done using filter

router.get("/logout", athenicate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((cureLem) => {
            return cureLem.token !== req.token
        });

        res.clearCookie("Amazonweb", { path: "/" });
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("user logout");

    } catch (error) {
        console.log(error + " error for user logout");
    }
});

module.exports = router;