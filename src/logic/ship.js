const Ship = (coordinates) => {
    let hitCounter = 0
    const hit = function () {
        return hitCounter += 1;
    }
    return {hit, coordinates, hitCounter};
}

export {Ship};

