const blogmodel = require('../model/blogmodel');


const blog = async(req,res)=>{
    console.log(req.body);
    console.log(req.file);

   try {
    const allData ={
        image : req.file.filename,
        tech:req.body.tech,
        blogtitle:req.body.blogstitle,
        blogbody:req.body.blogsbody,
        userId:req.body.userId,
    }
    const addblog = await blogmodel.insertMany(allData)
    res.status(200).json({addblog, status:"success"})
   } catch (error) {
    res.status(500).send(error)
   }
}



const show = async (req, res) => {
    try {
      const Show = await blogmodel.find(req.body);
      res.status(200).json({ Show, status: "success" });
    } catch (error) {
      res.status(200).send(error);
    }
  };


module.exports={
    blog,
    show
}