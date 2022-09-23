import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export function getTasks() {
  return axios.get(apiUrl);
}

export function addTask(task) {
  return axios.post(apiUrl + "/create", { task });
}

/* CREATE 'PUT' FUNCTIONS */

/* CREATE 'DELETE' FUNCTIONS */

function PUT(task) {
  return axios.put(apiUrl , { task });
}

function DELETE(task) {
  return axios.delete(apiUrl , { task });
}
