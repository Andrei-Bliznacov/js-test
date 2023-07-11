
// ====== TASK 1 =====

const arr1 = [5, 2, 3, 1, 4];
const arr2 = [34, 23, 52, 12, 3];
const arr3 = [7, 6, 5, 5, 3, 4];

function isConsistent(arr) {

    const sortedArr = arr.sort((a, b) => a - b);

    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] !== sortedArr[i - 1] + 1) {
            return false;
        }
    }
    return true;
}


const firstResult = isConsistent(arr1);
console.log(firstResult);


// ======= TASK 2 =======

const firstArr = [1, 3, 2, 2, 4, 3, 5, 6, 5];
const secondArr = [9, 9, 9, 9, 9];
const thirdArr = [1, 2, 3, 4, 5];

function getSortedUniqueArray(arr) {

    const newUniqueArr = [...new Set(arr)];

    newUniqueArr.sort((a, b) => a - b);

    return newUniqueArr;
}

const secondResult = getSortedUniqueArray(firstArr);
console.log(secondResult);

//   ======== Task 3 ========

const arr = [1, 3, 2, 2, 4, 3, 5, 6, 5];

function getRepetedCount(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i]
        const object = newArr.find(el => el[key]);
        if (object) {
            object[key] = object[key] + 1;
        } else {
            const newObj = {};
            newObj[key] = 1;
            newArr.push(newObj);
        }
    }
    return newArr;
}
const thirdResult = getRepetedCount(arr)
console.log(thirdResult);