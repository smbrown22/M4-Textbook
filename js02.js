/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: 
      Date:   

      Filename: js02.js
 */
const EMP_COST = 100;
const BOOK_COST = 350;
const REPRO_COST = 1250;
const TRAVEL_COST = 2;
window.addEventListener("load" , setupForm)
      
function getEstimate() {
      let totalCost = 0;
      let photographers = document.getElementById("photoNum").value;
      let hours = document.getElementById("photoHrs").value;
      let distance = document.getElementById("photoDist").value;
      let buyBook = document.getElementById("makeBook").checked;
      let buyRights = document.getElementById("photoRights").checked;
      totalCost += photographers * hours * EMP_COST; 
      totalCost += photographers * distance * TRAVEL_COST; 
      totalCost += buyBook ? BOOK_COST : 0; 
      totalCost += buyRights ? REPRO_COST : 0;
      document.getElementById("estimate").innerHTML = "$" + totalCost; 
      }
      
window.addEventListener("load" , setupForm)
// set the forms default values
function setupForm() {
      document.getElementById("photoNum").value =1;
      document.getElementById("photoHrs").value =2;
      document.getElementById("makeBook").checked = false;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;
}
getEstimate();

document.getElementById("photoNum").onchange = getEstimate;
document.getElementById("photoHrs").onchange = getEstimate;
document.getElementById("photoDist").onchange = getEstimate; 
document.getElementById("makeBook").onchange = getEstimate; 
document.getElementById("photoRights").onchange = getEstimate; 

// declare global constants for the application 

