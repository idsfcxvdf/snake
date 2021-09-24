class View {
  renderField(canvas, context, color) {
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  renderHead(context, coordinates, size, color) {
    context.fillStyle = color;
    context.fillRect(
      coordinates.coordinatesX,
      coordinates.coordinatesY,
      size,
      size
    );
  }

  renderTail(context, tailArr, size, color) {
    context.fillStyle = color;
    tailArr.forEach((tail) => {
      context.fillRect(tail.coordinatesX, tail.coordinatesY, size, size);
    });
  }

  renderApple(context, coordinates, size, color) {
    context.fillStyle = color;
    context.fillRect(
      coordinates.coordinatesX,
      coordinates.coordinatesY,
      size,
      size
    );
  }
}

export default View;
