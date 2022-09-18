console.log("Its a APP for Take Notes");
showNotes();

let addBtn = document.getElementById('addBtn');

// event listener on Add Button
addBtn.addEventListener('click', function () {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];    // its a blank array
    } else {
        notesObj = JSON.parse(notes); 
    }

    notesObj.push(addTxt.value); //push value which we type in textarea for create "notes"
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = ""; 

    showNotes();
});

// Add notes after creating
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="note-card my-2 mx-2 card" style="width: 18rem;">
            <div  class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
            </div>`;
    });
    let notesElem = document.getElementById("notes");
    if(notesObj != 0){
        notesElem.innerHTML = html;
    } else{
        notesElem.innerHTML = "nothing to show here! Use Add notes button to add notes";
    }
}

// delete notes on delete button
function deleteNote(index){

    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// Search functionality on input in navbar 
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener('input', function(){

    let inputVal = searchTxt.value.toLowerCase();
    let noteCard = document.getElementsByClassName('note-card');

    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;

        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })
});
