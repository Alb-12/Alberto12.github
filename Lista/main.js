const input = document.querySelector("input");
const addBtn = document.getElementById("btn-add");
const ul = document.querySelector("ul");
const empty = document.getElementById("empty"); 

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value.trim(); 

    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");

        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());

        if (ul) {
            ul.appendChild(li);
        }

        input.value = "";

        if (empty) {
            empty.style.display = "none";
        }
    }
});

function addDeleteBtn() {
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "X";
    deletebtn.className = "btn-delete";

    deletebtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;

        if (ul && item) {
            ul.removeChild(item);
        }

        const items = document.querySelectorAll("li");
        if (empty && items.length === 0) {
            empty.style.display = "block";
        }
    });

    return deletebtn;
}