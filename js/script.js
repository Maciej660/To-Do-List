{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })
        render();
    };

const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
};

const onFormSubmit = (event) =>{
    event.preventDefault();
    const newTaskTekst = document.querySelector(".js-newTask")
    const newTaskContent =newTaskTekst.value.trim();

    if (newTaskContent !== "") {
        addNewTask(newTaskContent);
        newTaskTekst.value = '';
    }
    newTaskTekst.focus();
}
}
