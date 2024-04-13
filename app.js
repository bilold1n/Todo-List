const todoform = document.getElementById("form");
const product = document.getElementById("productList");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
const editform = document.querySelector("#iditform");
const iki = document.querySelector("#iki");
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
iki.addEventListener("click", () => {
  closeModal();
});
let todoarr = [];
todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new Date();
  let todo = {
    id: Math.floor(Math.random() * 1000000),
    text: searchinp.value,
    complide: false,
    time: data.toLocaleString("uz-Uz", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  };
  todoarr.push(todo);
  searchinp.value = "";
  crattodos(todoarr);
});
function crattodos(todoarr) {
  product.innerHTML = "";
  todoarr.forEach(({ id, text, time, complide }) => {
    const li = document.createElement("li");
    if (complide) {
      li.classList.add("dizabled");
    }
    li.classList.add("item");
    li.innerHTML = `<div class="ll"> 
    <label  id="chek" class="label"  onclick="complitetodo(${id})" >
  
    <span></span>
  </label>  <p>${text}</p> 
  </div> 
   <div class="likom">
   <p style="color:rgba(0, 0, 0, 0.6);margin-right: 19px;">${time}</p>
     <img class="img" src="./img/img.svg" alt="rasm" onclick="updatetodo(${id})">
     <img class="img" src="./img/delete.svg" alt="rasm" onclick="deletetodo(${id})" />`;

    product.appendChild(li);
  });
}
function deletetodo(item) {
  todoarr = todoarr.filter(({ id }) => id !== item);
  crattodos(todoarr);
}
function updatetodo(itemid) {
  openModal();
  editform.addEventListener("submit", (e) => {
    e.preventDefault();
    todoarr = todoarr.map((item) => {
      if (item.id == itemid) {
        return {
          ...item,
          text: aditinp.value,
          complide: false,
        };
      }
      return item;
    });
    crattodos(todoarr);
    closeModal();
  });
}
function complitetodo(itemid) {
  todoarr = todoarr.map((item) => {
    if (item.id == itemid) {
      return {
        ...item,
        complide: !item.complide,
      };
    }
    return item;
  });
  crattodos(todoarr);
}
