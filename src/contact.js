import header from "./header.js";

const section = document.createElement("section");
section.className = "contact-page";
section.innerHTML = `
  <h2>contact us</h2>
  <div class="contact-info">
    <div class="map">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1Zl8r9dNkuYWGH4qH7ep16RxCvaM&hl=en_US&ehbc=2E312F"
      ></iframe>
    </div>
    <div class="details">
      <div class="address">
        <h3>Address</h3>
        <p>123 Fake Street</p>
        <p>San Francisco, CA 94105</p>
      </div>
      <div class="hours">
        <h3>Hours</h3>
        <p>Weekdays</p>
        <p>6pm - 12am</p>
        <p>Weekends</p>
        <p>5pm - 4am</p>
      </div>
      <div class="contacts">
        <h3>Email</h3>
        <p>bobalabs@bobalabs.com</p>
        <h3>Phone Number</h3>
        <p>555-555-5555</p>
      </div>
    </div>
  </div>
`;

const render = (target) => {
  target.appendChild(header);
  target.appendChild(section);
};

export default render;
