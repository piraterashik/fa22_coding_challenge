const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* CREATE 'taskSchema' */
var taskSchema = new Schema({
    title: { type: String, required: true }
})


module.exports = mongoose.model("task", taskSchema);
