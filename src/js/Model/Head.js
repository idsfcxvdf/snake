import Snake from "./Snake";

class Head extends Snake {
  constructor() {
    super();
    this.speed = 5;
    this.velocity = {
      velocityX: 0,
      velocityY: 1,
    };
    this.coordinates = {
      coordinatesX: 20,
      coordinatesY: 0,
    };
    this.direction = "Down";
  }

  changeDirection(key) {
    if (key === "ArrowUp") {
      if (this.direction !== "Down") {
        this.velocity.velocityX = 0;
        this.velocity.velocityY = -1;
        this.direction = "Up";
      }
    }
    if (key === "ArrowDown") {
      if (this.direction !== "Up") {
        this.velocity.velocityX = 0;
        this.velocity.velocityY = 1;
        this.direction = "Down";
      }
    }
    if (key === "ArrowLeft") {
      if (this.direction !== "Right") {
        this.velocity.velocityX = -1;
        this.velocity.velocityY = 0;
        this.direction = "Left";
      }
    }
    if (key === "ArrowRight") {
      if (this.direction !== "Left") {
        this.velocity.velocityX = 1;
        this.velocity.velocityY = 0;
        this.direction = "Right";
      }
    }
  }

  move() {
    this.coordinates.coordinatesX += this.speed * this.velocity.velocityX;
    this.coordinates.coordinatesY += this.speed * this.velocity.velocityY;
  }

  teleport(canvas) {
    if (this.coordinates.coordinatesX > canvas.width) {
      this.coordinates.coordinatesX = 0;
    }
    if (this.coordinates.coordinatesX < 0) {
      this.coordinates.coordinatesX = canvas.width;
    }
    if (this.coordinates.coordinatesY < 0) {
      this.coordinates.coordinatesY = canvas.height;
    }
    if (this.coordinates.coordinatesY > canvas.height) {
      this.coordinates.coordinatesY = 0;
    }
  }

  eat(apple, tail) {
    if (
      (this.coordinates.coordinatesX === apple.coordinates.coordinatesX &&
        this.coordinates.coordinatesY === apple.coordinates.coordinatesY) ||
      (this.coordinates.coordinatesX <
        apple.coordinates.coordinatesX + this.size &&
        this.coordinates.coordinatesX + this.size >
          apple.coordinates.coordinatesX &&
        this.coordinates.coordinatesY <
          apple.coordinates.coordinatesY + this.size &&
        this.coordinates.coordinatesY + this.size >
          apple.coordinates.coordinatesY)
    ) {
      apple.spawn();
      tail.add();
    }
  }
}

export default Head;
