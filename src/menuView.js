import menuMeat from './img/curry-logo.png';
import menuSeafood from './img/curry-dish-seafood.png';
import menuVeg from './img/curry-dish-vegetable.png';
import menuOther from './img/curry-dish-other.png';
import menuKids from './img/curry-dish-kids.jpg';
import menuSides from './img/curry-dish-sides.png';

const menuView = (function () {
  function renderMenuContent() {
    const menuEl = document.createElement('main');
    menuEl.classList.add('menu-section');
    menuEl.classList.add('content-wrapper');

    menuEl.innerHTML = `
        <div class="menu-header">
            <div class="menu-header-title">About the menu</div>
            <div class="menu-desc">We offer various Foods such as Vegeterian, seafood, and Non-Vegeterian at HUNGER POINT.</div>
        </div>    
        <div class="menu-grid">
            <div class="menu-item item-meat">
                <img src="${menuMeat}" alt="Meat menu" class="menu-img"/>
                <span class="menu-title">Burgers</span>
            </div>
            <div class="menu-item item-seafood">
                <img src="${menuSeafood}" alt="Seafood menu" class="menu-img"/>
                <span class="menu-title">Coffee</span>
            </div>
            <div class="menu-item item-veg">
                <img src="${menuVeg}" alt="Vegetable menu" class="menu-img"/>
                <span class="menu-title">Noodles</span>
            </div>
            <div class="menu-item item-other">
                <img src="${menuOther}" alt="Other dishes" class="menu-img"/>
                <span class="menu-title">Fries</span>
            </div>
            <div class="menu-item item-kids">
                <img src="${menuKids}" alt="Kid's menu" class="menu-img"/>
                <span class="menu-title">Pizza</span>
            </div>
            <div class="menu-item item-sides">
                <img src="${menuSides}" alt="Sides menu" class="menu-img"/>
                <span class="menu-title">Wraps</span>
            </div>
        </div>
    `;

    return menuEl;
  }

  return {
    renderMenuContent,
  };
})();

export default menuView;
