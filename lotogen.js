function loto(count, min, max) {

    var arr = [];

    for (var i = 0; i < count; i++) {

        do {
            var newNum = getInRange(min, max);
        }
        while (arr.indexOf(newNum) !== -1)
        arr.push(newNum)

    }
    return arr;
}

function getInRange(min, max) {
    return Math.floor(Math.random() * (max-min))+min;
}




document.write(loto(6, 1, 49));




