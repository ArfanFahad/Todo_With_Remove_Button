


/* 2. Use javascript to add a new list item (li) to
an unordered list (ul) */

/* 
So, the steps are here in details, 
a) catch the input not value
b) catch the unordered list
c) catch button and add event to it and then inside that
d) Now, catch the value in a variable
e) make a condition to check whether the input field is empty or not
if the input is empty then it remain empty if not then
f) create an li item
g) then give a name to that li item
h) create a remove button
i) give a name to the remove button
j) add a listener to it and make a remove with it, the whole li will be removed 
k) add remove button to the list
l) add list to the ul
m) make the input empty after adding an element

*/

const taskInput = document.getElementById("todoInput");
const taskList = document.getElementById("taskList");


document.getElementById("addTask").addEventListener("click", function() {
  const task = taskInput.value; 
  if(task.trim()) {
    const li = document.createElement("li");
    li.textContent = task;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click",function(){li.remove()});

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = "";
  }
})