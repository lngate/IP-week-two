function viewdate() {   
    var showBirthdate = document.getElementById("birthday").value;  
    var genderPerson = document.getElementById("gender").value;
    document.getElementById("viewDate").innerHTML = showBirthdate;   
    document.getElementById("viewGender").innerHTML = genderPerson;
    }


function dateSplit(){
    var date = showBirthdate;
    const arr = date.split("-");
    console.log(arr)
        let YY =console.log('year: ', arr[0]);
        let MM = console.log('month: ', arr[1]);
        let DD = console.log('Date: ', arr[2]);
}

alert(arr[0])
alert(arr[1])
alert(arr[2])