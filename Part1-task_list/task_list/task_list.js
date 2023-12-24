"use strict";

$(document).ready( () => {
const tasks = [];
$("#add_task").click( () => {   
    const textbox = $("#task");
    const taskStr = textbox.val();
    if (taskStr === "") {
        alert("Please enter a task.");
        textbox.focus();
    } else {
        // split the tasks string into an array
        const taskArr = taskStr.split(",");
        
        // loop through the task array and add each task to the tasks array
        for (let task of taskArr) {
            tasks.push(task.trim());
        }

        // clear task text box and re-display tasks
        textbox.val("");
        $("#task_list").val(tasks.join("\n"));
        textbox.focus();
    }
});

$("#clear_tasks").click( () => {
    tasks.length = 0;
    $("#task_list").val("");
    $("#task").focus();
}); 

$("#task").focus();
});