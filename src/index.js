import soma from "./calc.js";
import Heading from "./components/heading.js";

console.log("Testando webpack 2");

soma(2, 4);
soma(2, 3);

// Loaders

const heading = new Heading("Este título é dinâmico");
const heading2 = new Heading("Este título é dinâmico2");

heading.create();
heading2.create();
