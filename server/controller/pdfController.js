const pdfmodel = require('../model/pdfModel');


const pdf = async(req,res)=>{
    console.log(req.body);
    console.log(req.file);

   try {
    const allData ={
        pdf : req.file.filename,
        tech:req.body.tech,
        userId:req.body.userId,
    }
    const addpdf = await pdfmodel.insertMany(allData)
    res.status(200).json({addpdf, status:"success"})
   } catch (error) {
    res.status(500).send(error)
   }
}


const show = async (req, res) => {
    try {
      const Show = await pdfmodel.find(req.body);
      res.status(200).json({ Show, status: "success" });
    } catch (error) {
      res.status(200).send(error);
    }
  };


module.exports={
    pdf,
    show
}