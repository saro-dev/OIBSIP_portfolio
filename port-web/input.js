var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".navlist");
var links = document.querySelector(".navlist li");
hamburger.addEventListener("click",function(){
  this.classList.toggle("click");
  navlist.classList.toggle("open");
});

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


function validateForm()

{
  clearMessages();
  let errorFlag = false;
  
  if(nameInput.value.length < 1)
  {
    errorNodes[0].innerText ="Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }
  if (!emailIsValid(email.value))
  {
    errorNodes[1].innerText ="Invalid email Address";
    email.classList.add("error-border");
    errorFlag = true;
    
  }
  if (message.value.length < 1)
  {
    errorNodes[2].innerText ="Please enter Message";
    message.classList.add("error-border");
    errorFlag = true;
    
  }
  if(!errorFlag)
  {
    success.innerText="success";
  }
  
}

function clearMessages()
{
  for(let i = 0; i < errorNodes.length; i++)
  {
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email)
{
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}