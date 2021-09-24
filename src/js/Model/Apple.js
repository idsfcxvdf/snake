class Apple {
  constructor() {
    this.color = "rgba(187, 41, 68, 1)";
    this.size = 20;
    this.coordinates = {
      coordinatesX: 100,
      coordinatesY: 100,
    };
  }

  spawn() {
    this.coordinates.coordinatesX = Math.random() * 480 + 0;
    this.coordinates.coordinatesY = Math.random() * 480 + 0;
  }
}

export default Apple;
