class Field {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.color = "rgba(50, 50, 50, 1)";
  }
}

export default Field;
