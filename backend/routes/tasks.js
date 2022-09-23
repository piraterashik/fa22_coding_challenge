const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

/* CREATE 'PUT' REQUEST */

/* CREATE 'DELETE' REQUEST */

router.put('/task/:id', (req, res) => {
  Task.findOneAndUpdate({
    _id: req.params.id
  },
  {$set: {title: req.body.title }},
  { upsert: true},
  function(err,newTask){
    if(err){
      console.log('error occured');
    }else {
      console.log(newTask);
      res.send(newTask);
    }
  });
});

router.delete('/task/:id', (req, res) => {
  Task.findOneAndRemove({
  _id: req.params.id
},function(err,task){
  if(err){
    res.send('error deleting');
  }else {
    console.log(task);
    res.status(204);
  }
});
});

module.exports = router;
