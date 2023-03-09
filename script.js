function viewdate() {   
    var x = document.getElementById("birthday").value;   
    document.getElementById("demo").innerHTML = x;   
    }

// var date = birthDate;
// var arr = date.split(/ |,/);
// console.log('date: ', arr[0]);
// console.log('month: ', arr[1]);
// console.log('year: ', arr[2]);

// document.getElementById("birthday").addEventListener("change", function() {
//     var input = this.value;
//     var dateEntered = new Date(input);
//     console.log(input); //e.g. 2015-11-13
//     console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
// });