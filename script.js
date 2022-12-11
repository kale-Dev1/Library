const container = document.querySelector(".main");
const table = document.querySelector(".tbody");
const tbrow = document.createElement('tr')
const tbroh = document.createElement('th')
let addbutton = document.querySelector("btn-primary")
let tableBody = document.querySelector(".tbody")
let tableRead = document.querySelector(".reado")
const form = document.querySelector('form');
const check = document.querySelector('.fa-check')
const btn2 = document.querySelector('.deletebtn2');
const readButton = document.querySelector('.readOrNot')

function addToLibrary(e){
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector(".author").value;
    const pages = document.querySelector(".pages").value;
    const read = document.querySelector(".read").value;
    const check = document.querySelector("#exampleCheck1")
    form.reset();

    function checkForm(form){
        if(form.check.checked){
            alert("So you read this book")
        }
    }
    tableBody.innerHTML += `
    <tr>
    <th scope="row">${title}</th>
    <td>${author}</td>
    <td>${pages}</td>
    <td class="reado"><button class="readOrNot" type="button" aria-label='delete item' ><i class="fa fa-check" aria-hidden="true"></i></button></td>
    <td><button class = "deletebtn"> <i class="fa fa-trash" aria-hidden="true"></i></button></td>
    
    `
}

// Deletet row when delete button is pressed
function deleteRow(e){
    if(!e.target.classList.contains("deletebtn")){
        return;
    }
    const btn = e.target;
    btn.closest("tr").remove();

}
form.addEventListener('submit', addToLibrary)
table.addEventListener('click', deleteRow)
table.addEventListener('click', bookRead)

// Check if book is read or not
function bookRead(e){

    // if(!e.target.classList.contains("fa-check")){
    //     return;
    // }
    const readbtn = e.target;
    if(readbtn.classList.contains('fa-check')){
        readbtn.classList.replace('fa-check','fa-times');
        return;
    }else{
        readbtn.classList.replace('fa-times','fa-check');
        
    }
}
   
    
    

    
 
   


// (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()









let myLibrary =[];

function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function(){
        console.log(title,author,pages)
    }

}

function addToLibray(book){
    myLibrary.push(book);
}

addToLibray.prototype = Object.create(Book.prototype);

const book1 = new Book('JJ','Rowling', 96);
book1.info();
addToLibray(book1)


tbroh.classList.add("row")


table.append(tbrow);





console.log(myLibrary)