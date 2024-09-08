document.addEventListener("DOMContentLoaded", function () {
    const TaskInput=document.getElementById("TaskInput")
    const addtask=document.getElementById("addtask")
    const Tasklist=document.getElementById("Tasklist")


    addtask.addEventListener("click",function () {
        const tasktext=TaskInput.Value;
        if (tasktext !== "") {
            const taskitem=document.createElement("li")
            taskitem.innerHTML=
            `<span>${tasktext}</span>
            <button class="delete">Delete</button>`;
            Tasklist.appendChild(taskitem)
            TaskInput.value=""
            
            const deletebutton =taskitem.querySelector(".delete")
            deletebutton.addEventListener("click",function () {
                taskitem.remove();
                
            })
        }
        
    })

    
})