function sayHelloConsole() {
  console.log("Hello, World!");
}
function sayHelloPopUp() {
  alert("Hello, World!")
}
function sayHelloBrowser() {
  var p = document.getElementById("hello");
	p.innerHTML= "Hello, World!";
}
function sayHelloStranger() {
  var a = prompt("Please enter your name", "Tyler")
  alert("Hello " + a)
}
