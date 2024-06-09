// stringTransform.js
function stringTransform(str) {
    return str.split(' ')
              .map(word => word.split('').reverse().join(''))
              .join(' ');
}

// Example usage:
console.log(stringTransform("Hello World")); // "olleH dlroW"
