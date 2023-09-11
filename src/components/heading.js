import "./heading.css";

class Heading {
  value;
  constructor(text) {
    this.value = text;
  }
  create() {
    const heading = document.createElement("h2");

    heading.innerText = this.value;

    heading.classList.add("main-title");

    document.querySelector("body").appendChild(heading);
  }
}

export default Heading;
