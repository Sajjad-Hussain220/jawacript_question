// chapter 38_44

// !q1
// function power(a , b)
// {
//     let result = Math.pow(a , b)
//     return result
// }

// let res = power(2 , 5)
// document.write(res)


// !q2
// function leap_year(input_year) {
//     if ((input_year % 4 === 0 && input_year % 100 !== 0) || (input_year % 400 == 0)) {
//         document.write(input_year + " this is a leap year ")
//     }
//     else {
//         document.write(input_year + " this is not a leap year")
//     }
// }

// let input_year = +prompt("input any year")
// leap_year(input_year)

//!q3
// function calculate_s(a, b, c) {
//     let s = (a + b + c) / 2;
//     let res = calculate_area(s, a, b, c)
//     return res
// }
// function calculate_area(s, a, b, c) {
//     let area = (s*(s - a)*(s - b)*(s - c))
//     return area

// }
// let a = 5;
// let b = 6;
// let c = 7;
// let result = calculate_s(a, b, c)
// document.write("the area of triangle is : " + result )

//!q4
// function percentage(m_total) {
//     let per_stu = (m_total / 300) * 100
//     return per_stu
// }
// function average(m_total) {
//     let ave_stu = m_total / 3
//     return ave_stu
// }
// function main_func() {
//     marks_1 = 85;
//     marks_2 = 67;
//     marks_3 = 43;
//     let total_marks_student = marks_1 + marks_2 + marks_3

//     let percentage_res = percentage(total_marks_student)
//     let average_res = average(total_marks_student)
//     document.write("student 3 subject marks ")
//     document.write("<br>sub 1 : " + marks_1 + "<br>sub 2 : " + marks_2 + "<br>sub 3 : " + marks_3 + "<br>total marks : " + total_marks_student)
//     document.write("<br>Average of 3 subject marks : " + average_res)
//     document.write("<br>percentage of 3 subject marks : " + percentage_res + "%")
// }
// main_func()

//! q5
// function indexof_function(word , find) {
//     for (let i = 0; i <= word.length ; i++) {
//         if (word[i] ===  find)
//         {
//             return i
//         }
//     }
//     return -1
// }

// let word = "hello world"
// finding_word = "o"
// let  res = indexof_function(word , finding_word)
// document.write("'" + finding_word +"' in " + word + " index " + res)

//! q6
// function vowel_check(sentence, vowels) {
//     let res = "";
//     for (let i = 0; i < sentence.length; i++) {
//         if (vowels.indexOf(sentence[i]) === -1) {
//             res += sentence[i];
//         }
//     }
//     return res;
// }

// let sentence = "This is a sample";
// let vowels = "aeiou";

// if (sentence.length <= 25) {
//     let result1 = vowel_check(sentence, vowels);
//     document.write(result1);
// } else {
//     document.write("Your sentence is more than 25 characters.");
// }

//! q8
// function meter(input) {
//     let res_meter = input * 1000;
//     return res_meter
// }
// function feet(input) {
//     let res_feet = input * 3280.84000000;
//     return res_feet
// }
// function inches(input) {
//     let res_inches = input * 39370.1;
//     return res_inches

// }
// function centimeter(input) {
//     let res_centimeter = input * 100000;
//     return res_centimeter

// }
// let input_2_cities = +prompt("input 2 cities distance")
// let meter_res = meter(input_2_cities)
// let feet_res = feet(input_2_cities)
// let inches_res = inches(input_2_cities)
// let centimeter_res = centimeter(input_2_cities)
// document.write(input_2_cities + " km = " + meter_res + " m<br>")
// document.write(input_2_cities + " km = " + feet_res + " f<br>")
// document.write(input_2_cities + " km = " + inches_res + " in<br>")
// document.write(input_2_cities + " km = " + centimeter_res + " cm<br>")


//!Q9
// function calculateOvertimePay(hoursWorked) {
//     let regularHours = 40
//     let overtimeRate = 12.00

//     if (hoursWorked > regularHours) {
//         let overtimeHours = hoursWorked - regularHours
//         let overtimePay = overtimeHours * overtimeRate
//         return overtimePay
//     } else {
//         return 0
//     }
// }

// let hoursWorked = 60
// let overtimePay = calculateOvertimePay(hoursWorked)

// document.write("Overtime Pay: Rs. " + overtimePay.toFixed(2))

//!q10
// function calculateCurrencyNotes(amountInHundreds) {
//     const denominations = [100, 50, 10];
//     let notesCount = [0, 0, 0];

//     for (let i = 0; i < denominations.length; i++) {
//         notesCount[i] = Math.floor(amountInHundreds / denominations[i]);
//         amountInHundreds = amountInHundreds % denominations[i];
//     }

//     return notesCount;
// }

// let amountInHundreds = 550; 

// let notesCount = calculateCurrencyNotes(amountInHundreds);

// console.log("100s: " + notesCount[0]); 
// console.log("50s: " + notesCount[1]); 
// console.log("10s: " + notesCount[2]); 
