console.log('note app')
showNotes();

// funcion of add notes to local storage
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addTxt')
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes)
    }
    notesobj.push(addtxt.value)
    localStorage.setItem("notes", JSON.stringify(notesobj))
    addtxt.value = ""
    // console.log(notesobj)
    showNotes();
})

// function add notes in display
function showNotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes)
    }
    let html = ""
    notesobj.forEach(function (element, index) {
        html += `
        <div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick ="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
        `
    })
    let notesElms = document.getElementById('notes')
    if (notes.length != 0) {
        notesElms.innerHTML = html;
    }
}

// function of deleting notes from display
function deleteNotes(index) {
    // console.log("deleted", index)
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes)
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj))
    showNotes();
}

// Searching for notes
let search = document.getElementById('searchtxt')
search.addEventListener('input', function () {
    let txtval = search.value.toLowerCase();
    // console.log("u r searching", txtval);
    let cards = document.getElementsByClassName('card')
    Array.from(cards).forEach(function (element) {
        // let cardTxt = element.getElementsByTagName('p')[0];
    //   console.log(cardTxt.innerText)
        if (element.innerText.includes(txtval)) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }
    })
})