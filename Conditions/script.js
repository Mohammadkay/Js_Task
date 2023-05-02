question1: {
  /*in this question i calculate the age by take the year of berth then 
  subtract the year of birth from the current year
  then it give the user the suitable course 
  */
  document.write(`<h1>QUESTION 1 </h1>`);
  let year = 2001;
  let age = new Date().getFullYear() - year;

  if (age > 60) {
    document.write(`<h2>You may join the seniors’ program</h2>`);
  } else if (age > 18 && age <= 30) {
    document.write(`<h2>You are eligible. Start your application.</h2>`);
  } else {
    document.write(
      `<h2>You are not eligible. You may join other programs</h2>`
    );
  }
}

question1: {
  document.write(`<h1>QUESTION 2 </h1>`);
  
  let str = "MoHammad";
  /*her i replace the upper case to lower case and  vice versa
   using loop to take each character  and check if the character is capital letter
   it will replace it ti small letter and vers versa
   */
  document.write(
    `<h3>String before convert upper vto lower: <span style="color:red">${str}</span></h3>`
  );
  for (i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      str = str.replace(str[i], str[i].toLowerCase());
    } else {
      str = str.replace(str[i], str[i].toUpperCase());
    }
  }
  document.write(`<h3>solution: <span style="color:blue"> ${str}</span></h3>`);
}
/** I will up the sheet in githup */
question3: {
  document.write(`<h1>QUESTION 3 </h1>`);
  
  function CamelCase(str) {
    document.write(
      `<h4>the String before Camel Case <span style="color:red">${str}</span></h4>`
    );
    str = str.split(" ");
    for (i = 0; i < str.length; i++) {
      str[i] = str[i].replace(str[i][0], str[i][0].toUpperCase());
    }
    str = str.join("");
    document.write(
      `<h4>the String After Camel Case <span style="color:blue">${str}</span></h4>`
    );
  }
  CamelCase("mohammad hisham alkayyali");
}
question4: {
  document.write(`<h1>QUESTION 4 </h1>`);

  function Remove(arr, str) {
    document.write(
      `The Array before remove the element :<span style="color:red">[${arr}]</span>`
    );
    let index = arr.indexOf(str);
    if (index != -1) {
      arr.splice(index, 1);
    }

    document.write(
      `The Array before remove the element :<span style="color:Blue">[${arr}]</span>`
    );
  }
  Remove(["Coding", "Academy", "by", "Orange"], "Orange");
}
question5: {
  document.write(`<h1>QUESTION 5 </h1>`);
  function EvenOdd(num) {
    if (num % 2 == 0) {
      document.write(`<h4>${num} is even Number</h4> `);
    } else {
      document.write(`<h4>${num} is Odd Number</h4> `);
    }
  }
  EvenOdd(8);
}
question6: {
  document.write(`<h1>QUESTION 6 </h1>`);
  function check(input) {
    if (typeof input == "number") {
      document.write(`<h3>the variable is Number </h3>`);
    } else {
      document.write(`<h3>the variable isn't Number </h3>`);
    }
  }
  check("sda");
}
question7: {
  document.write(`<h1>QUESTION 7 </h1>`);
  function largest(num1, num2) {
    if (num1 > num2) {
      document.write(`<h3>${num1} is larger than ${num2} .</h3>`);
    } else if (num2 > num1) {
      document.write(`<h3>${num2} is larger than ${num1} .</h3>`);
    } else {
      document.write(`<h3>${num1} is equal than ${num2} .</h3>`);
    }
  }
  largest(10, 5);
}
question8: {
  document.write(`<h1>QUESTION 8 </h1>`);
  function triangle(num1, num2, num3) {
    if (num1 != num2 && num1 != num3 && num2 != num3) {
      document.write(`<h3> equilateral </h3>`);
    } else if (num1 == num2 && num1 == num3 && num2 == num3) {
      document.write(`<h3>scalene </h3>`);
    } else {
      document.write(`<h3>isosceles </h3>`);
    }
  }
  triangle(5, 5, 5);
}
question9: {
  document.write(`<h1>QUESTION 9 </h1>`);
  function finds(n, range) {
    range = range.sort();
    if (n > range[0] && n < range[1]) {
      document.write(
        `<h3>${n} is in range between ${range[0]} and ${range[1]} </h3>`
      );
    } else {
      document.write(
        `<h3>${n} is in range between ${range[0]} and ${range[1]} </h3>`
      );
    }
  }
  finds(80, [1, 55]);
}

question10: {
  document.write(`<h1>QUESTION 10 </h1>`);
  function leapYear(year) {
    if (year % 4 == 0) {
      document.write(`<h3>The year (${year}) is  a leap year</h3>`);
    } else {
      document.write(`<h3>The year (${year}) isn't a leap year</h3>`);
    }
  }
  leapYear(2000);
}
