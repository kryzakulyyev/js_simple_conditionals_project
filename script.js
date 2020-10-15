// Grade Students
let grade=prompt("Please enter your grade");
if(grade>100 || grade<0){
  alert(`Please enter valid number!!!`)
}
else if(grade>=80 ){
  alert(`A - Excellent`);
}else if(grade>=70){
  alert(`B- Very good`);
}else if(grade>=60){
  alert(`C - Good`);
}else if(grade>=50){
  alert(`D - Average`)
}else if(grade>=0){
  alert(`F - False`);
}


//Challange:Ternary operator
// grade>100 && grade<0 ?   alert(`Please enter valid number!!!`):
// grade>=80 ? alert(`A - Excellent`)
// :grade>=70 ? alert(`B- Very good`)
// :grade>=60 ? alert(`C - Good`)
// :grade>=50 ? alert(`D - Average`)
// :grade>=0 ?  alert(`F - False`)
// :"Your number is odd":

// Check Season

let month = prompt("Please enter month!").toLowerCase();
switch (month) {
  case "september":
  case "october":
  case "november":
    alert("Season is Autumn");
    break;
  case "december":
  case "january":
  case "february":
    alert("Season is Winter");
    break;
  case "march":
  case "april":
  case "may":
    alert("Season is Spring");
    break;
  case "june":
  case "july":
  case "august":
    alert("Season is Summer");
    break;
  default:
    alert("Please enter correct month");
    break;
}
// Month Day
let monthDay = prompt("Please enter month!").toLowerCase();
switch (monthDay) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    alert(`${monthDay} has 31 days.`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    alert(`${monthDay} has 30 days.`);
    break;
  case "february":
    alert(`${monthDay} has 28 days.`);
    break;
  default:
    alert("Please enter correct month!");
    break;
}
