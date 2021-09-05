//possible variables for birth date corresponds with day of the week
var submit = function(){
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

    if (month =="" && year =="" && day =="" && name=="") {
        alert("Please Enter date correctly");
        return false;
    }
    
    if (year < 1900) {
        output.innerHTML = "Hello! " + name + " please enter a valid year! "
        }
      
        else if ((month < 1) || (month >12)) {
        output.innerHTML = "Hello! " + name + " please enter a valid month! "
        }
      
        else if (day < 0 || day > 31) {
        output.innerHTML = "Hello! " + name + " please enter a valid date! "
        }

     if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
        output.innerHTML = "Hello! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results];
     }

     else if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
          output.innerHTML = "Hey! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
        }

     if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
         output.innerHTML = "Hey! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results];
        }
     else if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {

    output.innerHTML = "Hey! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
    }
};