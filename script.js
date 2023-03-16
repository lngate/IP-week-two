const AKAN_NAME_MALE = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku" , "Yaw" , "Kofi", "Kwame" ]
const AKAN_NAME_FEMALE =["Akosua", "Adwoa" , "Abenaa" , "Akua" , "Yaa", "Afua" , "Ama" ]
let userAkanName = null;
let genderPerson = null;



function viewDateGender() {   
    let showBirthdate = document.getElementById("birthday").valueAsDate;  
    let gender = document.getElementById("gender");
    let day = showBirthdate.getDay();
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    // document.getElementById("viewDate").innerHTML = showBirthdate;   
      document.getElementById("viewGender").innerHTML ="Gender selected is " + genderPerson;
      let dayBorn = document.getElementById("dayOfWeek2").textContent =  "You were born on " + weekday[day];
    } 



function getAkanName(dayBorn){
    if (genderPerson ==  "male"){
    userAkanName = AKAN_NAME_MALE[dayBorn];
    } else if( genderPerson == "female"){
    userAkanName = AKAN_NAME_FEMALE[dayBorn];
    } else {
     console.log("Gender not selected!");
    }
}

function main(){
   let dayBorn = viewDateGender();
    getAkanName(dayBorn);
    // console.log(userAkanName);
    console.log(document.getElementById("akanNameOutput"). innerHTML = userAkanName)
}
