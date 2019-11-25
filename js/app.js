var chiBtn = document.querySelectorAll('#chiBtn');
var fouBtn = document.querySelector('#fouBtn');
var miBtn = document.querySelector('#miBtn');
var btns = document.querySelectorAll(".imgs .btn");
var btnsBot = document.querySelectorAll(".imgsBot .btn");
var affichage=document.querySelector("h1");
var countW=0;
var countL=0;
for (let i in btns) {
    btns[i].onclick = function () {

        var bot = Math.floor(Math.random() * 3);
        i = parseInt(i);
        show(btnsBot,bot);
        show(btns,i);

        console.log("Bot: "+bot,"User: "+i);
        if (i === bot) {
            console.log("égalité");
            affichage.innerHTML="Egalité";
        } else if ((i === 0 && bot === 2) || (i === 1 && bot === 0) || (i === 2 && bot === 1)) {
            console.log("user win");
            affichage.innerHTML="Yoouuuuu WIN!!!";
            countW++;
        } else if ((bot === 0 && i === 2) || (bot === 1 && i === 0) || (bot === 2 && i === 1)) {
            console.log("bot win");
            affichage.innerHTML="Yoouuuuu LOOOOOSE!!!";
            countL++;
        }
        document.querySelector(".win div").innerHTML=countW;
        document.querySelector(".loose div").innerHTML=countL;
    }
}

function show(elem,index){
    switch (index) {
        case 0:
            elem[0].classList.remove("half");
            elem[0].classList.add("full");
            elem[1].classList.remove("full");
            elem[1].classList.add("half");
            elem[2].classList.remove("full");
            elem[2].classList.add("half");
            break;
        case 1:
            elem[0].classList.remove("full");
            elem[0].classList.add("half");
            elem[1].classList.remove("half");
            elem[1].classList.add("full");
            elem[2].classList.remove("full");
            elem[2].classList.add("half");
            break;
        case 2:
            elem[0].classList.remove("full");
            elem[0].classList.add("half");
            elem[1].classList.remove("full");
            elem[1].classList.add("half");
            elem[2].classList.remove("half");
            elem[2].classList.add("full");
            break;
    }

}
