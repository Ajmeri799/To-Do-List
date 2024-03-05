
let To_Do=[];
function display(){
    To_Do=document. getElementById("to-do");
    To_Do.innerHTML = '';
    var today = new Date();

    To_Do.forEach(function (task, index) {
    var taskItem = createTaskElement(task, index, 'to-do');
    To_Do.appendChild(taskItem);
  });

}

function addTask(){
task=document. getElementById("work");
deadline=document. getElementById("date");
 let task_test=task.value.trim();

 if (task_text === "") {
                alert("Please enter a task!");
                return;
            }

//-----------------------------------------------

            if (deadline.value !== '') {
      var taskDeadline = new Date(date.value);
      var today = new Date();

      // Set the time of today's date to 23:59:59 to include the entire day
      today.setHours(23, 59, 59, 999);

      if (taskDeadline.getTime() <= today.getTime()) {
     
      To_Do.push(newTask);
    }


}

}
