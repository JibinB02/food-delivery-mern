import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';
import 'dotenv/config'


//login user
const loginUser = async(req,res) => {
    const {email,password} = req.body;
    try {
        
        //checking if user exists
        const user = await userModel.findOne({email})

        if(!user) {
            return res.json({success:false, message:"User not found"})
        }

        //comparing password
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) {
            return res.json({success:false, message:"Incorrect password"})
        }

        //if user is authenticated, generate token
        const token = createToken(user._id);
        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error in login process"})
    }

}

//creating jwt token for user authentication
const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser = async(req,res) => {
    const {name,password,email} = req.body;
    try {
        // checking if user is already registered
        const exists = await userModel.findOne({email});
        if(exists) {
            return res.json({success:false, message:"User already exists"})
        }

        //validating email format and strong password
        if(!validator.isEmail(email)) {
            return res.json({success:false, message:"Invalid email format"})
        }

        if(password.length<8) {
            return res.json({success:false, message:"Password should be at least 8 characters long"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //creating new user and saving to db
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true, message:"User registered successfully", token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error registering user"})
    }
}


export { loginUser, registerUser }