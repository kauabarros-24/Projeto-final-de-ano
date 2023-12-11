const menuBurguer = document.querySelector("#menuBurguer");
const navList = document.querySelector("#navMenu")
let cont = 0;
function Click(){
    cont++
    if(cont%2 == 0){
        navList.style.display = "block"
        navList.classList.add("activate")
    }
    else if(cont%2 == 1){
        navList.style.display = "none"
        navList.classList.remove("activate")
    }
}
menuBurguer.addEventListener("click" , Click)
const liNavList = document.getElementsByTagName("li")
console.log(window.scrollY)
console.log(liNavList)
function scrollScreen(){   
    if( window.scrollY <= 1020){ liNavList[0].classList.add("active"); liNavList[1].classList.remove("active");}
    else if( window.scrollY <= 1600){ liNavList[0].classList.remove("active"); liNavList[1].classList.add("active"); liNavList[2].classList.remove("active")}
    else if( window.scrollY <= 2500){ liNavList[1].classList.remove("active"); liNavList[2].classList.add("active"); liNavList[3].classList.remove("active")}
    else if( window.scrollY > 2500){ liNavList[2].classList.remove("active"); liNavList[3].classList.add("active");}}
window.addEventListener("scroll", scrollScreen)