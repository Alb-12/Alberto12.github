const menu = document.getElementById("menu");
const input = document.getElementById("input");
const addMenuItemBtn = document.getElementById("addMenuItem");
const menuSelect = document.getElementById("menuSelect");
const subInput = document.getElementById("subInput");
const subLinkInput = document.getElementById("subLinkInput");
const addSubMenuItemBtn = document.getElementById("addSubMenuItem");
const subMenuSelect = document.getElementById("subMenuSelect");
const deleteSubMenuItemBtn = document.getElementById("deleteSubMenu");


addMenuItemBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const subUl = document.createElement("ul"); 

        p.textContent = text;
        li.appendChild(p);
        li.appendChild(subUl);
        menu.appendChild(li);

       
        const option = document.createElement("option");
        option.value = text;
        option.textContent = text;
        menuSelect.appendChild(option);

        input.value = ""; 
    }
});


addSubMenuItemBtn.addEventListener("click", () => {
    const selectedText = menuSelect.value;
    const subText = subInput.value.trim();
    const subLink = subLinkInput.value.trim();

    if (selectedText && subText !== "" && subLink !== "") {
       
        const items = menu.getElementsByTagName("li");
        for (let item of items) {
            if (item.firstChild.textContent === selectedText) {
                const subLi = document.createElement("li");
                const a = document.createElement("a");

                a.textContent = subText;
                a.href = subLink;
                a.target = "_blank"; 

                subLi.appendChild(a);
                item.querySelector("ul").appendChild(subLi);

            
                const option = document.createElement("option");
                option.value = subText;
                option.textContent = subText;
                subMenuSelect.appendChild(option);

                subInput.value = ""; 
                subLinkInput.value = ""; 
                break;
            }
        }
    }
});


deleteSubMenuItemBtn.addEventListener("click", () => {
    const selectedSubText = subMenuSelect.value;
    if (selectedSubText) {
        const items = menu.getElementsByTagName("li");

        for (let item of items) {
            const subItems = item.querySelector("ul").getElementsByTagName("li");
            for (let subItem of subItems) {
                if (subItem.textContent === selectedSubText) {
                    subItem.remove();
                    break;
                }
            }
        }

      
        for (let i = 0; i < subMenuSelect.options.length; i++) {
            if (subMenuSelect.options[i].value === selectedSubText) {
                subMenuSelect.remove(i);
                break;
            }
        }
    }
});