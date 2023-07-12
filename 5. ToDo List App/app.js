const todoBox = document.getElementById("todoBox");
const item = document.getElementById("item");

item.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTodo(item.value);
  }
});

const addTodo = (inputValue) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <li>${inputValue}<i class="fa-regular fa-circle-xmark"></i></li>
    `;
    todoBox.appendChild(listItem)
    item.value=""

    listItem.querySelector("i").addEventListener("click", ()=>{
        listItem.remove()
    })


    listItem.addEventListener("click", ()=>{
        console.log("toggle");
        listItem.classList.toggle("done")
    })
};
