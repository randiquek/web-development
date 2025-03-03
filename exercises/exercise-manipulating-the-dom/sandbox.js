// Get references to the buttons and the list
const changeBgBtn = document.getElementById('changeColorBtn');

const addItemBtn = document.getElementById('addItemBtn');

// Change background color function
changeBgBtn.addEventListener('click', function() {
    const background = document.querySelector('body');
    background.style.backgroundColor = "purple";
})

// Add list item function
addItemBtn.addEventListener('click', function() {
    const listItem = document.createElement('li');
    listItem.innerHTML = "This is a new list item";
    itemList.appendChild(listItem);

})