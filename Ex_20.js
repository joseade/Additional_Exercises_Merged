class Triangle {
  constructor(side, parent) {
    this.side = side;
    this.height = (this.side * Math.sqrt(3)) / 2;
    const container = document.createElement("div");
    container.className = "container-fractal";
    container.style.position = "relative";
    container.style.width = `${this.side}px`;
    container.style.height = `${this.height}px`;
    parent.append(container);

    const equilateral = document.createElement("div");
    equilateral.className = "equilateral";
    equilateral.style.width = "0px";
    equilateral.style.height = "0px";
    equilateral.style.borderRight = `${this.side / 2}px solid transparent`;
    equilateral.style.borderLeft = `${this.side / 2}px solid transparent`;
    equilateral.style.borderBottom = `${this.height}px solid salmon`;

    container.append(equilateral);

    const equilateralFlip = document.createElement("div");
    equilateralFlip.className = "equilateral-flip";
    equilateralFlip.style.width = "0px";
    equilateralFlip.style.height = "0px";
    equilateralFlip.style.borderRight = `${this.side / 4}px solid transparent`;
    equilateralFlip.style.borderLeft = `${this.side / 4}px solid transparent`;
    equilateralFlip.style.borderBottom = `${this.height / 2}px solid yellow`;
    equilateralFlip.style.position = "absolute";
    equilateralFlip.style.bottom = "0px";
    equilateralFlip.style.left = "25%";
    equilateralFlip.style.transform = "rotate(180deg)";
    container.append(equilateralFlip);

    this.element = container;
  }
  left() {
    const t = new Triangle(this.side / 2, this.element);
    t.element.style.position = "absolute";
    t.element.style.bottom = "0%";
    return t;
  }
  right() {
    const t = new Triangle(this.side / 2, this.element);
    t.element.style.position = "absolute";
    t.element.style.left = "50%";
    t.element.style.bottom = "0%";
    return t;
  }
  center() {
    const t = new Triangle(this.side / 2, this.element);
    t.element.style.position = "absolute";
    t.element.style.left = "25%";
    t.element.style.top = "0%";
    return t;
  }
  getSons() {
    return [this.center(), this.left(), this.right()];
  }
}

const printTriangle = (iteration) => {
  const queue = [];
  if (iteration > 1) {
    for (let j = 0; j < iteration - 1; j++) {
      if (j === 0) {
        queue.push(
          ...new Triangle(500, document.querySelector(".container")).getSons()
        );
        continue;
      }
      const aux = [];
      while (queue.length > 0) {
        aux.push(...queue.shift().getSons());
      }
      queue.push(...aux);
    }
    return;
  }
  return new Triangle(500, document.querySelector(".container"));
};

const initialConfiguration = (side) => {
  height = (side * Math.sqrt(3)) / 2;
  const container = document.createElement("div");
  container.className = "container-fractal";
  container.style.position = "relative";
  container.style.width = `${side}px`;
  container.style.height = `${height}px`;
  document.querySelector(".container").append(container);

  const equilateral = document.createElement("div");
  equilateral.className = "equilateral";
  equilateral.style.width = "0px";
  equilateral.style.height = "0px";
  equilateral.style.borderRight = `${side / 2}px solid transparent`;
  equilateral.style.borderLeft = `${side / 2}px solid transparent`;
  equilateral.style.borderBottom = `${height}px solid salmon`;

  container.append(equilateral);
};
initialConfiguration(500);

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const iteration = document.getElementById("iteration").value;
  console.log(iteration);
  document.querySelector(".container").innerHTML = "";
  if (iteration === 0) {
    console.log("AAA");
    initialConfiguration(500);
  }
  if (iteration > 0) {
    printTriangle(iteration);
  }
});
