const Schedule = require('../model/scheduleModel');


const setSchedule = async(req,res)=>{
    console.log(req.body);
    try {
        const sche = await Schedule.insertMany(req.body)
        res.status(200).json({sche, status:"success"})
    } catch (error) {
        res.status(500).send(error)
    }
}


const getSchedule = async(req,res)=>{
    try {
        const sche = await Schedule.find(req.body)
        res.status(200).json({sche, status:"success"})
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports={
    setSchedule,
    getSchedule
}