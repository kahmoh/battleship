const Ship = (coordinates) => {
    let hitCounter = 0
    const hit = function () {
        return hitCounter += 1;
    }
    const isSunk = function () {
        if (hitCounter >= coordinates.length) {
            return true
        }else {
            return false
        }
    }
    return {hit, isSunk, coordinates, hitCounter};
}

export {Ship};

