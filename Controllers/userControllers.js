const USER = require('../models/userModel.js');

// define controllers or Methods 

exports.home = (req, res) => {
    res.send("Hello Ji !!")
}

exports.register = async (req, res) => {
    try {
        const {name , email , password } = req.body

        if(!name || !email || !password ){
            throw new Error("All input fields are required !! ")
        }

        const userExist = USER.find({email})
        if(userExist){
            throw new Error("Another User exist with the Email Provided !!")
        }

        const user = await USER.create({
            name, 
            email, 
            password
        })

        res.status(201).json({
            userCreated : true,
            massage : "registration Successfull !!",
            user
        })
    } catch (error) {
        
    }
}

exports.login = async (req, res ) => {
    const {email , password } = req.body

    if(!email || !password){
        throw new Error("Email and Password Required !!")
    }

    const userExist = await USER.find({email})
    if(userExist){
        if(password == userExist.password){
            res.status(201).json({
                success : true ,
                massage : "User login Successfull !!",
                userExist
            })
        }else{
            res.status(400).json({
                success : false,
                massage : "Password Provided is Incorrect !! "
            })
        }
    }else{
        res.status(400).json({
            success : false,
            massage : "No user is associated this email !"
        })
    }


}