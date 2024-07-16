
// ........async await......

let url="https://official-joke-api.appspot.com/random_joke"
let p=document.querySelector("p");
let h5=document.querySelector("h5");
let h4=document.querySelector("h4");
let h3=document.querySelector("h3")
let btn =document.querySelector("btn")

let Rbtn = document.getElementById("btn");
function handleClick() {
  window.location.reload();
}
Rbtn.addEventListener("click", handleClick);


let promise1 = async function(){
  let response =  await fetch (url);
  let data =await response.json();
  console.log(data);
  let id=data.id;
  console.log(id)
  let punchline=data.punchline;
  console.log(punchline);
  let setup=data.setup;
  console.log(setup);
  let type = data.type;
  console.log(type);
  h5.innerText="ID :"+id;
  p.innerText="punchline :"+punchline;
  h4.innerText="setup : "+setup;
  h3.innerText="type :"+type;
}
promise1();