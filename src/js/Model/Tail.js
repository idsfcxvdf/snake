import Snake from "./Snake";

class Tail extends Snake {
  constructor() {
    super();
    this.count = 5;
    this.tailArr = [];
  }

  move(coordinatesHead) {
    this.tailArr.push({
      coordinatesX: coordinatesHead.coordinatesX,
      coordinatesY: coordinatesHead.coordinatesY,
    });
    while (this.tailArr.length > this.count) {
      this.tailArr.shift();
    }
  }

  damage(coordinatesHead) {
    this.tailArr.forEach((tail) => {
      if (
        tail.coordinatesX === coordinatesHead.coordinatesX &&
        tail.coordinatesY === coordinatesHead.coordinatesY
      ) {
        this.count = 5;
      }
    });
  }

  add() {
    this.count += 5;
  }
}

export default Tail;
