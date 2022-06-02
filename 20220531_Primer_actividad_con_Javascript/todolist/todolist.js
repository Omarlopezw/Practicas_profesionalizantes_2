

// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++)
// {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) 
// {
//   close[i].onclick = function()
//   {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'LI') 
  {
    ev.target.classList.toggle('checked');
  }
}, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() 
// {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') 
//   {
//     alert("You must write something!");
//   } else 
//   {
//     document.getElementById("myUL").appendChild(li);
//   }

//   document.getElementById("myInput").value = "";

  // var span = document.createElement("SPAN");
  // var txt = document.createTextNode("\u00D7");
  // span.className = "close";
  // span.appendChild(txt);
  // li.appendChild(span);

  // for (i = 0; i < close.length; i++)
  // {
  //   close[i].onclick = function() 
  //   {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }
// }

const noteInput = document.getElementById("myInput");
const notes = document.getElementById("myUL");
const noteForm = document.getElementById("note-form");
// const ButtonX = document.getElementById("ButtonX");
// ButtonX.style.display = 'none';

let notesStorage = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

  noteForm.addEventListener("submit", (e) => 
  {
    e.preventDefault();

    var inputValue = document.getElementById("myInput").value;

    if (inputValue === '') 
  {
    alert("You must write something!");
  } else 
  {
    notesStorage.push(noteInput.value);
    localStorage.setItem("notes", JSON.stringify(notesStorage));
    listBuilder(noteInput.value);
    noteInput.value = "";
  }
    
  });

  const listBuilder = (text) => 
  {
    const note = document.createElement("li");
    
    // ButtonX.addEventListener("submit", (e) =>
    // {
    //   e.preventDefault();
    //   deleteNote(this);

    // })
    // let test = ButtonX.outerHTML;
    note.innerHTML = text + ' <button class="btn-neon" onclick="deleteNote(this)">x</button>';
    notes.appendChild(note);
  };

  const getNotes = JSON.parse(localStorage.getItem("notes"));
getNotes.forEach((note) => 
{
  listBuilder(note);
});

const deleteNote = (btn) => 
{
  let el = btn.parentNode;
  const index = [...el.parentElement.children].indexOf(el);
  notesStorage.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
  el.remove();
};
