let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});

// Fat arrow notation of the above.

a.forEach((element) => {
  console.log(element);
});

let sililoquy = "To be, or not to be, that is the question:";
Array.from(sililoquy).forEach(function(character) {
  console.log(character);
});


// Sorting an array the anonymous way.

let b = [8, 17, 42, 99];
b.sort(function(a, b) { return a - b; });

// A .forEach loop to print the previous exercise.

b.sort(function(a, b) { return a - b; });
b.forEach(function(num) {
  console.log(num);
});
