import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {type:String,required:true,unique:true},
    password:{type:String,required:true}
})

const adminModel = mongoose.models.admin || mongoose.model("admin",adminSchema);

const createDefaultAdmin = async () => {
    try {
        const adminExists = await adminModel.findOne();
        if(!adminExists) {
            const newAdmin = new adminModel({
                name:"admin",
                password:"admin123"
            })
            await newAdmin.save();
            console.log("Default admin user created with username: " + newAdmin.name,"password: " + newAdmin.password);
        }
        else {
            console.log("Default admin user username: " + adminExists.name,"password: " + adminExists.password)
        }
    } catch (error) {
        console.error("Error creating default admin:", error);
    }
}

mongoose.connection.once("open", createDefaultAdmin);

export default adminModel;