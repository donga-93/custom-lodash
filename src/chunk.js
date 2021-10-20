function chunk(array, size = 1) {
    let newArray = [];
        let length = Math.ceil(array.length / size);
        for (let i = 0; i < length; i++){
            newArray[i] = [];
            for (let j = 0; j < size; j++) {
                if (i * size + j >= array.length){
                    break;
                }

                newArray[i][j] = array[i*size + j];
            }
        }
        return newArray;
}

module.exports = chunk