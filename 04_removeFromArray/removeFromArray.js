const removeFromArray = function(array, ...toRemoveArray) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let isInArray = false;
        for (let j = 0; j < toRemoveArray.length; j++) {
            if (array[i] === toRemoveArray[j]) {
                isInArray = true;
                break;
            }
        }
        if (!isInArray) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
