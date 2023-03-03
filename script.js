const maleAkanNames {
    Sunday: Kwasi, 
    Monday: Kwadwo,
    Tuesday: Kwabena,
    Wednesday: Kwaku,
    Thursday:  Yaw,
    Friday: Kofi,
    Saturday: Kwame
}
const femaleAkanNames {
    Sunday: Akosua,
    Monday: Adwoa,
    Tuesday: Abenaa,
    Wednesday: Akua,
    Thursday:  Yaa,
    Friday: Afua,
    Saturday: Ama
}
function Birthday() {
    document.getElementById("birthday").value = "";
  }
  let akanNameDay = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7