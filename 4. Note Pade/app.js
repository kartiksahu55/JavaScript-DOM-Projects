const button = document.getElementById("addBtn");
const main = document.getElementById("main");
// const save = document.querySelectorAll(".save");

const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="note">
        <div class="navbar">
          <i class="save fa-solid fa-floppy-disk"></i>
          <i class="trash fa-solid fa-trash-can"></i>
        </div>
        <textarea name="" id="" cols="30" rows="10">${text}</textarea>
      </div>
    `;
  main.appendChild(note);
  note.querySelector(".save").addEventListener("click", () => {
    saveNote();
  });
  saveNote();

  note.querySelector(".trash").addEventListener("click", () => {
    note.remove();
    saveNote();
  });

  note.querySelector("textarea").addEventListener("focusout", () => {
    saveNote();
  });
};

button.addEventListener("click", () => {
  addNote();
});

const saveNote = () => {
  const notes = document.querySelectorAll(".note textarea");
  let data = [];

  notes.forEach((note) => data.push(note.value));
  localStorage.setItem("notes", JSON.stringify(data));
};

(function () {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));
  console.log(lsNotes);

  if (lsNotes.length === 0) {
    localStorage.removeItem("notes");
    addNote();
  } else {
    lsNotes.map((text) => addNote(text));
  }
})();
