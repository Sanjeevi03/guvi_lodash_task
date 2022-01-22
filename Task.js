//max
let a = [99, 12, 34, 56, 34, 67, 1, 2, 98, 3];
var val = a[0];
for (var i = 1; i < a.length; i++) {
  if (a[i] > val) {
    val = a[i];
  }
}
console.log(val);

//join
let a = [1, 2, 3, 4, 5];
let s = "";
for (let i = 0; i < a.length - 1; i++) {
  s = s + a[i] + "-";
}
s = s + a[a.length - 1];
console.log(s);

//union
let a = [2, 3, 4, 5, 6, 1, 2];
let b = [1, 2, 12];

let u = [];
for (let i of a) {
  if (!u.includes(i)) {
    u.push(i);
  }
}
for (let i of b) {
  if (!u.includes(i)) {
    u.push(i);
  }
}
console.log(u);

//sum
let a = [1, 2, 3, 4, 5];

let d = a.reduce((a, b) => {
  return a + b;
});
console.log(d);

//capitalize
let a = "this is BOOK aNd Pen";
let b = a.split(" ");
let arr = [];
for (let i of b) {
  i = i[0].toUpperCase() + i.slice(1).toLowerCase();
  arr.push(i);
}
console.log(...arr);
