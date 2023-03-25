{
    const tasks = [];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li 
            class="task__item">
            <button class="form__buttonDone form__buttonDone--click js-done"> 
            ${task.done ? "✔" : ""}
            </button>
            <span class="form__text ${task.done ? " task__decoration " : ""}">${task.content} </span>
            <button class="js-remove form__buttonRemove">🗑</button>
                </li>
                `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
  
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };
    
    const onFormSubmit =  (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}

 