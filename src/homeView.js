import plateImg from './img/curry-dish-meet.png';

const homeView = (function () {
  function renderHomeContent() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-section');
    homeContent.classList.add('content-wrapper');

    homeContent.innerHTML = `
    <main>
      <div class="history">
        <img src="${plateImg}" alt="Background image" class="history-background-img"/>
        <strong class="history-title">Established in 1999</strong>
        <p class="history-desc">
          Every day, more than 11 million guests visit <b>HUNGER POINT</b> restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food. Founded in 1954, <b>HUNGER POINT</b> is the second largest fast food hamburger chain in the world. The original Home of the Whopper, our commitment to premium ingredients, signature recipes, and family-friendly dining experiences is what has defined our brand for more than 50 successful years.
        </p>
      </div>
    </main>`;

    return homeContent;
  }

  return { renderHomeContent };
})();

export default homeView;
