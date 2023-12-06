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
    console.log(req.body);
  
    try {
      const currentDate = getCurrentDate();
  
      const addData = req.body.map(item => ({
        ansBy: item.ansBy,
        tech: item.tech,
        qus: item.qus,
        answer: item.answer,
        ans2: item.ans2,
        ans3: item.ans3,
        ans4: item.ans4,
        userId: item.userId,
        date: currentDate, 
      }));
  
      const data = await RecordModel.insertMany(addData);
      res.status(200).json({ data, status: "success" });
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  const show = async (req, res) => {
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