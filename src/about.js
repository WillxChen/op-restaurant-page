import header from "./header.js";

const section = document.createElement("section");
section.className = "about-page";
section.innerHTML = `
  <figure>
    <img src="../src/imgs/imansyah-muhamad-putera-KchIV_GDy6U-unsplash.jpg" alt="">
    <figcaption>Photo by <a href="https://unsplash.com/@imansyahmp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Imansyah Muhamad Putera</a> on <a href="https://unsplash.com/photos/KchIV_GDy6U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </figcaption>
  </figure>
  <div class="profile">
    <h2>who are we</h2>
    <p>Welcome to <span>boba^Lab</span>, where mixology meets molecular gastronomy to redefine the boba experience.</br> 
      Step into our modernist alcoholic boba bar, where we put a unique twist on traditional boba drinks. </br>
      We believe that cocktails should be an <strong>experience</strong>, a fusion of art and science. </br>
    </p>
    <p>
      <strong>We don't just serve drinks; we craft memories.</strong>
    </p>
    <p>
      Our bartenders are not just mixologists but artists, passionately dedicated to delivering a memorable and immersive experience. </br>
      Through meticulous craftsmanship, we transform carefully selected ingredients into a sensory narrative. </br>
      Each element holds its own story, sourced for quality and cultural significance. 
    </p>
    <p>
      With measured precision, we blend these elements, creating a symphony of flavors that transports you on a captivating journey.
      Every sip tells a tale, inviting you to savor the rich narratives woven into our thoughtfully crafted cocktails. </br>              
      Allow us to guide you through an enchanting expedition of exquisite flavors and captivating sensations. </br>
    </p>
    <p>
      <em>
        Here's to pushing the boundaries of boba, crafting molecular cocktails that redefine the art of mixology, one sip at a time.
      </em>
    </p>    
    <div class="signature">
      <p>&mdash; Will</p>
      <i>Founder and CEO</i>
    </div>
  </div>
`;

const render = (target) => {
  target.appendChild(header);
  target.appendChild(section);
};

export default render;
