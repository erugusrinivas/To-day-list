var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);

}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } 
  else {
    document.getElementById("myUL").appendChild(li);
  }
  if(inputValue<'3'){
    alert('you must writen a valid input text')
  }
  else{
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// Function to create a new to-do item
function createNewTodo(todoText) {
  let li = document.createElement('li');
  li.textContent = todoText;
  return li;
}

// Function to add a new to-do item to the list
function addTodo(todoText) {
  let ul = document.getElementById('todoList');
  let li = createNewTodo(todoText);
  ul.appendChild(li);
}

// Function to display the updated date every day
function displayDate() {
  let todaysDate = document.getElementById('todaysDate');
  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  // let day=currentDay.getDay();

  todaysDate.textContent = `Today's Date: ${date}/${month}/${year}`;
}
 displayDate();
// Add event listener to a button or any other UI element to call the addTodo function
// Example:
// document.getElementById('addButton').addEventListener('click', () => {
//     addTodo('Example To-Do');
// });

// Display the updated date every day

// displayDate();