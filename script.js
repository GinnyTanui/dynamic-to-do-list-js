document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input"); 
    const taskList = document.getElementById("task-list");  
    loadTasks();

    function addTask(taskText, save = true){
        const taskText = taskInput.value.trim(); 
        if(taskText === ''){
            alert('Please enter a task');
        }else{
            const li = document.createElement('li');  
            li.textContent = taskText;
            const newButton = document.createElement('button');  
            newButton.textContent = 'Remove'; 
            newButton.classList.add = 'remove-btn'; 
            newButton.onclick = function(){ 
                removeTask(taskText);
                li.remove(); 
               
            } 
            li.appendChild(newButton); 
            taskList.appendChild(li);  
            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
            taskInput.value = '';
        } 
    } 
    addButton.addEventListener('click',addTask); 
    taskInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            addTask();
        }
    }) 
   // function to load tasks from local storgae 
   function loadTasks(){
    const storedTasks =  JSON.parse(localStorage.getItem('tasks')) || []; 
    storedTasks.forEach(taskText=> { 
        addTask(taskText, false)
        
    });
   } 
   //to remove task  
   function removeTask(){
    let tasks =  JSON.parse(localStorage.getItem('tasks')) || [];  
    const index = tasks.indexOf(taskText); 
    if(index > -1){
        tasks.splice(index, 1);
    } 
    localStorage.setItem('tasks', JSON.stringify(tasks));
   }


}) 

