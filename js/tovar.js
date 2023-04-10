var btnToggle = document.getElementById("toggle");
const dropdown = document.querySelector(".dropdown");
const open_btn = document.querySelector(".open-modal");
const close_btn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modal_content = document.querySelector(".modal-content");
const delGations = document.querySelector(".show img");
const indigator = document.querySelector(".indicator ");
const rowroght = document.querySelector(".row-right ");
const TovarContent = document.querySelector(".tovar-content");
const AsiaContent = document.querySelector(".asia-content");


indigator.addEventListener("click", (e) => {
  e.target.src && (delGations.src = e.target.src);
});

function toggle() {
  dropdown.classList.toggle("d-blok");
}

btnToggle.addEventListener("click", toggle);

function modalShow() {
  modal.classList.add("modal-show");
  modal_content.classList.add("modal-content-show");
}

function modalHide() {
  modal.classList.remove("modal-show");
  modal_content.classList.remove("modal-content-show");
}

open_btn.addEventListener("click", modalShow);

close_btn.addEventListener("click", modalHide);

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modalHide();
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modalHide();
  }
});

function getProductCard1({ img, name }) {
  return `
  <div class="hero">
  <img src="${img}" alt="">
  <h3>${name}
    ₽</h3>
</div>
    `;
}

 let res = massiv11.forEach((el) => {
  rowroght.innerHTML += getProductCard1(el);
});


function getTovarCard({ img, name, desc, name_price }) {
  return `

  
    <div class="home-card">
    <div class="card-body">
      <img src="${img}" alt="" />
    </div>
    <div class="card-footer">
      <h3>${name}</h3>
      <p>${desc}</p>
        <img src="./images/logo1.svg" alt="logo1">
        <button class="btn">
            В корзину
        </button>
    </div>
  </div>

    `;
}

search_card_products.slice(0,4).forEach((el) => {
  TovarContent.innerHTML += getTovarCard(el);
});



function getasiaCard({ img, name, desc, name_price }) {
  return `

  
    <div class="home-card">
    <div class="card-body">
      <img src="${img}" alt="" />
    </div>
    <div class="card-footer">
      <h3>${name}</h3>
      <p>${desc}</p>
        <img src="./images/logo1.svg" alt="logo1">
        <button class="btn">
            В корзину
        </button>
    </div>
  </div>

    `;
}

search_card_products.slice(8,12).forEach((el) => {
  AsiaContent.innerHTML += getTovarCard(el);
});
