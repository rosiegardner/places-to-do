// function placesVisted () {
//   let visit= "Idaho"; {
//     return places;
//   }
// }

// visit.places.forEach(function(places) {
//   console.log("Lets go to " + places.name + "!");
// });
let pdx = { name: "Portland"};
let sfo = { name: "San Francisco"};
let sea = { name: "Seattle"};
let usa = { name: "United States of America", cities: [pdx, sfo, sea] };



function placesVisited(placesVisited, activities, season) {
  this.placesVisited = placesVisited;
  this.activities = activities;
  this.season = season;
}

const fmmk = "Farmers Market";
const pard = "party and parades";
const hkc = "hike and Coffee";
let season = ['winter', 'summer', 'spring', 'fall']
const activities = [fmmk, pard, hkc]

let placeToVisit1 = new Visit(pdx, fmmk, season[1]);
let placeToVisit2 = new Visit(sfo, pard, season.push('anytime'));
let placeToVisit3 = new Visit(sea, hkc, season[3]);


usa.cities.forEach(function(placesVisited) {
  console.log ("When you visit " + city[1] + " in " + season[1] + " make sure you go to the " + placesVisited.activities[0]);
});

// placesVisited.prototype.planTrip = function(id) {
  if (this.placeToVisit1)
}
