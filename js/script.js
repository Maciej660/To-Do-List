{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
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


    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="task__item" ${task.done ? " style=\"text-decoration: line-through\"" : ""}>
            <button class="js-done form__buttonDone form__buttonDone--click">✔</button>
            <span class="form__text ${task.done ? " task__decoration " : ""}">${task.content} </span>
            <button class="js-remove form__buttonRemove">🗑</button>
                </li>
                `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
        bindEvents();
    };



    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}

