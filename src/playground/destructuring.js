// const person = {
//   name: "Reg",
//   age: 23,
//   location: {
//     city: "Chester",
//     temp: 1,
//   },
// };

// const { name = "Anonymous", age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}.`);
// if (city && temperature) {
//   console.log(`It's ${temperature} degrees in ${city}.`);
// }

// const book = {
//   title: "Forever Young",
//   author: "Oliver Kay",
//   publisher: {
//     name: "Quercus",
//   },
// };

// const { name: publisherName = "Self Published" } = book.publisher;
// console.log(publisherName);

// const address = ["7 Denbigh Close", "Wrexham", "Clwyd", "LL12 7TW"];
// const [street, city, county, postcode] = address;

// console.log(`You are in ${city} in the county of ${county}`);

const item = ["coffee", "£2.00", "£2.50", "£.275"];
const [drink, , medium] = item;

console.log(`A medium ${drink} costs ${medium}`);
