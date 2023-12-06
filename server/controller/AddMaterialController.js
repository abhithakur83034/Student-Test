const AddMaterialController = require("../model/addmaterialModel");



const technologies = [
  "c-language",
  "html&css",
  "bootstrap",
  "javascript",
  "mongodb",
  "express",
  "react",
  "node",
  "next",
  "angular",
  "git",
  "devops",
];

const techno = async(req,res)=>{
    try {
        res.status(200).json({technologies, status:"success"})
    } catch (error) {
        res.status(500).send(error)
    }
}

const add = async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  try {
    const addData = {
      // image: req.file.filename,
      tech: req.body.tech,
      qus: req.body.qus,
      answer: req.body.ans1,
      ans2: req.body.ans2,
      ans3: req.body.ans3,
      ans4: req.body.ans4,
      userId: req.body.userId,
    };
    const data = await AddMaterialController.insertMany(addData);
    res.status(200).json({ data, status: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const show = async (req, res) => {
  try {
    const Show = await AddMaterialController.find(req.body);
    res.status(200).json({ Show, status: "success" });
  } catch (error) {
    res.status(200).send(error);
  }
};

module.exports = {
    techno,
  add,
  show,
};
