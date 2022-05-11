// creates the <table> element
var tableElem = document.createElement("table");

// creates the table rows with the <tr> element
var rowElem1 = document.createElement("tr");
var rowElem2 = document.createElement("tr");
var rowElem3 = document.createElement("tr");

// creates a <td> for the table data
var tdElem1 = document.createElement("td");
var tdElem2 = document.createElement("td");
var tdElem3 = document.createElement("td");
var tdElem4 = document.createElement("td");
var tdElem5 = document.createElement("td");
var tdElem6 = document.createElement("td");
var tdElem7 = document.createElement("td");
var tdElem8 = document.createElement("td");
var tdElem9 = document.createElement("td");

// creates the text that will be populated in the <td> elements
var textEntry1a = document.createTextNode("Car");
var textEntry2a = document.createTextNode("Top Speed");
var textEntry3a = document.createTextNode("Price");
var textEntry1b = document.createTextNode("Chevrolet");
var textEntry2b = document.createTextNode("120mph");
var textEntry3b = document.createTextNode("$10,000");
var textEntry1c = document.createTextNode("Pontiac");
var textEntry2c = document.createTextNode("140mph");
var textEntry3c = document.createTextNode("$14,000");

var docPoint = document.body;  //Starts looking through/ adding to table at the body element

// table creation
docPoint.appendChild(tableElem);  //creates the table
docPoint = docPoint.lastChild;  //moves the "Pointer" to tableElem (last child made)

// table row 1:  Heading Row
docPoint.appendChild(rowElem1);  //adds first row <tr> element
docPoint = docPoint.firstChild;  //moves pointer to the new element
docPoint.appendChild(tdElem1);  //adds first <td> element for table heading
docPoint.appendChild(tdElem2);  //adds second <td> elem
docPoint.appendChild(tdElem3);  //adds third <td> elem
docPoint = docPoint.firstChild;  //Moves pointer to first <td> element

// populate row 1 data
docPoint.appendChild(textEntry1a);  //adds the "cars" text node to 1st <td> element
docPoint = docPoint.nextSibling;  //moves to the next <td> elem in the same <tr>
docPoint.appendChild(textEntry2a); //adds the "top speed" text node
docPoint = docPoint.nextSibling;  //moves to the next adjacent <td> elem
docPoint.appendChild(textEntry3a);  //adds the "price" node

// moves back to table to start next <tr>
docPoint = docPoint.parentNode;  //moves up one layer on the tree to TR elem
docPoint = docPoint.parentNode;  //moves to the table element

// table row 2:  Chevrolet Row
docPoint.appendChild(rowElem2);  //adds second row <tr> element
docPoint = docPoint.lastChild;  //moves pointer to the new element
docPoint.appendChild(tdElem4);  //adds first <td> element for table heading
docPoint.appendChild(tdElem5);  //adds second <td> elem
docPoint.appendChild(tdElem6);  //adds third <td> elem

// populate row 2 data
docPoint = docPoint.firstChild;  //Moves pointer to first <td> element
docPoint.appendChild(textEntry1b);  //adds the "chevrolet" text node to 1st <td> element
docPoint = docPoint.nextSibling;  //moves to the next <td> elem in the same <tr>
docPoint.appendChild(textEntry2b); //adds the "120 mph" text node
docPoint = docPoint.nextSibling;  //moves to the next adjacent <td> elem
docPoint.appendChild(textEntry3b);  //adds the "$10,000" node

// moves back to table to start next <tr>
docPoint = docPoint.parentNode;  //moves up one layer on the tree to TR elem
docPoint = docPoint.parentNode;  //moves to the table element

// table row 3:  Pontiac Row
docPoint.appendChild(rowElem3);  //adds third row <tr> element
docPoint = docPoint.lastChild;  //moves pointer to the new element
docPoint.appendChild(tdElem7);  //adds first <td> element for table heading
docPoint.appendChild(tdElem8);  //adds second <td> elem
docPoint.appendChild(tdElem9);  //adds third <td> elem

// populate row 2 data
docPoint = docPoint.firstChild;  //Moves pointer to first <td> element
docPoint.appendChild(textEntry1c);  //adds the "pontiac" text node to 1st <td> element
docPoint = docPoint.nextSibling;  //moves to the next <td> elem in the same <tr>
docPoint.appendChild(textEntry2c); //adds the "140 mph" text node
docPoint = docPoint.nextSibling;  //moves to the next adjacent <td> elem
docPoint.appendChild(textEntry3c);  //adds the "$14,000" node

// JavaScript Style Objects
tableElem.style.fontStyle = "italic";  // making the font print out italically
tableElem.style.fontFamily = "courier";  // changing the font to courier
rowElem1.style.color = "green";  // changes color each row
rowElem2.style.color = "dark-yellow";
rowElem3.style.color = "red";
tableElem.style.border = "thin solid black";  // provides a border around a table
//  was lloking for a way to fully print a divided table with specific cells
//  Javascript setAttribute()
tableElem.setAttribute("align", "center");  // sets the table to the middle of the page
rowElem1.setAttribute("height", "50");  // allows for space between the rows
rowElem2.setAttribute("height", "50");
rowElem3.setAttribute("height", "50");
rowElem3.setAttribute("width", "25");
