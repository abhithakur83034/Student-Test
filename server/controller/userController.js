const userModel =  require('../model/userModel');
const  path = require('path');


const userRegister = async(req,res)=>{
    try {
const email = req.body.email
const checkEmail = await userModel.findOne({email})
if(checkEmail){
 res.status(401).json({message:"Email Already registered", status:"warning"})
}else{
 const defaultImagePath = path.join(__dirname, 'uploads', 'image', 'user.png');
 const defaultImageRelativePath = path.basename(defaultImagePath);
const registerData = {
  image: defaultImageRelativePath,
  name: req.body.name,
  email: req.body.email,
  mobile: req.body.mobile,
  password: req.body.password,
  cpassword: req.body.cpassword,
  role: req.body.role,
};

const reg = await userModel.insertMany(registerData)    
res.status(200).json({reg, status:"success"})
}
    } catch (error) {
        res.status(500).send(error)
    }
}


const userLogin= async (req,res)=>{
    console.log(req.body);
const {email,password} = req.body
    try {
        const log = await userModel.findOne({email,password})
        res.status(200).json({log, status:"success"})
    } catch (error) {
        res.status(500).send(error)
    }
}




const registeredUser=async(req,res)=>{
    try {
        const reg = await userModel.find(req.body);
        res.status(200).json({reg, status:"success"})
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}


const updateUserPut = async (req, res) => {
    console.log("put req", req.body);
    console.log("file", req.file);
  
    console.log("id",req.params);
  
    try {
      const { name, email,mobile } = req.body;
      const updateFields = {name, email,mobile  };
  
      if (req.file && req.file.filename) {
        updateFields.image = req.file.filename;
      }
  
      // Corrected the parameter to req.params.id
      const putUser = await userModel.updateOne(
        { _id: req.params.id },
        { $set: updateFields }
      );
  
      res.status(200).json({ putUser, status: "updated" });
    } catch (error) {
      console.error(error);
      res.status(500).send( error);
    }
  };

module.exports = {
    userRegister,
    userLogin,
    registeredUser,
    updateUserPut
}