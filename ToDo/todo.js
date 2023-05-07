//  for  counting todolist item
 const countfun=function(){
    var listArr = document.getElementsByClassName("item");
    var count = document.getElementById("count");
    count.innerHTML =  listArr.length;
 }
countfun();



// for deleting item from todo list
const deleteFun=function(){
    var deletebtn = document.getElementsByClassName("deletebutton");
    var i;
    for (i = 0; i < deletebtn.length; i++) {
        deletebtn[i].onclick = function() {
            var li = this.parentElement;
            li.style.display = "none";
            // for  updating count
            var count = document.getElementById("count");
            count.innerHTML =  count.innerHTML-1;
        }
    } ; 
};
deleteFun();



// Get the button element
const addButton = document.getElementById("addbutton");

// Add a click event listener to the addButton
addButton.addEventListener('click', function() {
    
    // Get the input value
    const inputValue = document.querySelector('#todo-input').value;
   
    // if input is empty then return
    if (inputValue === '') {
        alert("You must write something!");
        return;
      } 
    
      // Create a new todo item
    const newTodoItem = document.createElement('li'); 
    newTodoItem.className =  "item";
    
    // create div for putting   check-box and text
    const div = document.createElement("DIV");
    
    //  append checkbox and todo-text into todo-item
    let input = document.createElement("input");
    input.className = "checkbox-round";
    input.type = "checkbox";
    div.appendChild(input);
    var inputValueNode= document.createTextNode(" "+inputValue);
    div.appendChild(inputValueNode);
    newTodoItem.appendChild(div);

    //   append delete button ot todo-item
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7")
    span.className = "deletebutton";
    span.appendChild(txt);
    newTodoItem.appendChild(span);
    
    // append new todo item
    var ul=document.getElementById("ul")
    ul.appendChild(newTodoItem);
    
    //  let empty input-box  
    document.getElementById("todo-input").value = "";

    deleteFun();
    //   for updating count
    var count = document.getElementById("count");
    count.innerHTML = parseInt(count.innerHTML)+1;
});


 
  