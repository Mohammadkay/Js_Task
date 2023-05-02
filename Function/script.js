// question 1 in function
function varToArr(a) {
  //varToArr convert string to array using split method
  return a.split(" ");
}

// question 2 in function
/*
  in this function you will call function and give it
    a phone number and then he first the function will substitute the first (7 dight) with (*) */
/*first i will take the phone number as argument from user  if user 
  enter the phone number as integer  i convert it to string and the and the phone number must be 10 digits 
  if not it will print the phone number must be 10 digits in console and i add style to it as color red
*/

function numberToHidden(phonenumber) {
  phonenumber = phonenumber.toString();

  if (phonenumber.length == 10) {
    for (let i = 0; i < 7; i++) {
      phonenumber = phonenumber.replace(phonenumber[i], "*");
    }
    console.log(phonenumber);
  } else {
    console.log(
      "%cthe phone number must be 10 digits",
      "color:red;font-size:23px"
    );
  }
}

// question 3 in function:
function encryptEmail(email) {
  /**here the function take the email and replace the last 4 char before @ with(*)
   */
  if (typeof email == "string") {
    let o = email.indexOf("@");
    if (o != -1) {
      email = email.replace(email.substring(o - 4, o), "****");
      console.log(email);
    }
  } else {
    console.log("%cPlease enter valid Email", "color:red;font-size:23px");
  }
}
// question 4 in function:
function upst(str) {
  /** here the function take the string and convert the first letter to Upper Case */
  str.toString();
  str = str.replace(str[0], str[0].toUpperCase());
  console.log(str);
}

// question 5 in function:
function TitleCase(str) {
  //here the function take the string and convert the first letter in each world to Upper Case */
  str = str.trim();
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].replace(str[i][0], str[i][0].toUpperCase());
  }
  str = str.join(" ");
  console.log(str);
}
// question 6 in function:
function flip(num) {
  //here the function will reverse the order of numbers
  num = num.toString();
  num = parseInt(num.split("").reverse().join(""));
  console.log(num);
}
//question 7 in function:
function swap(a, b) {
  // here we swap in three ways there are 2 ways in comment
  console.log(`before swap a = ${a}`);
  console.log(`before swap b = ${b}`);
  /*first seliotion
  let tmp = a;
  a = b;
  b = tmp;*/
  /*second solution
  a=a+b;
  b=a-b;
  a=a-b;
  */
  [a, b] = [b, a];
  console.log(`after swap a = ${a}`);
  console.log(`after swap b = ${b}`);
}
//question 8 in function:
function remchar(str, index) {
  str = str.replace(str[index], "");
  console.log(str);
}
//question 9 in function:
function merg(str1, str2) {
  //here the function merge 2 strings with remove the first char in each of them
  str1 = str1.replace(str1[0], ""); //i replace the the first char with empty string
  str2 = str2.replace(str2[0], "");
  let str = str1.concat(str2);
  console.log(str);
}
//question 10 in function:
function instring(char, str) {
  /* here the function take character and string and check if the character  
     included in string it return true else it return false  
  */ if (str.indexOf(char) != -1) {
    console.log(true);
  } else {
    console.log(false);
  }
}
//question 11 in function: i solve it in question number one
//************************** */
//question 11 in function:
function alphapitc(str) {
  /*the function take string and sort it alphabet's */
  str = str.split("").sort().join("");

  console.log(str);
}
Test: {
  console.log(varToArr("Orange Jordan"));
  numberToHidden("0776202831");
  encryptEmail("kayyali132@gmail.com");
  TitleCase("mohamad hishsam sadat kayyali");
  upst("mohamad hishsam sadat kayyali");
  flip(12345);
  swap(3, 9);
  remchar("Orange", 0);
  merg("lora", "inge");
  instring("a", "orange");
  console.log(varToArr("Coding Acadmy by orange"));
  alphapitc("orange");
}
