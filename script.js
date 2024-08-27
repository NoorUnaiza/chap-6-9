// 1.
var a = 10;
document.write("Result: </br>")
document.write(`The value of a is: ${a} </br>`);
document.write(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, </br> </br>");

// pre increment

var newNum = ++a;
document.write(`The value of ++a is: ${newNum} </br>`);
document.write(`Now the value of a is: ${newNum} </br> </br> </br>`);
console.log(`Now the value of a is: ${newNum}`);
// post increment

var a = 10;
var a1 = a++;
document.write(`The value of a++ is: ${a} </br>`);
var newNum1 = a++ ;
document.write(`Now the value of a is: ${a} </br> </br> </br>`);
console.log(`Now the value of a is: ${a}`);

// pre decrement

var newNum = --a;
document.write(`The value of --a is: ${newNum} </br>`);
document.write(`Now the value of a is: ${newNum} </br> </br> </br>`);
console.log(`Now the value of a is: ${newNum}`);

// post decrement
 
document.write(`The value of a-- is: ${a} </br>`);
var a1 = a--;
document.write(`Now the value of a is: ${a}`);





document.write("<hr>");
// 2. What will be the output in variables a, b & result after execution of the following script: 
// var a = 2, b = 1; 
var a = 2;
var b = 1;
// var result = --a - --b + ++b + b--; 

// Explain the output at each stage: 
// --a; 
var a = --a;
console.log(a);
// --a - --b; 
var b = --a - --b;
console.log(b);
// --a - --b + ++b; 
var result = --a - --b + ++b;
console.log(result);
// --a - --b + ++b + b--;
var result = --a - --b + ++b + b--;
console.log(result);

document.write(`a is ${a} </br>`);
document.write(`b is ${b} </br>`);
document.write(`result is ${result} </br>`);
document.write("<hr>");


// 3. Write a program that takes input a name from user & greet the user.

var user = prompt("What is your name");
document.write("My name is " + user + "!");

// 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

var table = prompt("Table of any number" );
if (table === null || table === "") {
    table = 5;
}
document.write(`<h3>Table of ${table}</h3>`);
document.write(`${table} x 1 = ${table*1} </br>`);
document.write(`${table} x 2 = ${table*2} </br>`);
document.write(`${table} x 3 = ${table*3} </br>`);
document.write(`${table} x 4 = ${table*4} </br>`);
document.write(`${table} x 5 = ${table*5} </br>`);
document.write(`${table} x 6 = ${table*6} </br>`);
document.write(`${table} x 7 = ${table*7} </br>`);
document.write(`${table} x 8 = ${table*8} </br>`);
document.write(`${table} x 9 = ${table*9} </br>`);
document.write(`${table} x 10 = ${table*10} </br> </br> </br> </br> `);

// 5. Take
// a) Take three subjects name from user and store them in 3 different variables.
var sub_1="English";
var sub_2="Maths";
var sub_3="Urdu";

// b) Total marks for each subject is 100, store it in another variable.
var total_marks=100;

// c) Take obtained marks for first subject from user and stored it in different variable.
var obt_eng_marks=54;

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
var obt_urdu_marks=48;
var obt_maths_marks=54;

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var per_sub_1=(obt_eng_marks/total_marks)*100;
var per_sub_2=(obt_maths_marks/total_marks)*100;
var per_sub_3=(obt_urdu_marks/total_marks)*100;

document.write(`
   <table
   
   <tr>
   
   <th>Subject</th>
   <th>Total Marks</th>
   <th>Obtained Marks</th>
   <th>Percentage</th>
</tr>

<tr>
<td>${sub_1}</td>
<td>${total_marks}</td>
<td>${obt_eng_marks}</td>
<td>${per_sub_1}%</td>
</tr>

<tr>
<td>${sub_2}</td>
<td>${total_marks}</td>
<td>${obt_maths_marks}</td>
<td>${per_sub_2}%</td>
</tr>
<tr>
<td>${sub_3}</td>
<td>${total_marks}</td>
<td>${obt_urdu_marks}</td>
<td>${per_sub_3}%</td>
</tr>

<tr>
<td></td>
<td style="font-weight:bold;">${total_marks*3}</td>
<td style="font-weight:bold;">${obt_eng_marks+obt_urdu_marks+obt_maths_marks}</td>
<td style="font-weight:bold;">${(obt_eng_marks+obt_urdu_marks+obt_maths_marks)/(total_marks*3)*100}%</td>
</tr>
      `);