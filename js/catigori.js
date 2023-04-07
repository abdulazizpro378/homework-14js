let homeContent1 = document.querySelector(".home-content1");

function getProductCard1({ img, name }) {
  return `
    <div class="home-card">
      <div class="card-body">
        <img src="${img}" alt="" />
      </div>
      <div class="card-footer">
        <p class='p'>${name}</p>

      </div>
   </div>
    `;
}

massiv34.forEach((el) => {
  homeContent1.innerHTML += getProductCard1(el);
});
