const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAll = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
}
showTasks();

addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pending= document.querySelector(".pending");
    pending.textContent = listArr.length;
    let newLiTag = '';
    listArr.forEach((element,index) => {
        newLiTag += `<li> ${element} <span onclick = "deleteTask(${index})"; ><img src="https://img.icons8.com/material-sharp/24/000000/trash.png"/></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}
deleteAll.onclick = ()=>{
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}
