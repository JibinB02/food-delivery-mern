import adminModel from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import 'dotenv/config'


const loginAdmin = async(req,res) => {
    const {name,password} = req.body;
    try {
        const admin = await adminModel.findOne({name});
        
        if(!admin) {
            return res.json({success:false,message:"Admin not found"})
        }

        if(password != admin.password) {
            return res.json({success:false,message:"Password mismatch"})
        }

        const token = createToken(admin._id);
        res.json({success:true,token:token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Admin login failed"})
    }
}


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

export {loginAdmin}