let circle = document.querySelectorAll(".circle");
let taskPC = document.querySelector(".task-pc");
let taskUser = document.querySelector(".task-user");
let userName = document.querySelector(".user-name");
let userNameEdit = document.querySelector(".user-name-edit");
let balance = document.querySelector(".balance");
let editImg = 'pen'

// - - - - - - - - - - - -


if (localStorage.getItem("money") == null) {
    localStorage.setItem("money", 100);
} 
if (localStorage.getItem("name") == null) {
  localStorage.setItem("name", 'Taras Bulba');
} 
let name = localStorage.getItem("name");
userName.textContent = name;

let money = localStorage.getItem("money");
balance.textContent = money;

userNameEdit.addEventListener('click', function () {
  if (editImg == 'pen') {
    editImg = "save";
    userNameEdit.src =     "./assets/img/" + editImg + ".svg";
    userName.contentEditable = true;
    userName.focus()
  }
  else {
     editImg = "pen";
     userNameEdit.src = "./assets/img/" + editImg + ".svg";
     userName.contentEditable = false;
     localStorage.setItem('name', userName.textContent)
  }

})

function getRandomNumber() {
    let randomNumber = (Math.random()*10000).toFixed(0)
    return randomNumber;
}


function showRandomNumber() {
  taskPC.textContent = getRandomNumber();
}

showRandomNumber();

function changeBalance (sign, number) {
    let money = +localStorage.getItem("money");

    if (sign == '+') {
        money += number;
        
    }
    else if (sign == '-') {
        money -= number;
    }

    localStorage.setItem("money", money);
    balance.textContent = money;
}


function moveElement(el) {
    let posX = (Math.random() * 1500).toFixed(0);
    let posY = (Math.random() * 500).toFixed(0);
    el.style.position = 'absolute'
    el.style.top = posY + "px";
    el.style.left = posX + "px";


}

function checkUserNumber(number) {
  if (number == +taskPC.textContent) {
    changeBalance('+', 50);
    alert('You win')
    window.location.reload();
    
  }
  else if (number > +taskPC.textContent) {
    changeBalance("-", 20);
    alert('You lose')
    window.location.reload();
  }
  
}

function addNumberToUser(number) {
    taskUser.textContent = +taskUser.textContent + number;
    checkUserNumber(+taskUser.textContent);
}
for (let i = 0; i < circle.length; i++) {
    moveElement(circle[i])
    circle[i].addEventListener('click', () => {moveElement(circle[i]);}  )
    circle[i].addEventListener('click', () => {addNumberToUser(+circle[i].textContent);}  )
}

