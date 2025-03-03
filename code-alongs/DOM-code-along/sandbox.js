const changeTextBtn = document.getElementById('changeTextBtn');

changeTextBtn,addEventListener('click', function() {
    const paragraph = document.querySelector('p')
    paragraph.innerHTML = 'The text has been changed!';
});

const addElementBtn = document.getElementById('addElementBtn');

addElementBtn.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = "This is a new paragraph added dynamically!";
    document.querySelector('.container').appendChild(newParagraph);
})

const removeElementBtn = document.createElement('button');
removeElementBtn.innerHTML = 'Remove Last Element';
document.querySelector('.container').appendChild(removeElementBtn);

removeElementBtn.addEventListener('click', function() {
    const paragraphs = document.querySelectorAll('p');
    const lastParagraph = paragraphs[paragraphs.length - 1];
    lastParagraph.remove();
})