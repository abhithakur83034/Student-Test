const RecordModel = require('../model/record');


const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };
  
  const add = async (req, res) => {
    console.log("MediaRecorder",req.body);
  
    try {
      const currentDate = getCurrentDate();
  
      const addData = req.body.map(item => ({
        ansBy: item.ansBy,
        tech: req.body.tech,
      qus: req.body.qus,
      answers: req.body.answers,
      correctAns: req.body.correctans,
      userId: req.body.userId,
        date: currentDate, 
      }));
  
      const data = await RecordModel.insertMany(addData);
      res.status(200).json({ data, status: "success" });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  const show = async (req, res) => {
    console.log("MediaRecordefsghdsfghghgfr",req.body);

    try {
      const Show = await RecordModel.find(req.body);
      res.status(200).json({ Show, status: "success" });
    } catch (error) {
      res.status(200).send(error);
    }
  };






  module.exports={
    add,
    show
  }