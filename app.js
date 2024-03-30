

let listContainer = document.querySelector('.list_container');
listContainer.style.display = 'none';

let input = document.querySelector('.text_box');
let add = document.querySelector('#button');

add.addEventListener('click', addTask);
input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        // event.preventDefault();
        addTask();
    }
});

let taskHeader = document.createElement('p');
taskHeader.setAttribute('class', 'list_header');
taskHeader.innerText = 'Tasks';
listContainer.appendChild(taskHeader);

function addTask() {
    if(input.value != '') {
        let listItem = document.createElement('li');
        listItem.setAttribute('class', 'list_item');
        
        listItem.innerHTML = `
            <p class="list_task">${input.value}</p>
            
            <div class="icons_container">
                <i class="fa-regular fa-square-check check"></i> 
                <i class="fa-regular fa-trash-can del"></i>
            </div>`;
        
        let ul = document.createElement('ul');
        ul.setAttribute('class', 'tasks_list');
        ul.appendChild(listItem);
    
        listContainer.appendChild(ul);
        listContainer.style.display = 'flex';
    
        input.value = '';
    
        listItem.querySelector('.check').addEventListener('click', () => {
            let listTask = listItem.querySelector('.list_task');
            listTask.style.textDecoration === 'line-through' ? listTask.style.textDecoration = 'none' : listTask.style.textDecoration = 'line-through';
        });
    
        listItem.querySelector('.del').addEventListener('click', () => ul.remove());
        
        // if no tasks -> set listContainer display to none
    }
}