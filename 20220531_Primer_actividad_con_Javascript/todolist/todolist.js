

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'LI') 
  {
    ev.target.classList.toggle('checked');
  }
}, false);

//Objetos del DOM
const noteInput = document.getElementById("myInput");
const notes = document.getElementById("myUL");
const noteForm = document.getElementById("note-form");

//If logico que almacena en el array los datos agregados en el localstorage o un array vacio
let notesStorage = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

  //Se agrega el evento de envio
  noteForm.addEventListener("submit", (e) => 
  {
    e.preventDefault();

    var inputValue = document.getElementById("myInput").value;

    if (inputValue === '') 
  {
    alert("You must write something!");
  } else 
  {
    //Almacena en el array el valor de la entrada del input
    notesStorage.push(noteInput.value);

    //Almacena en el localstorage el array
    localStorage.setItem("notes", JSON.stringify(notesStorage));
    listBuilder(noteInput.value);//Llama a la funcion de listar y le pasa los valores por parametro
    noteInput.value = ""; //Resetea el valor de entrada
  }
    
  });

  const listBuilder = (text) => 
  {
    const note = document.createElement("li");
    
    //Se le agrega a los items el texto mas el boton X
    note.innerHTML = text + ' <button class="btn-neon" onclick="deleteNote(this)">x</button>';

    //Agrega los Li dentro de los Ul
    notes.appendChild(note);
  };


  const Allnotes = JSON.parse(localStorage.getItem("notes"));//Almacena el array completo en formato Json
Allnotes.forEach((note) => //Recorre cada elemento del array
{
  listBuilder(note);//Cada elemento es pasado como parametro a dicha función
});

const deleteNote = (btn) => //Recibe todo el objeto del botón
{
  let li = btn.parentNode;//Se obtiene el li completo
  const index = [...li.parentElement.children].indexOf(li);//Obtiene el indice del li,construyendo una lista a partir de todo lo que hay en el ul
  notesStorage.splice(index, 1);//Borra el item del localstorage
  localStorage.setItem("notes", JSON.stringify(notesStorage));//Actualiza localstorage con el elemento ya eliminado
  li.remove();//Elmina de la vista el li
};
