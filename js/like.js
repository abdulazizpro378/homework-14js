var btnToggle = document.getElementById("toggle");
const dropdown = document.querySelector(".dropdown");
const likeRow = document.querySelector(".like-row");
const open_btn = document.querySelector(".open-modal");
const close_btn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modal_content = document.querySelector(".modal-content");

function toggle() {
  dropdown.classList.toggle("d-blok");
}

btnToggle.addEventListener("click", toggle);

//

function getcartCart({ img, name, desc, id }) {
  return `
        
        <div class="like-card">
        <div class="like-body">
          <img src="${img}" alt="" />
        </div>
        <div class="like-footer">
          <h3>${name}</h3>
          <p>${desc}</p>
            <img src="./images/logo1.svg" alt="${id}">
       
            <button class="btn3">
                В корзину
            </button>
        
        </div>
    
      </div>
    
        
        `;
}

function getcardpro (){
  cartProducts.forEach((pr) => {
    likeRow.innerHTML += getcartCart(pr);
  });
  
}

getcardpro()