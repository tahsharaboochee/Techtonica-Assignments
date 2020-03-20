/*
There are two string arrays; capitals and countries.

'capitals' is a sorted array with names of capital cities.
'countries' is an unodered array with names of countries corresponding to the capitals.

Write a function which takes two array of strings - capitals and countries  
 -and a city-name string as parameters. 
 The city-name is present in the capitals array.
 Find the country name corresponding to the city-name.
 
 The search should be efficient and with complexity < O(n)
 Hints - binary search
*/

function findCountry(capitals, countries, city) {
  // find the index of capital
  // the index of the country is same as that of the capital, which we found
  let capitalIndex = findCapital(capitals, 0, capitals.length, city);

  // Using the index, find the country
  let country = countries[capitalIndex];

  // return the country name
  return country;
}

function findCapital(capitals, start, end, city) {
    let middle = Math.floor((start + end) / 2);
    while(capitals[middle] !== city && start <= end) {
        if(city < capitals[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return capitals[middle] === city ? middle : -1;
}
const capitals = ["Aden", "Algiers", "Baghdad", "Baku",
    "Berlin", "Rabat", "Tehran", "Tripoli", "Tunis"];
const countries = ["Yemen", "Algeria", "Iraq", "Azerbaijan",
    "Germany", "Morocco", "Iran", "Libya", "Tunisia"];
console.log(findCountry(capitals, countries, "Rabat"));
