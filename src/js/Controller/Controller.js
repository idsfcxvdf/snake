class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  keyboardHandler() {
    window.addEventListener("keydown", (key) => {
      if (
        key.code === "ArrowUp" ||
        key.code === "ArrowDown" ||
        key.code === "ArrowLeft" ||
        key.code === "ArrowRight"
      ) {
        this.model.head.changeDirection(key.code);
      }
    });
  }

  game() {
    this.keyboardHandler();

    const step = () => {
      this.model.tail.move(this.model.head.coordinates);
      this.model.head.move();
      this.model.head.teleport(this.model.field.canvas);
      this.model.tail.damage(this.model.head.coordinates);
      this.model.head.eat(this.model.apple, this.model.tail);

      this.view.renderField(
        this.model.field.canvas,
        this.model.field.context,
        this.model.field.color
      );
      this.view.renderHead(
        this.model.field.context,
        this.model.head.coordinates,
        this.model.head.size,
        this.model.head.color
      );
      this.view.renderTail(
        this.model.field.context,
        this.model.tail.tailArr,
        this.model.tail.size,
        this.model.tail.color
      );
      this.view.renderApple(
        this.model.field.context,
        this.model.apple.coordinates,
        this.model.apple.size,
        this.model.apple.color
      );
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }
}

export default Controller;
