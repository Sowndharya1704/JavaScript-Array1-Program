//Removing array items by index
let indexForRemoval = 4;
let numArray = [1,3,7,11,15];
numArray.splice(indexForRemoval,1);
console.log("Array Elements After Removing Element At Index: " + indexForRemoval + " is " + numArray);

// Inserting items at a Specific position
function insertElement() {
    let arr = [1, 2, 3, 4, 5];
    let index = 2;
    let element = -99;
arr.splice(index, 0, element);
    console.log(arr);
}
insertElement();

//Array spreading
const arr1=[1,2,3,4];
const arr2=[5,6,7,8,];
const combine=[...arr1,...arr2];
console.log(combine);

// Finding the longest String in an array
let arr = [
    "I am a fullstack developer",
    "I am learning java",
    "I am learning html"
];
function longestString() {
    return arr.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
console.log(longestString());


//array rotation
function rotatearray(arr, rotateBy) {
    const n = arr.length;
    rotateBy %= n;
 
    return arr.slice(rotateBy).concat(arr.slice(0, rotateBy));
}
 
const originalArray = [1, 2, 3, 4, 5];
const rotatedarray = rotatearray(originalArray, 2);
console.log(rotatedarray);
