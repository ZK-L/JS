const input = document.getElementById("input");
const btn = document.getElementById("add");
const itemPanel = document.getElementById("shoppingItem");
const status = document.getElementById("status");


btn.onclick = ()=>{
    let item = input.value;
    if (item === ""){
        status.textContent = "Input can not be empty";
    }
    else{
        let newItem = document.createElement("div");
        newItem.setAttribute("class","item");
        let itemName = document.createElement("a");
        let delBtn = document.createElement("button");
        itemName.setAttribute("class","itemName");
        itemName.textContent = item;
 
        delBtn.textContent = "Delete";

        newItem.appendChild(itemName);
        newItem.appendChild(delBtn);
        delBtn.addEventListener("click", ()=>newItem.remove());
        itemPanel.appendChild(newItem);
    }

};