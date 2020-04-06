
let tasks=[]

function addTask(){

    event.preventDefault();
    var newTask= document.getElementById("nextTask").value
    
    if(newTask!="")
    {   
        tasks.push(newTask);
        printTasks();
    }
}

function removeTask(i){
    event.preventDefault();
    i = Number(i);
    tasks.splice(i, 1);
    printTasks() 
}


function printTasks(){
        
    let i = 0;
    taskString=""
    for(i=0; i<tasks.length; i++){
        taskString = taskString + `<tr><td><h4>${i+1}.</h4></td><td class='task'><h4>${tasks[i]}</h4></td><td><button class='removeButton' onclick='removeTask(${i})'>-</button></td></tr>`
    }
    document.getElementById("list").innerHTML= taskString;
    document.getElementById("nextTask").value = ''
   
}


