console.log("its library js");

// Constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}

// Disply constructor 
function Display(){

}

// add Methods to display prototype 

Display.prototype.add = function(bookObj){
    console.log('Adding to Designing');
    let tableBody = document.getElementById('table-body');
    let stringUi = `
                    <tr>
                        <td>${bookObj.name}</td>
                        <td>${bookObj.author}</td>
                        <td>${bookObj.type}</td>
                    </tr> `

    tableBody.innerHTML += stringUi;
}

// Implement the clear function 
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
// Implement the Validate function 
Display.prototype.validate = function(bookObj){
    if(bookObj.name.length<2 || bookObj.author<2){
        return false
    }
    else{
        return true
    }
}

Display.prototype.show = function(type, displayMessage){
    let message = document.getElementById('message');
    message.innerHTML = `
                        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message! ${displayMessage}</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> `

    setTimeout(function(){
        message.innerHTML = '';
    }, 2000)


}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    
    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if(fiction.checked){
        type = fiction.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }

    let bookObj = new Book(bookName, author, type);
    console.log(bookObj);

    let display = new Display();

    if(display.validate(bookObj)){
        display.add(bookObj);
        display.clear();
        display.show('success', 'Your book has benn added');
    }
    else{
        display.show('danger', 'Sorry you cannnot add this book');
    }
    
   


    e.preventDefault();
    console.log("You have submitted library form");
}

