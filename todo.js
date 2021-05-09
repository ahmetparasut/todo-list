const todoInput = document.querySelector('.add-input');
const todoButton = document.querySelector('.add-button');
const todoLıst = document.querySelector('.todo-list');
const deleteItems = document.querySelector('.delete-all');
//const newTodo = document.querySelector('.todo-input');

todoButton.addEventListener('click', addTodo);
todoLıst.addEventListener('click', deleteTodo);
todoLıst.addEventListener('click', checkTodo);
todoLıst.addEventListener('click', editTodo);
deleteItems.addEventListener('click', deleteAll);


function addTodo() {
    
    
    if(todoInput.value === '') {
        todoInput.value = 'Please write something...'
        setTimeout(() => {
            todoInput.value = ''
        }, 1000)
        return;
    } else if(todoInput.value === 'Please write something...') {
        return;
    }
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('input');
    newTodo.classList.add('todo-input');
    newTodo.value = todoInput.value;
    newTodo.disabled = true;
    
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit-btn');
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.classList.add('delete-btn');

    todoDiv.append(newTodo, editButton, deleteButton);
    todoLıst.append(todoDiv);
    todoInput.value = '';

}

function deleteTodo(event) {
    const item = event.target
    if(item.classList.contains('delete-btn')) {
        const todo = item.parentNode;
        todo.remove();
    }

}
function checkTodo(event) {
    const item = event.target
    
    if(item.classList.contains('todo-input') ) {
        item.classList.toggle('completed');
        item.parentNode.classList.toggle('gray')
        
    }

    

}

function editTodo(event) {
    if(event.target.classList.contains('edit-btn')) {
        event.target.previousSibling.toggleAttribute('disabled');
        
    }
}

function deleteAll(event) {
    
    if(event.target.click) {
        todoLıst.remove();
    }
}
