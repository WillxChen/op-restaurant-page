import header from "./header.js";

const section = document.createElement("section");
section.className = "menu-page";
section.innerHTML = `


<h2>our menu</h2>
<div class="cocktail-menu">
  <div class="cocktails">
    <h3>Signature Cocktails</h3>
    <div class="drink">
      <p>Lychee Sparkler</p>
      <p>
        Sparkling Wine, High Mountain Oolong Tea, Lychee Syrup, Boba
        Pearls
      </p>
    </div>
    <div class="drink">
      <p>Matcha Martini</p>
      <p>
        Matcha Green Tea-infused Vodka, Simple Syrup, Vanilla Bean, Boba
        Pearls
      </p>
    </div>
    <div class="drink">
      <p>Mango Tango</p>
      <p>
        Tequila, Mango Puree, Lime Juice, White Tea, Popping Mango
        Caviar
      </p>
    </div>
    <div class="drink">
      <p>Passion Fruit Boba Fizz</p>
      <p>Gin, Passion Fruit Juice, Tonic Water, Popping Peach Caviar</p>
    </div>
    <div class="drink">
      <p>Wonlong Sunrise</p>
      <p>
        Yellow dragon Fruit infused Vodka, Lemonade, Blue Curacao, Boba
        Pearls
      </p>
    </div>
    <div class="drink">
      <p>Strawberry Basil Smash</p>
      <p>Vodka, Fresh Strawberries, Basil, Boba Pearls</p>
    </div>
  </div>
  <div class="cocktails">
    <h3>Specialty Cocktails</h3>
    <div class="drink">
      <p>Thai Tea Boba-tini</p>
      <p>
        Spiced Rum, Thai Tea Infusion, Sweetened Condensed Milk, Boba
        Pearls
      </p>
    </div>
    <div class="drink">
      <p>Salted Caramel Boba White Russian</p>
      <p>
        Salted Caramel, Vietnamese Coffee Liqueur, Vodka, Milk Tea, Boba
        Pearls
      </p>
    </div>
    <div class="drink">
      <p>Irish Cream Brown Sugar Milk Tea</p>
      <p>
        Irish Cream Liqueur, Black Tea, Cream, Brown Sugar, Boba Pearls
      </p>
    </div>
    <div class="drink">
      <p>Luxe Lychee</p>
      <p>
        Lychee Soju, Lychee Juice, Coconut Milk, Honey, Gold Flake, Boba
        Pearls
      </p>
    </div>
    <div class="drink">
      <p>Earl Grey Old Fashioned</p>
      <p>
        Earl Grey Tea-Infused Bourbon, Simple Syrup, Aromatic Bitters,
        Mint
      </p>
    </div>
    <div class="drink">
      <p>Lavender Rose Milk Tea Punch</p>
      <p>
        Lavender-Infused Gin, Rose Essence, Oriental Beauty Tea, Lemon
        Juice, Lavender Sprig Garnish.
      </p>
    </div>
  </div>
  <div class="alchemy cocktails">
    <h3>Alchemy Lab</h3>
    <div class="drink">
      <p>Spherified Fruit Martini</p>
      <p>
        A visually stunning martini where fruits like strawberries,
        melons, or grapes are transformed into flavorful gelatinous
        spheres, suspended in a clear vodka or gin base.
      </p>
    </div>
    <div class="drink">
      <p>Edible Mist Martini</p>
      <p>
        A molecular twist on the classic martini, where the cocktail is
        served in a glass filled with a flavorful edible mist on a bed
        of smoky char siu cotton candy that adds a burst of aroma and
        taste with every sip.
      </p>
    </div>
    <div class="drink">
      <p>Frozen Nitro Oolong Tea</p>
      <p>
        A frozen milk tea concoction infused with the smoothness of
        liquid nitrogen, resulting in a velvety texture and a dramatic,
        billowing vapor effect when served.
      </p>
    </div>
    <div class="drink">
      <p>Boba Bubble Blast</p>
      <p>
        A milk tea-based cocktail infused with carbonation, creating
        fizzy boba bubbles that burst with delightful flavors as you
        sip.
      </p>
    </div>
    <div class="drink">
      <p>Levitating Citrus Fizz</p>
      <p>
        A whimsical concoction featuring levitating citrus slices
        suspended in a sparkling gin and tonic, achieved through the use
        of magnetic levitation techniques.
      </p>
    </div>
    <div class="drink">
      <p>Molecular Taro Delight</p>
      <p>
        A milk tea cocktail featuring taro-infused milk, taro-flavored
        boba pearls, and taro-flavored gel cubes, providing a
        multi-layered and indulgent experience.
      </p>
    </div>
  </div>
</div>
`;

const render = (target) => {
  target.appendChild(header);
  target.appendChild(section);
};

export default render;
