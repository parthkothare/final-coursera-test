// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function sayHello () {
  var firstname1 =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

  
  }
}
            });
      });
  }
);




