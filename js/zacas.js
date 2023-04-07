let homeContent = document.querySelector(".home-content");
let searchInput = document.querySelector(".search-prodact");
let paganition = document.querySelector(".paganation-row");

function getProductCard({ img, name, desc, name_price }) {
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

 let serch = search_card_products.slice(0, 8);

function getpro(data = serch) {
  homeContent.innerHTML = "";
  data.forEach((el) => {
    homeContent.innerHTML += getProductCard(el);
  });
}

getpro();

searchInput.addEventListener("input", function () {
  let searcProdauct = serch.filter(
    (el) =>
      el.name.toLocaleLowerCase().includes(this.value.toLocaleLowerCase()) ||
      el.desc.toLowerCase().includes(this.value.toLowerCase())
  );
  getpro(searcProdauct);
});

// paganationni davomi

// let Itemarry = [];
// let paganationItem = "";

// for (let i = 0; i <= Math.ceil(search_card_products.length / 8); i++) {
//   Itemarry.push(i);
// }

// Itemarry.forEach((el) => {
//   paganationItem.innerHTML += `<li class="page-item"><a class="page-link" href="#">${el}</a></li>`;
// });

// paganition.innerHTML = `

//   <ul class="pagination">
//     <li class="page-item">
//       <a class="page-link" href="#" aria-label="Previous">
//         <span aria-hidden="true">&laquo;</span>
//       </a>
//     </li>
//       ${paganationItem}
//     <li class="page-item">
//       <a class="page-link" href="#" aria-label="Next">
//         <span aria-hidden="true">&raquo;</span>
//       </a>
//     </li>
//   </ul>

//   `;


// caticoriy pageni ham js wu zakasida 




