var btnToggle = document.getElementById("toggle");
const dropdown = document.querySelector(".dropdown");

function toggle() {
  dropdown.classList.toggle("d-blok");
}

btnToggle.addEventListener("click", toggle);



var about = document.querySelector("#about");

var prodactsRow = document.createElement("div");

prodactsRow.className = "prodact-row";

// console.log(prodactsRow);

var prodactscontent = document.createElement("div");

prodactscontent.className = "content";

var prodactstitle = document.createElement("h1");

prodactstitle.className = "prodact-titile";

var pro = document.createElement("a");

pro.href = "#";
pro.innerHTML = "Все продукты >";

prodactstitle.innerHTML = "Акции";

prodactscontent.append(prodactstitle);

prodactscontent.append(pro);

about.firstElementChild.append(prodactsRow);

prodactsRow.append(prodactscontent);

// ----

var container = document.querySelector("#about .container");
var popularCard1 = document.createElement("div");
popularCard1.className = "popular-card1";

container.append(popularCard1);

// popularCard1.style.display = "flex";
// popularCard1.style.gridTemplateColumns = "repeat(4, 1fr)";

function getCard(img, name, price) {
  var popularCard = document.createElement("div");
  popularCard.className = "popular-card";
  var popularCardBody = document.createElement("div");

  var image = document.createElement("img");
  image.src = img;
  popularCardBody.appendChild(image);

  popularCardBody.className = "popular-card-body";

  var popularCardFooter = document.createElement("div");
  popularCardFooter.className = "popular-card-footer";

  var title = document.createElement("h3");
  title.textContent = name;

  var titl = document.createElement("p");
  titl.textContent = price;

  var text1 = document.createElement("div");
  text1.className = "popular-card-footer1";

  var text2 = document.createElement("p");

  text2.textContent = "Г/Ц Блинчики с мясом вес, Россия";

  text1.append(text2);

  var ma = document.createElement("img");
  ma.src = "images/stark.png";

  var btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = "В корзину";

  //var desc = document.createElement("p");
  // desc.textContent = content;

  //var price = document.createElement("p");
  // price.textContent = cost;

  popularCardFooter.append(title);
  popularCardFooter.append(titl);
  // popularCardFooter.append(tit);
  popularCard.append(popularCardBody, popularCardFooter);
  popularCard.append(text1);
  popularCard.appendChild(ma);
  popularCard.appendChild(btn);
  return popularCard;
}

search_card_products.sort((a, b) => a.id - b.id);

search_card_products
  .filter((el) => el.discount != 0)
  .slice(-4)
  .forEach((el) => {
    let card = getCard(el.img, el.name, el.name_price);
    popularCard1.appendChild(card);
  });

// ------

var about = document.querySelector("#about");

var prodactsRow = document.createElement("div");

prodactsRow.className = "prodact-row";

// console.log(prodactsRow);

var prodactscontent = document.createElement("div");

prodactscontent.className = "content";

var prodactstitle = document.createElement("h1");

prodactstitle.className = "prodact-titile";

var pro = document.createElement("a");

pro.href = "#";
pro.innerHTML = "Все продукты >";

prodactstitle.innerHTML = "Новинки";

prodactscontent.append(prodactstitle);

prodactscontent.append(pro);

about.firstElementChild.append(prodactsRow);

prodactsRow.append(prodactscontent);

var container = document.querySelector("#about .container");
var popularCard1 = document.createElement("div");
popularCard1.className = "popular-card1";

container.append(popularCard1);

// popularCard1.style.display = "flex";
// popularCard1.style.gridTemplateColumns = "repeat(4, 1fr)";

function getCard(img, name) {
  var popularCard = document.createElement("div");
  popularCard.className = "popular-card";
  var popularCardBody = document.createElement("div");

  var image = document.createElement("img");
  image.src = img;
  popularCardBody.appendChild(image);

  popularCardBody.className = "popular-card-body";

  var popularCardFooter = document.createElement("div");
  popularCardFooter.className = "popular-card-footer";

  var title = document.createElement("h3");
  title.textContent = name;

  // var titl = document.createElement("p");
  // titl.textContent = price;

  var text1 = document.createElement("div");
  text1.className = "popular-card-footer1";

  var text2 = document.createElement("p");

  text2.textContent = "Г/Ц Блинчики с мясом вес, Россия";

  text1.append(text2);

  var ma = document.createElement("img");
  ma.src = "images/stark.png";

  var btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = "В корзину";

  var yurak = document.createElement("div");
  yurak.className = "yurak";

  popularCardFooter.append(title);
  // popularCardFooter.append(titl);
  // popularCardFooter.append(tit);
  popularCard.append(popularCardBody, popularCardFooter);
  popularCard.append(text1);
  popularCard.appendChild(ma);
  popularCard.appendChild(btn);
  popularCard.appendChild(yurak);
  return popularCard;
}

search_card_products.sort((a, b) => a.id - b.id);

search_card_products
  .filter((el) => el.discount != 0)
  .slice(0, 4)
  .forEach((el) => {
    let card = getCard(el.img, el.name);
    popularCard1.appendChild(card);
  });

// ----

var about = document.querySelector("#about");

var prodactsRow = document.createElement("div");

prodactsRow.className = "prodact-row";

// console.log(prodactsRow);

var prodactscontent = document.createElement("div");

prodactscontent.className = "content";

var prodactstitle = document.createElement("h1");

prodactstitle.className = "prodact-titile";

var pro = document.createElement("a");

pro.href = "#";
pro.innerHTML = "Все продукты >";

prodactstitle.innerHTML = "Покупали раньше";

prodactscontent.append(prodactstitle);

prodactscontent.append(pro);

about.firstElementChild.append(prodactsRow);

prodactsRow.append(prodactscontent);

var container = document.querySelector("#about .container");
var popularCard1 = document.createElement("div");
popularCard1.className = "popular-card1";

container.append(popularCard1);

// popularCard1.style.display = "flex";
// popularCard1.style.gridTemplateColumns = "repeat(4, 1fr)";

function getCard(img, name) {
  var popularCard = document.createElement("div");
  popularCard.className = "popular-card";
  var popularCardBody = document.createElement("div");

  var image = document.createElement("img");
  image.src = img;
  popularCardBody.appendChild(image);

  popularCardBody.className = "popular-card-body";

  var popularCardFooter = document.createElement("div");
  popularCardFooter.className = "popular-card-footer";

  var title = document.createElement("h3");
  title.textContent = name;

  // var titl = document.createElement("p");
  // titl.textContent = price;

  var text1 = document.createElement("div");
  text1.className = "popular-card-footer1";

  var text2 = document.createElement("p");

  text2.textContent = "Г/Ц Блинчики с мясом вес, Россия";

  text1.append(text2);

  var ma = document.createElement("img");
  ma.src = "images/stark.png";

  var btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = "В корзину";

  var yurak = document.createElement("div");
  yurak.className = "yurak";

  popularCardFooter.append(title);
  // popularCardFooter.append(titl);
  // popularCardFooter.append(tit);
  popularCard.append(popularCardBody, popularCardFooter);
  popularCard.append(text1);
  popularCard.appendChild(ma);
  popularCard.appendChild(btn);
  popularCard.appendChild(yurak);
  return popularCard;
}

search_card_products.sort((a, b) => a.id - b.id);

search_card_products
  .filter((el) => el.discount != 0)
  .slice(4, 8)
  .forEach((el) => {
    let card = getCard(el.img, el.name);
    popularCard1.appendChild(card);
  });

// --

var heroTop = document.querySelector("#hero .hero-top");

var text2 = document.createElement("div");
text2.className = "popular-card-footer1";

var text3 = document.createElement("h1");

text3.innerHTML = "Специальные предложения";

text2.append(text3);

heroTop.append(text2);

var container = document.querySelector("#hero .hero-top");
var popularCard1 = document.createElement("div");
popularCard1.className = "popular-card1 ";

container.append(popularCard1);

function arry(img, name, desc) {
  var popularCard = document.createElement("div");
  popularCard.className = "popular-card";
  var popularCardBody = document.createElement("div");

  var image = document.createElement("img");
  image.src = img;
  popularCardBody.appendChild(image);

  popularCardBody.className = "popular-card-body";

  var popularCardFooter = document.createElement("div");
  popularCardFooter.className = "popular-card-footer";

  var title = document.createElement("h3");
  title.textContent = name;
  var text1 = document.createElement("div");
  text1.className = "pop";

  var text2 = document.createElement("p");

  text2.textContent = "Г/Ц Блинчики с мясом вес, Россия";

  text1.append(text2);

  popularCardFooter.append(title, text2);

  // popularCardFooter.append(titl);
  // popularCardFooter.append(tit);
  popularCard.append(popularCardFooter, popularCardBody);

  return popularCard;
}

massiv2.sort((a, b) => a.id - b.id);

massiv2
  .filter((el) => el.rating != 0)
  .slice(0)
  .forEach((el) => {
    let card = arry(el.img, el.desc, el.name_price);
    popularCard1.appendChild(card);
  });

var mapTop = document.querySelector("#map .map-top");

var text6 = document.createElement("div");
text6.className = "popular-card-footer2";

var text7 = document.createElement("h1");

text7.innerHTML = "Специальные предложения";

text6.append(text7);

heroTop.append(text6);

let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let iframe = document.querySelector(".iframe-box");

btn2.addEventListener("click", function () {
  this.classList.add("active");
  iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.9420216292137!2d71.78567611546045!3d40.38797757936857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a471c6b55b%3A0x9927f2609db0d333!2sNajot%20Ta&#39;lim%20Farg&#39;ona!5e0!3m2!1sen!2s!4v1679488781708!5m2!1sen!2s"width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  btn1.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
});

btn1.addEventListener("click", function () {
  this.classList.add("active");
  iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.9420216292137!2d71.78567611546045!3d40.38797757936857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a471c6b55b%3A0x9927f2609db0d333!2sNajot%20Ta&#39;lim%20Farg&#39;ona!5e0!3m2!1sen!2s!4v1679488781708!5m2!1sen!2s"width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
});

btn3.addEventListener("click", function () {
  this.classList.add("active");
  iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.9420216292137!2d71.78567611546045!3d40.38797757936857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a471c6b55b%3A0x9927f2609db0d333!2sNajot%20Ta&#39;lim%20Farg&#39;ona!5e0!3m2!1sen!2s!4v1679488781708!5m2!1sen!2s"width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
});

btn4.addEventListener("click", function () {
  this.classList.add("active");
  iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.942021629222!2d71.78567611535485!3d40.387977579368396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a471c6b55b%3A0x9927f2609db0d333!2sNajot%20Ta&#39;lim%20Farg&#39;ona!5e0!3m2!1sru!2s!4v1679867120305!5m2!1sru!2s"width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  btn1.classList.remove("active");
  btn3.classList.remove("active");
  btn2.classList.remove("active");
});

// ---

var container = document.querySelector("#status .container");
var popularCard1 = document.createElement("div");
popularCard1.className = "popular-card1";

container.append(popularCard1);

function ge(img, name, desk) {
  var popularCard = document.createElement("div");
  popularCard.className = "popular-card";
  var popularCardBody = document.createElement("div");

  var image = document.createElement("img");
  image.src = img;
  popularCardBody.appendChild(image);

  popularCardBody.className = "popular-card-body";

  var popularCardFooter = document.createElement("div");
  popularCardFooter.className = "popular-card-footer";

  var title = document.createElement("h3");
  title.textContent = name;

  // var titl = document.createElement("p");
  // titl.textContent = price;

  var text1 = document.createElement("div");
  text1.className = "popular-card-footer1";

  var text2 = document.createElement("p");

  text2.textContent = "Г/Ц Блинчики с мясом вес, Россия";

  text1.append(desk);

  var btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = "Подробнее";

  popularCardFooter.append(title);

  popularCard.append(popularCardBody, popularCardFooter);
  popularCard.append(text1);

  popularCard.appendChild(btn);

  return popularCard;
}

massiv33.sort((a, b) => a.id - b.id);

massiv33
  .filter((el) => el.discount != 0)
  .slice(0, 4)
  .forEach((el) => {
    let card = ge(el.img, el.name_price, el.desc);
    popularCard1.appendChild(card);
  });
