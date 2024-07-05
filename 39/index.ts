// 39.City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city:string,country:string):string{
    return `${city},${country}`
};
let c1 = city_country("Karachi","Pakistan");
let c2 = city_country("Tokyo","Japan");
let c3 = city_country("Chicago","United States of America");
console.log(c1);
console.log(c2);
console.log(c3);
