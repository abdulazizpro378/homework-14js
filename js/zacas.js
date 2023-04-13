let homeContent = document.querySelector(".home-content");
let searchInput = document.querySelector(".search-prodact");
let prodactsPgntn = document.querySelector(".prodacts-paganition");
let Yurakposion = document.querySelector(".home-posion");

let active = 1;
function getProductCard({ img, name, desc, id }) {
  return `

  
    <div class="home-card">
    <div class="card-body">
      <img src="${img}" alt="" />
    </div>
    <div class="card-footer">
      <h3>${name}</h3>
      <p>${desc}</p>
      <button class="home-posion"   onclick="addTocart(${id})">
      <img src='./images/${
        cartProducts.find((product) => product.id === id)
          ? "yurak-qizil"
          : "yurak-bosh"
      }.png' alt="logo">
    </button>
        <img src="./images/logo1.svg" alt="logo1">
        <button class="btn">
            В корзину
        </button>
    </div>
  </div>

    `;
}

function getPagnation() {
  let Itemarry = [];
  let paganitionitems = "";

  for (let i = 1; i <= Math.ceil(search_card_products.length / 8); i++) {
    Itemarry.push(i);
  }

  Itemarry.forEach((el) => {
    paganitionitems += ` <li class="page-item ${
      el === active ? "active" : ""
    }" onClick ={getpage(${el})} ><span class="page-link" >${el}</span></li>`;
  });

  prodactsPgntn.innerHTML = `
  ${
    active >= 1
      ? ` <ul class="pagination">
    <li class="page-item" onclick ={getpage("-")}>
    <span class="page-link" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </span>
  </li>`
      : ""
  }
 ${paganitionitems}
  ${
    active < Itemarry.length
      ? `
  <li class="page-item"  onclick ={getpage("+")}>
  <span class="page-link" aria-label="Next">
    <span aria-hidden="true">&raquo;</span>
  </span>
</li>`
      : ""
  }
</ul>    
  `;
}

getPagnation();

// let serch = search_card_products.slice(0, 8);

function getpro(data = search_card_products) {
  homeContent.innerHTML = "";
  let index = active - 1;
  data.slice(index * 8, index * 8 + 8).forEach((el) => {
    homeContent.innerHTML += getProductCard(el);
  });
}

getpro();

// yuqoridagi mapinig

searchInput.addEventListener("input", function () {
  let searcProdauct = search_card_products.filter(
    (el) =>
      el.name.toLocaleLowerCase().includes(this.value.toLocaleLowerCase()) ||
      el.desc.toLowerCase().includes(this.value.toLowerCase())
  );
  getpro(searcProdauct);
});

// paganationni davomi

function getpage(page) {
  if (page == "+") {
    active++;
  } else if (page == "-") {
    active--;
  } else {
    active = page;
  }
  getpro();
  getPagnation();
}

//==

function addTocart(id) {
  let finndedProduct = search_card_products.find((pr) => pr.id === id);

  let checkProduct = cartProducts.find((pr) => pr.id == id);
  if (checkProduct) {
    cartProducts = cartProducts.filter((product) => product.id !== id);
  } else {
    cartProducts.push(finndedProduct);
  }
  localStorage.setItem(CART, JSON.stringify(cartProducts));
  getcart();
  getpro();

}


