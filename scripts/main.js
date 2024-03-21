const myImage = document.querySelector("img");

myImage.onclick= ()=> {
  const mySrc = myImage.getAttribute("src");
  if(mySrc === "img/icon.png"){
    myImage.setAttribute("src","img/firefox2.png");
  }else{
    myImage.setAttribute("src","icon.png");
  }
};


let myButton = document.querySelector("#changeUser" );
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("please enter your name");
  if(!myName){
    setUserName();
  }else {
    localStorage.setItem("name",myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }

}

if(!localStorage.getItem("name")){
  setUserName();
}else{
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool,${storedName}`;
}

myButton.onclick =() =>{
  setUserName();
}

