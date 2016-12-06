/*
=======================================================

** Week 6 - Project 1 **
*** THE OBJECT OF MY AFFECTION: OBJECTS ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

For any methods that we didn't cover, please refer to the Object Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Discovering new things is fun and a great way to learn!!

BASIC TRACK: 1-13
ADVANCED TRACK: 14-20
=======================================================
*/

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Create an object called "me" that describes you with your name, city, and job title.
//    Display the content of the object in the HTML page.


var me = {
  name: 'Erica',
  city: 'Boulder',
  job: 'Artist and Programmer',
  family: ['Sage', 'Rio', 'Zayante']
};

document.getElementById('q1').innerHTML = 'My name is ' + me.name + ', I live in ' + me.city + ' and my job title is an ' + me.job;




// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members and display in the HTML page.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }


document.getElementById('q2').innerHTML = 'My family is composed of myself, ' + me.name + ', and my three daughters: ' + me.family;




// 3. Using the "me" object, use dot notation and bracket notation to access the value of your city and display the results in the HTML page.



document.getElementById('q3').innerHTML = 'The city I live in is ' + me.city + '. I live in ' + me['city'] + '.' ;





// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };


// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)
document.getElementById('q4').innerHTML = 'Penny\'s dinner choice will be: ' + invitees.adults[0].dinnerChoice[1];

// 5. Access Pablo's table number.
document.getElementById('q5').innerHTML = 'Pablo\'s table number is ' + invitees.children[1].table;
// 6. Access Lauren's seating specialConsideration.
document.getElementById('q6').innerHTML = 'Lauren\'s special seating instructions are: ' + invitees.adults[2].specialConsiderations.seating;
// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)
document.getElementById('q7').innerHTML = 'Billy would like '+ invitees.adults[1].dinnerChoice[2] +' for dessert.';
// 8. Access Ada's allergies.
document.getElementById('q8').innerHTML ='Ada is allergic to ' + invitees.children[2].allergies[0] + '.';
// 9. Create a string that reads Lauren's dinner choice in a sentence.
document.getElementById('q9').innerHTML ="Lauren's appetizer is " + invitees.adults[2].dinnerChoice[0] + '.' + "She will be eating " + invitees.adults[2].dinnerChoice[1] + " for dinner and has selected " + invitees.adults[2].dinnerChoice[2]+ " as her dessert."






// 10. Create an empty object called "jsWorkshop" using Constructor Notation.

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.

// 12. Get the length of the fourth classmate's name.

// 13. Clear the classmates value.
var jsWorkshop = new Object;
jsWorkshop.classmates = ['erica', 'gracie','tom', 'mikala','kevin'];
console.log(jsWorkshop.classmates);
console.log('the fourth classmate, (' + jsWorkshop.classmates[3] + ') in the oject has ' + jsWorkshop.classmates[3].length + ' characters in their name');
jsWorkshop.classmates="";
console.log(jsWorkshop.classmates);




// ADVANCED TRACK
// A. Create an empty object called "books".

// B. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" object.

// Final desired result:
    var books = {ISBN23212:  {
                                title: "A Trumped Up Election, Memoirs of a Nasty Woman",
                                author: "Hillary Clinton",
                                pages: 1207
                              },
                 ISBN98733:  {
                                title: "Can't Believe You Guys Bought My Rhetoric",
                                author: "Prez Donny Trump",
                                pages: 250
                              },
                 ISBN44324:  {
                                title: "A Divided Nation",
                                author: "The American People",
                                pages: 569
                              }
                }
document.getElementById('qa').innerHTML ="'Books' object in console --->"
console.log(books);
// C. Access the author of the first book.
document.getElementById('qc').innerHTML ="'Books' object author's name of first book is " + books.ISBN23212.author;
console.log(books.ISBN23212.author);

// D. Get the length of the author the the third book.
document.getElementById('qd').innerHTML ="'Books' object author's length of name is " + books.ISBN44324.author.length;
console.log(books.ISBN44324.author.length);
// E. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)
books.ISBN23212.dateRead= 2016;
books.ISBN98733.dateRead= 2017;
books.ISBN44324.dateRead = 2018;
console.log(books.ISBN44324.dateRead);
console.log(books.ISBN98733.dateRead);
console.log(books.ISBN23212.dateRead);
document.getElementById('qe').innerHTML ="'Books' object in console --->"
console.log(books);
// F. Remove the second book from the books object.
delete books.ISBN98733;

document.getElementById('qf').innerHTML ="'Books' object after deleting second book " + books;

console.log(books);
// G. Explain, in your own words, the difference between Literal Notation and Constructor Notation.
