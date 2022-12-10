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
    <td>read</td>
    <td><button class = "deletebtn"> Delete</button></td>
    
    `
}

function deleteRow(e){
    if(!e.target.classList.contains("deletebtn")){
        return;
    }
    const btn = e.target;
    btn.closest("tr").remove();

}
form.addEventListener('submit', addToLibrary)
table.addEventListener('click', deleteRow)


function hello(){
    if(check.classList.contains('fa-check')){
        check.classList.replace('fa-check','fa-times');
    }else{
        check.classList.replace('fa-times','fa-check');
        
    }
   
}

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()









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