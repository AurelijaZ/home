//make a function and a button to work 
var movies = [];
var event1 = document.getElementById("button1");
event1.addEventListener('click', myArrays, false); 

function myArrays () {
    
        movies [0] = document.getElementById("input1").value;
        movies [1] = document.getElementById("input2").value;
        movies [2] = document.getElementById("input3").value;
    
 var textString = "";
     for(var i = 0; i< movies.length; i++) 
     {
         textString += movies[i] + "<br>";
     }
     
    
    document.getElementById("result1").innerHTML = textString; 
    
}