function solve() {

    const taskName = document.querySelector('#task');
    const taskDesc = document.querySelector('#description');
    const taskDate = document.querySelector('#date');
    const form = document.querySelector('form');
    const [taskSect, openSect, inProgressSect, completeSect] = document.querySelectorAll('section');

    form.addEventListener('submit', submitTask);

    function submitTask(event) {
        event.preventDefault();

        if (!taskName.value || !taskDesc.value || !taskDate.value) return;

        let newTask = document.createElement('article');

        let name = document.createElement('h3');
        name.textContent = taskName.value;
        newTask.appendChild(name);

        let desc = document.createElement('p');
        desc.textContent = `Description: ${taskDesc.value}`;
        newTask.appendChild(desc);

        let date = document.createElement('p');
        date.textContent = `Due Date: ${taskDate.value}`;
        newTask.appendChild(date);

        let buttons = document.createElement('div');
        buttons.classList.add('flex');

        let startBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        startBtn.classList.add('green');
        startBtn.addEventListener('click', moveToInProgress);
        buttons.appendChild(startBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('red');
        deleteBtn.addEventListener('click', deleteTask);
        buttons.appendChild(deleteBtn);

        newTask.appendChild(buttons);

        openSect.children[1].appendChild(newTask);

        taskName.value = '';
        taskDesc.value = '';
        taskDate.value = '';
    }

    function moveToInProgress(event) {
        const article = event.target.parentElement.parentElement;
        const [leftBtn, rightBtn] = article.querySelectorAll('button');

        inProgressSect.children[1].appendChild(article);

        leftBtn.textContent = "Delete";
        leftBtn.classList.remove('green');
        leftBtn.classList.add('red');
        leftBtn.addEventListener('click', deleteTask);

        rightBtn.textContent = 'Finish';
        rightBtn.classList.remove('red');
        rightBtn.classList.add('orange');
        rightBtn.addEventListener('click', moveToComplete);
    }

    function moveToComplete(event) {
        const article = event.target.parentElement.parentElement;

        completeSect.children[1].appendChild(article);

        article.removeChild(article.querySelector('div'));
    }

    function deleteTask(event) {
        const article = event.target.parentElement.parentElement;
        article.remove();
    }
}