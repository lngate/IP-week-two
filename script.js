function viewdate() {   
    var showBirthdate = document.getElementById("birthday").value;   
    document.getElementById("viewDate").innerHTML = showBirthdate;   
    }

var date = showBirthdate;
const arr = date.split("-");
console.log('year: ', arr[0]);
console.log('month: ', arr[1]);
console.log('Date: ', arr[2]);

