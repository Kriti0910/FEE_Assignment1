// Get references to HTML elements
const noteTextarea = document.getElementById('note');
const saveButton = document.getElementById('save');
const clearButton = document.getElementById('clear');

// Check if there's a note in local storage and display it
if (localStorage.getItem('note')) {
    noteTextarea.value = localStorage.getItem('note');
}

// Save the note to local storage when the Save button is clicked
saveButton.addEventListener('click', function () {
    const noteText = noteTextarea.value;
    localStorage.setItem('note', noteText);
    alert('Note saved!');
});

// Clear the note from local storage when the Clear button is clicked
clearButton.addEventListener('click', function () {
    noteTextarea.value = '';
    localStorage.removeItem('note');
    alert('Note cleared!');
});
