const input = document.querySelector("#favchap");
const button = document.getElementById('add-chapter');
const list = document.querySelector('#list');




button.addEventListener('click', function() {
    if (input.value.trim() == '') {
        alert("The input is empty, please provide a Chapter");
        input.focus();
    } else {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function() {
            li.remove();
            input.focus();
        });
        li.appendChild(deleteButton);
        list.append(li);
        input.value = '';
    }
});

