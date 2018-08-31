(() => {

    // grabbing key HTML elements
    let todoForm = null;
    let todoList = null;
    let todoSearch = null;

    // adding new task
    function addTask(text) {

        // building whole new task element
        // todo element
        const todo = document.createElement('div');
        todo.classList.add('todo-element');

        // todo bar
        const todoBar = document.createElement('div');
        todoBar.classList.add('todo-element-bar');

        // todo date
        const todoDate = document.createElement('h3');
        todoDate.classList.add('todo-element-date');
        // adding date
        const date = new Date();
        const dateText = date.getDate() + '-' + (date.getMonth() + 1) + '-' +
            date.getFullYear() + ' godz. ' + date.getHours() + ':' + date.getMinutes();
        todoDate.innerText = dateText;

        // todo delete button
        const todoButton = document.createElement('button');
        todoButton.classList.add('todo-element-delete');
        todoButton.innerHTML = '<i class="fas fa-times-circle"></i>';

        // putting date and button into todoBar
        todoBar.appendChild(todoDate);
        todoBar.appendChild(todoButton);

        // text area
        const todoText = document.createElement('div');
        todoText.classList.add('todo-element-text');
        todoText.innerText = text;

        // placing all parts inside todo element
        todo.appendChild(todoBar);
        todo.appendChild(todoText);

        // placing task in the list
        todoList.appendChild(todo);

        console.log('Nowe zadanie zostało dodane');
    };

    document.addEventListener('DOMContentLoaded', function() {
        todoForm = document.querySelector('#todoForm');
        todoList = document.querySelector('#todoList');
        todoSearch = document.querySelector('#todoSearch');

        todoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const textarea = this.querySelector('#todo-message');
            if (textarea.value !== '') {
                addTask(textarea.value);
                textarea.value = '';
            };
        });

        todoList.addEventListener('click', function(e) {
            if (e.target.closest('.todo-element-delete') !== null) {
                e.target.closest('.todo-element').remove();
                console.log('zadanie usunięte');
            }
        });

        todoSearch.addEventListener('input', function() {
            const val = document.querySelector('input').value;
            const elems = todoList.querySelectorAll('.todo-element');
            [].forEach.call(elems, function(el) {
                const text = el.querySelector('.todo-element-text').innerText;
                if (text.indexOf(val) !== -1) {

                    el.style.setProperty('display', '');

                } else {
                    el.style.setProperty('display', 'none');
                }
            });
        });
    });

    // adding task to list

})();