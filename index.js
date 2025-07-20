

const allbtn = document.querySelector("#allbtn");
const activebtn = document.querySelector("#activebtn");
const inactive = document.querySelector("#inactive");
const toggleSwitch = document.querySelectorAll(`.checkbox`);

 




const lodingPage = () => {
  allbtn.classList.add("select");
   toggleSwitch.forEach(switchs => {
    const toggleparent = switchs.parentElement.parentElement.parentElement;
     toggleparent.style.display = "inline-block";
   })
}

document.addEventListener("DOMContentLoaded", lodingPage);



const selectChildElement = () => {
 toggleSwitch.forEach(switchs => {
    const toggleparent = switchs.parentElement.parentElement.parentElement;
   toggleparent.style.display = "none";
   })
}

const activeAllChild = () => {
  activebtn.classList.remove("select");
  inactive.classList.remove('select');
  lodingPage();
}
allbtn.addEventListener("click",activeAllChild)

const activeChild = () => {
  inactive.classList.remove('select');
  allbtn.classList.remove("select");
  activebtn.classList.add("select")
  toggleSwitch.forEach(switchs => {
    const toggleparent = switchs.parentElement.parentElement.parentElement;
     
    if (switchs.checked) {
      toggleparent.style.display = "inline-block";
    } else {
      toggleparent.style.display = "none";
    }
   })
}
activebtn.addEventListener("click",activeChild )

const inactiveChild = () => {
   allbtn.classList.remove("select");
  activebtn.classList.remove("select")
  inactive.classList.add('select');
  toggleSwitch.forEach(switchs => {
    const toggleparent = switchs.parentElement.parentElement.parentElement;
     
    if (!switchs.checked) {
      toggleparent.style.display = "inline-block";
    } else {
      toggleparent.style.display = "none";
    }
   })
}
inactive.addEventListener("click",inactiveChild)