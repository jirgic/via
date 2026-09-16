## 1. Assignment Overview
This assignment assesses your understanding and practical application of fundamental JavaScript programming concepts. You are expected to demonstrate your ability to work with:

* Variables
* Expressions
* Arithmetic and assignment operators
* Comparison and logical operators
* Conditional statements
* Objects and object properties
* Methods
* Combining multiple concepts to solve a programming problem

### General Instructions
1. Complete all four parts of the assignment.
2. Write your solutions in JavaScript.
3. Use meaningful variable and property names.
4. Use `let` and `const` appropriately.
5. Use strict equality (`===`) where appropriate.
6. Your program should produce clear and understandable output.
7. Include comments where requested.
8. Test your code before submission.
9. You may use either a browser console or a JavaScript runtime such as Node.js.
10. Submit **one** `.js` file containing all your answers.

---

## Part 1 — Variables and Expressions
**Total: 20 marks**

### Question 1.1 — Student Information *(5 marks)*
Create variables representing a student's:
* First name
* Last name
* Age
* University
* Current year of study

*Use appropriate `let` or `const` declarations.*

### Question 1.2 — Grades *(5 marks)*
Create variables for three course grades. Calculate:
* The total of the three grades
* The average grade

*Store both results in variables and display them.*

### Question 1.3 — Discount Calculation *(5 marks)*
Given:
```javascript
let price = 80;
let quantity = 3;
let discount = 0.10;
```
Calculate the final price after applying the 10% discount to the total cost. Display the final price.

### Question 1.4 — Expressions and Operators *(5 marks)*
Given:
```javascript
let a = 15;
let b = 4;
```
Write JavaScript expressions that determine:
1. The remainder when `a` is divided by `b`
2. `a` raised to the power of `b`
3. Whether `a` is greater than `b`
4. Whether `a` is equal to `b`

*Display the results.*

---

## Part 2 — Operators and Conditions
**Total: 25 marks**

### Question 2.1 — Grade Classification *(10 marks)*
Write a program that receives a student's average grade and displays the appropriate result:

| Average Grade | Result |
| :--- | :--- |
| 90 or above | Excellent |
| 80–89 | Very Good |
| 70–79 | Good |
| 50–69 | Pass |
| Below 50 | Fail |

*Use an `if...else if...else` structure.*

### Question 2.2 — Age Conditions *(5 marks)*
Create a variable called `let age;`. Write conditions that determine whether a person:
* Can vote — age is 18 or above
* Can receive a student discount — age is 16 or above

*Use logical operators where appropriate.*

### Question 2.3 — Login Validation *(5 marks)*
Given:
```javascript
let username = "student";
let password = "js123";
```
Write a condition that prints `Login successful` **only** when both the username and password are correct. Otherwise, print `Invalid credentials`.

*Use the logical AND operator (`&&`).*

### Question 2.4 — Equality Operators *(5 marks)*
Explain, using comments in your JavaScript code, the difference between:
* `==`
* `===`

Then provide an example demonstrating the difference.

---

## Part 3 — Objects
**Total: 25 marks**

### Question 3.1 — Create a Student Object *(10 marks)*
Create an object called `student` containing at least the following properties:
* `firstName`
* `lastName`
* `age`
* `studentId`
* `program`
* `year`
* `averageGrade`

*Choose suitable values for each property.*

### Question 3.2 — Access Object Properties *(5 marks)*
Using the `student` object, display:
* The student's full name
* Programme
* Year of study
* Average grade

*Use the object's properties rather than creating duplicate variables.*

### Question 3.3 — Modify the Object *(5 marks)*
Modify the student's:
* `averageGrade`
* `year`

Then add a new property:
* `email`

*Display the updated object or its relevant properties.*

### Question 3.4 — Object Method *(5 marks)*
Add a method called `getStatus()`. The method should return:
* `"Excellent student"` if the average grade is 90 or above
* `"Good student"` if the average grade is 70–89
* `"Needs improvement"` if the average grade is below 70

*Call the method and display its result.*

---

## Part 4 — Integrated Problem: Student Course Registration System
**Total: 30 marks**

In this section, combine your knowledge of variables, expressions, operators, conditions, and objects to create a JavaScript program representing a university course registration system.

### Question 4.1 — Student Object *(Included in Part 4)*
Create a `student` object containing:
```javascript
{
    firstName: "...",
    lastName: "...",
    age: ...,
    program: "...",
    averageGrade: ...,
    creditsCompleted: ...
}
```
*Choose appropriate values for the student.*

### Question 4.2 — Registration Eligibility *(8 marks)*
A student can register for a course if:
* They are at least 18 years old **AND**
* Their average grade is at least 50.

Your program should determine whether the student is eligible and display an appropriate message, for example: `Registration Status: Eligible` or `Registration Status: Not Eligible`.

### Question 4.3 — Course Fee *(8 marks)*
Create the following variable:
```javascript
let courseFee = 500;
```
Apply the following discount rules:

| Average Grade | Discount |
| :--- | :--- |
| 90 or above | 25% |
| 80–89 | 15% |
| 70–79 | 10% |
| Below 70 | 0% |

Calculate and display the final course fee after the applicable discount.

### Question 4.4 — Study Level *(7 marks)*
Use the student's `creditsCompleted` property to determine their study level:

| Credits Completed | Study Level |
| :--- | :--- |
| Less than 30 | Beginner |
| 30–59 | Intermediate |
| 60–119 | Advanced |
| 120 or more | Graduating |

Display the student's study level.

### Question 4.5 — Final Student Report *(7 marks)*
Create a final report using `console.log()`. Your output should be formatted similarly to:

```text
----- STUDENT REPORT -----

Name: Anna Smith
Program: Computer Science
Average Grade: 87
Eligibility: Eligible
Course Fee: €425
Study Level: Advanced

--------------------------
```
