// IMPLEMENTATION
function CircularArray(maxLength) {
  this.maxLength = maxLength;
}

CircularArray.prototype = Object.create(Array.prototype);

CircularArray.prototype.push = function(element) {
  Array.prototype.push.call(this, element);
  while (this.length > this.maxLength) {
    this.shift();
  }
}

// USAGE
var ca = new CircularArray(2);
var i;

for (i = 0; i < 100; i++) {
  ca.push(i);
}

console.log(ca[0]);
console.log(ca[1]);
console.log("Length: " + ca.length);
