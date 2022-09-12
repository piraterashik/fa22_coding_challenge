const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* CREATE 'taskSchema' */

module.exports = mongoose.model("task", taskSchema);
