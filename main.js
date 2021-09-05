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


};