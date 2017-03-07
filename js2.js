// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
var counter=0;
function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";
   
  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;
while(counter<=1){
  if (name === "student") {
      var  title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
    counter=counter+1;
  }
}
}
