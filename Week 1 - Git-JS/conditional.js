// Question 1

// Get input from the user of number and print its multiple of 5 or not.

 let num = prompt("Enter your number");
 console.log(num);
  if (num % 5 == 0) {
    console.log(num, "Your number is multiple by 5");
  }else{
    console.log(num, "Your number is not multiple by 5");
  }

  // Question 2

  //Get marks from the student and check his grade.

  let marks = prompt("Enter your marks");
  let grade;

 if (marks >=90 && marks<=100) {
    grade = "A";
 }else if(marks >=80 && marks<=90){
    grade = "B";
 }else if(marks >=70 && marks <=80){
    grade = "C";
 }else if (marks >= 60 && marks <=70) {
    grade = "D";
 }else if (marks >=50 && marks <=60) {
    grade = "E";
 }else{
    console.log("Fail");
 }
 console.log(grade);