// // Write your solution here!
// let cats = ["Milo", "Otis", "Garfield"];
// function destructivelyAppendCat(name) {
//     cats.push(name);
// }
// function destructivelyPrependCat(name) {
//     cats.unshift(name);
// }
// function destructivelyRemoveLastCat() {
//     cats.pop();
// }
// function destructivelyRemoveFirstCat() {
//     cats.shift();
// }
// function appendCat(name) {
//     let newArr = [...cats, name];
//     return newArr;
// }
// function prependCat(name) {
//     let newArr = cats.slice();
//     newArr.unshift(name);
//     return newArr;
// }
// function removeLastCat() {
//     let newArr = [...cats];
//     newArr.pop();
//     return newArr;
// }
// function removeFirstCat() {
//     let newArr = cats.slice();
//     newArr.shift();
//     return newArr;
// }

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}
function appendCat(name) {
    let newArr = cats.slice();
     newArr.push(name);
     return newArr;
}
function prependCat(name) {
    let newArr = [name, ...cats];
    return newArr;
}

function removeLastCat() {
    let newArr = [...cats];
    newArr.pop();
    return newArr;
}

function removeFirstCat() {
    let newArr = [...cats];
    newArr.shift();
    return newArr;
}