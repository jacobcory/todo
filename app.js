const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todos = document.querySelector('#todos');
const finishAll = document.querySelector('#finishAll');
const reset = document.querySelector('#reset');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoText = input.value;

    if (todoText) {
        const todoEl = document.createElement('li');
        todoEl.innerText = todoText;
        todos.appendChild(todoEl);

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.classList.toggle('finished')
        })

        todoEl.addEventListener('dblclick', (e) => {
            e.preventDefault();
            todoEl.remove();
        })

        input.value = "";

        finishAll.addEventListener('click', (e) => {
            todoEl.classList.add('finished');
        })

        reset.addEventListener('click', (e) => {
            todoEl.remove();
        })
    }
})

