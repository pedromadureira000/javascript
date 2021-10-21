const arr = ['badger', 'beaver', 'baddon']
// ----------------------------/ Array /-------------------------------

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); 
// }

// // ---------------

// for (const e of arr) {
//     console.log(e)
// }

// // ---------------

// arr.forEach( v => console.log(v)) // this is faster then for loop

// ---------------------------/ object /-------------------------------------

const equine = { horse: 'horse', zebra: 'zebra', unicorn: 'unicorn'}

// for (const key in equine) {
//     console.log(equine[key] )
// }

for (const v of Object.values(equine)) {
    console.log(v)
}
 
//if you want to mantains the order of the keys in which they were inserted you definitly want to use a map

const equines = new Map(
    Object.entries({horse: 'horse', zebra: 'zebra', unicorn: 'unicorn'})
);

for (const v of equines.values()){
    console.log(v)
};

//----------------------------/ comparision

const arr1 = ['1', '2', '3']
const isThereSomeThree = arr1.some(v => v === '3')
console.log(isThereSomeThree)


const arr2 = [1, 2, 3]
const isLowerThen4 = arr2.every(v => v < 4)
console.log(isLowerThen4)

//------/reduce
const string = ['car', 'bicicle', 'something', 'car', 'other']

const stringCount = string.reduce((acc, cur) => {
    return acc + (cur === 'car' ? 1 : 0)
}, 0);  // this is the starting value to acumulate from

console.log(stringCount)

