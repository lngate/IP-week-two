function viewDateGender() {   
    var showBirthdate = document.getElementById("birthday").valueAsDate;  
    var genderPerson = document.getElementById("gender").value;
    var day = showBirthdate.getDay();
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    // document.getElementById("viewDate").innerHTML = showBirthdate;   
    document.getElementById("viewGender").innerHTML = genderPerson;
    var dayBorn = document.getElementById("dayOfWeek2").textContent = weekday[day];
    }

