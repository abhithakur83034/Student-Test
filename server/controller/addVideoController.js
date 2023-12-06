const videomodel = require('../model/addvideoModel');


const video = async(req,res)=>{
    console.log(req.body);
    console.log(req.file);

   try {
    const allData ={
        video : req.file.filename,
        tech:req.body.tech,
        userId:req.body.userId,
    }
    const addvdo = await videomodel.insertMany(allData)
    res.status(200).json({addvdo, status:"success"})
   } catch (error) {
    res.status(500).send(error)
   }
}


const show = async (req, res) => {
    try {
      const Show = await videomodel.find(req.body);
      res.status(200).json({ Show, status: "success" });
    } catch (error) {
      res.status(200).send(error);
    }
  };


module.exports={
    video,
    show
}