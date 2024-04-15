const Ship = {
    Ship: (coordinates, hitCounter = 0) => {
      return {coordinates, hitCounter};
    },
    hit: function () {
        return 'hit'
    },
    sunk: function () {

    },
}

module.exports = Ship;
