question1: {
  document.write("<h1>Question 1</h1> ");
  for (i = +2; i < 50; i += 2) {
    document.write(`${i}`);

    let j = i;
    while (j == i) {
      document.write(`${j} `);
      j++;
    }
  }
}
/********************************************************************** */
question2: {
  document.write("<h1>Question 2</h1> ");
  for (i = +1; i < 50; i += 2) {
    document.write(`${i}${i} `);
  }
}
/********************************************************************** */
question3: {
  document.write(`<br><h1>Question 3</h1> `);
  document.write(`<h3>Even</h3>`);
  for (i = 1; i < 50; i++) {
    if (i % 2 == 0) {
      document.write(`${i} - `);
    }
  }
  document.write(`<h3>Odd</h3>`);
  for (i = 1; i < 50; i++) {
    if (i % 2 != 0) {
      document.write(`${i} - `);
    }
  }
}
/********************************************************************** */
question4: {
  document.write(`<h1>Question4 </h1>`);
  for (i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      document.write(` FizzBuzz `);
    }
    if (i % 3 == 0) {
      document.write(`  Fizz  `);
    } else if (i % 5 == 0) {
      document.write(` Buzz  `);
    } else {
      document.write(` ${i} `);
    }
  }
}
/********************************************************************** */
question5: {
  document.write(`<h1>Question5</h1>`);
  function FizzBuzz(num) {
    if (num % 3 == 0 && i % 5 == 0) {
      document.write(` FizzBuzz `);
    }
    if (num % 3 == 0) {
      document.write(`  Fizz  `);
    } else if (num % 5 == 0) {
      document.write(` Buzz  `);
    } else {
      document.write(` ${num} `);
    }
  }
  FizzBuzz(5);
}
/********************************************************************** */
question6: {
  document.write(`<h1>Question6</h1>`);
  function RFizzBuzz(num) {
    if (num < 100) {
      if (num % 3 == 0 && num % 5 == 0) {
        document.write(` FizzBuzz `);
        RFizzBuzz(num + 1);
      } else if (num % 3 == 0) {
        document.write(`  Fizz  `);
        RFizzBuzz(num + 1);
      } else if (num % 5 == 0) {
        document.write(` Buzz  `);
        RFizzBuzz(num + 1);
      } else {
        document.write(` ${num} `);
        RFizzBuzz(num + 1);
      }
    } else {
      return;
    }
  }
  RFizzBuzz(1);
}
/********************************************************************** */
question7: {
  document.write(`<h1>Question7</h1>`);
  function banknotes(num, arr) {
    document.write(`<h3>The Number is =${num}</h3>`);
    document.write(`<h3>The set is =${arr}</h3>`);
    let ruselt = [];
    for (i = 0; i < arr.length; i++) {
      while (num >= arr[i]) {
        ruselt.push(arr[i]);
        num -= arr[i];
      }
    }
    document.write(`<h3>ruselt = ${ruselt}</h3>`);
  }
  banknotes(58, [25, 10, 5, 1]);
  //with some help
}
question8: {
  document.write(`<h1>Question8</h1>`);
  function counts(str, char) {
    document.write(`<h2>the text is : ${str}</h2>`);
    document.write(`<h2>the character is : ${char}</h2>`);
    str = str.toLocaleLowerCase();
    char = char.toLocaleLowerCase();
    str = str.split("");
    c = 0;
    for (i = 0; i < str.length; i++) {
      if (str[i] == char) {
        c++;
      }
    }
    document.write(`<h2>${c}</h2>`);
  }

  counts("Coding Academy by Orange", "a");
}
question9: {
  document.write(`<h1>Question9 A:</h1>`);
  for (i = 0; i <= 20; i++) {
    document.write(`<h4>${i} </h4>`);
  }
  document.write(`<h1>Question9 B:</h1>`);
  for (i = 3; i <= 29; i += 2) {
    document.write(`<h4>${i} </h4>`);
  }
  document.write(`<h1>Question9 c:</h1>`);
  for (i = 12; i >= -14; i -= 2) {
    document.write(`<h4>${i} </h4>`);
  }
  document.write(`<h1>Question9 c:</h1>`);
  for (i = 50; i >= 20; i--) {
    if (i % 3 == 0) {
      document.write(`<h4>${i} </h4>`);
    }
  }
}
question10: {
  document.write(`<h1>Question10:</h1>`);
  var str = "CodingAcademy";
  var arr = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
  document.write(`<h2>the array is [${arr}] </h2>`);
  for (i = arr.length - 1; i >= 0; i--) {
    document.write(`<h4>${arr[i]} </h4>`);
  }
  document.write(`<h2>the string is :${str} </h2>`);
  for (i = str.length - 1; i >= 0; i--) {
    document.write(`<h4>${str[i]} </h4>`);
  }
}

question11: {
  document.write(`<h1>Question11:</h1>`);
  var arr = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
  var even = [];
  var odd = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  document.write(`<h2>the even array is :[${even}] </h2>`);
  document.write(`<h2>the odd array is :[${odd}] </h2>`);
}
question12: {
  document.write(`<h1>Question12:</h1>`);
  let gra = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];
  let pro = ["chicken", "pork", "tofu", "beef", "fish", "beans"];
  let veg = ["peas", "green beans", "kale", "edamame", "broccoli", "asparagus"];
  let bev = ["juice", "milk", "water", "soy milk", "soda", "tea"];
  let des = ["apple", "banana", "more kale", "ice cream", "chocolate", "kiwi"];
  let num = 3;
  let meals = [];
  var min = Math.min(
    gra.length,
    pro.length,
    veg.length,
    bev.length,
    des.length
  );
  if (num <= min) {
    for (i = 0; i < num; i++) {
      for (j = 0; j < 1; j++) {
        meals.push(gra[j]);
        meals.push(pro[j]);
        meals.push(veg[j]);
        meals.push(bev[j]);
        meals.push(des[j]);
        gra.shift();
        pro.shift();
        veg.shift();
        bev.shift();
        des.shift();
      }
    }
    document.write(`<h3>${meals.join(" / ")}</h3>`);
  } else {
    document.write(
      `<h3 style="color:red;">You cant take this number of meals</h3>`
    );
  }
}
