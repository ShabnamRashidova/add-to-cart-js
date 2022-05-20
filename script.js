const card = document.querySelectorAll(".card");
const cartBtn = document.querySelector(".cart-btn");
const shoppingCartList = document.querySelector(".shopping-cart-list");
const addBtn = document.querySelectorAll(".btn-primary");
const cartHeading = document.querySelector(".cart-heading");
class Shopping {
  constructor(title, image, price) {
    this.title = title;
    this.image = image;
    this.price = price;
  }
}
class UI {
  addToCart(shopping) {
    let listItem = document.createElement("div");
    listItem.classList.add("list-item");
    listItem.innerHTML = `
          <div class="row align-items-center text-white-50 mt-3">
          <div class="col-md-3">
              <img src="${shopping.image}" alt="sss" class="shadow img-fluid">
          </div>
          <div class="col-md-5">
              <div class="title">${shopping.title}</div>
          </div>
          <div class="col-md-2">
              <div class="price">${shopping.price}</div>
          </div>
          <div class="col-md-2">
              <div class="bg-danger btn-delete badge p-2 fs-5">x</div>
          </div>
          </div>
          `;
   

    shoppingCartList.appendChild(listItem);
  }
  removeFromCart() {
    const deleteBtn = document.querySelectorAll(".btn-delete");
    deleteBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.parentElement.parentElement.remove();

        this.itemCount();
        this.changeCartHeading();
      });
    });
  }
  cartToggle() {
    cartBtn.addEventListener("click", () => {
      shoppingCartList.classList.toggle("d-none");
    });
  }
  itemCount() {
    const itemCount = document.querySelector(".item-count");
    const listItemLength = document.querySelectorAll(".list-item").length;
    itemCount.innerHTML = listItemLength;
  }
  changeCartHeading() {
    let listItem = document.querySelectorAll(".list-item");
    if (listItem.length > 0) {
      cartHeading.innerHTML = "Səbət";
    } else {
      cartHeading.innerHTML = "Səbət boşdur";
    }
  }
}
for (let i = 0; i < card.length; i++) {
  addBtn[i].addEventListener("click", (e) => {
    const title = card[i].querySelectorAll(".card-title")[0].textContent;
    const image = card[i].querySelectorAll(".card-img-top")[0].src;
    const price = card[i].querySelectorAll(".price")[0].textContent;
    addBtn[i].classList.add("disabled");
    addBtn[i].innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
    let shopping = new Shopping(title, image, price);
    let ui = new UI();
    ui.addToCart(shopping);
    ui.removeFromCart();
    ui.itemCount();
    ui.changeCartHeading();
    e.preventDefault();
  });
}
document.addEventListener("DOMContentLoaded", () => {
  let ui = new UI();
  ui.cartToggle();
});
