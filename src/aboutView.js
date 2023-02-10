import backgroundImg from './img/shop-ceiling-maricar-limjoco.jpeg';

const aboutView = (function () {
  function renderAboutContent() {
    const aboutEl = document.createElement('main');
    aboutEl.classList.add('about-section');
    aboutEl.classList.add('content-wrapper');

    aboutEl.innerHTML = `
     
        <div class="img-overlay"></div>
        <img src="${backgroundImg}" alt="Shop ceiling by Maricar Limjoco" />
        <span class="shop-front-caption">
          <a href="https://unsplash.com/@icalimjoco target="_blank" >
            Maricar Limjoco on Unsplash</a>
        </span>
    
    
        <h1 class="about-title">
        Great Food Comes First.
        </h1>
        <p class="about-desc">
        Every day, more than 11 million guests visit <b>HUNGER POINT</b> restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food. Founded in 1954, <b>HUNGER POINT</b> is the second largest fast food hamburger chain in the world. The original Home of the Whopper, our commitment to premium ingredients, signature recipes, and family-friendly dining experiences is what has defined our brand for more than 50 successful years.
        </p>
    `;

    return aboutEl;
  }

  return {
    renderAboutContent,
  };
})();

export default aboutView;
