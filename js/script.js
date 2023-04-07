{
    let tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];        
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
        
        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

const renderTasks = () => {       
     let htmlString = "";

for (const task of tasks) {
    htmlString += `
 <li class="task__item">
    <button class="form__buttonDone form__buttonDone--click js-done">
    ${task.done ? "✔" : ""}
    </button>
    <span class="form__text${ task.done ? "task__decoration" : ""}">
    ${task.content} 
    </span>
    <button class="js-remove form__buttonRemove">
    🗑
    </button>
 </li>
        
`;
}

document.querySelector(".js-tasks").innerHTML = htmlString;
bindEvents();

};

const renderButtons = () => {}; /będzie renderować dwa przyciski, zróļ tutaj html-a tak jak w renderTasks/

const bindButtonsEvents = () => {}; /dodaj addEventListener do przycisków ,tutaj będzie potrzebne jakiś if/
    const render = () => {
   renderTasks();
   renderButtons();
   bindButtonsEvents ();

    };



    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskInput = document.querySelector(".js-newTask");
        const newTaskContent = newTaskInput.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskInput.value = "";
        };

        newTaskInput.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}