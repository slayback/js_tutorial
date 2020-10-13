let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string){
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  })
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// Returns an array of URLs in the form of https://example.com/<urlified form>.
// Takes the states variable

function fullUrl(states){
  return states.map(state => "https://example.com/" + urlify(state));
}
console.log(fullUrl(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Dakotas: String#includes
function functionalDakotas(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(functionalDakotas(states));

// Long Name: Uses regex to return the Dakotas
function functionalLongName(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalLongName(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
      total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));

// product: write a function using reduce that reutrns the product of
// all the elements in an array.
function functionalProduct(elements) {
  return elements.reduce((total, n) => { return total *= n });
}
console.log(functionalProduct(numbers));

// single line: remove the newlines in the solution in 6.9.
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {});
}
console.log(imperativeLengths(states));
