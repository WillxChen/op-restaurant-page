import header from "./header.js";

const section = document.createElement("section");
section.className = "landing";
section.innerHTML = `
<h1>boba^Lab</h1>
<h2>imagination </br>
  &#10005; </br>
  innovation</h2>
<img src="../src/imgs/OIG-removebg-preview.png" alt="" />
`;

const render = (target) => {
  target.appendChild(header);
  console.log(header);
  target.appendChild(section);
};

export default render;
