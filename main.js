//possible variables for birth date corresponds with day of the week
var submission = function(){
    var daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    //fetching input data from HTML using their id
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var day = parseInt(document.getElementById("day").value);
    var name =(document.getElementById("name").value);

    //creating a date objects to call the day stated
    var date0fbirth = new Date(year + "/" + month + "/" + day);
    var results = date0fbirth.getDay();

    // this will choose the option available from the radio button

    var male = document.getElementById("male")
    var female = document.getElementById("female")

    //output will print outcome variables to html
    var output = document.getElementById("output");

    
    //calculation of input
    //
   
     if(male.checked && year > 0 && month > 0 && month < 13 && day > 0 && day < 32) {
        output.innerHTML = "Hello! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results];
        alert("Hello! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results])
    }

     else if(female.checked && year > 0 && month > 0 && month < 13 && day > 0 && day < 32) {
          output.innerHTML = "Hello! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
        alert("Hello! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results])
    }


};