const emailOptions = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartMenuIcon = document.querySelector(".navbar-shopping-cart");
const myOrderAside = document.querySelector(".my-order");
const productDetail = document.querySelector(".product-detail");
const closeBtnProductDetail = document.querySelector(".product-detail-close");

// Product List
const productList = [
  {
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Bar Fridge",
    price: 3000,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Forniture",
    price: 5000,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const showProductDetail = () => {
  closeCartMenu();
  closeHamburgerMenu();
  closeDesktopMenu();
  productDetail.classList.remove("inactive");
};

const renderProducts = (productList) => {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.addEventListener("click", showProductDetail);
    closeBtnProductDetail.addEventListener("click", () => {
      productDetail.classList.add("inactive");
    });

    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = `$${product.price}`;
    const productName = document.createElement("p");
    productName.innerText = `${product.name}`;

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    document.querySelector(".cards-container").appendChild(productCard);
  }
};

// const closeCartMenu = () => {
//   if (!myOrderAside.classList.contains("inactive")) {
//     myOrderAside.classList.add("inactive");
//   }
// };

function closeCartMenu() {
  if (!myOrderAside.classList.contains("inactive")) {
    myOrderAside.classList.add("inactive");
  }
}

// const closeHamburgerMenu = () => {
//   if (!mobileMenu.classList.contains("inactive")) {
//     mobileMenu.classList.add("inactive");
//   }
// };

function closeHamburgerMenu() {
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  }
}

// const closeDesktopMenu = () => {
//   if (!desktopMenu.classList.contains("inactive")) {
//     desktopMenu.classList.add("inactive");
//   }
// };

function closeDesktopMenu() {
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
}

const toggleDesktopMenu = () => {
  closeCartMenu();
  desktopMenu.classList.toggle("inactive");
};

const toggleMobileMenu = () => {
  closeCartMenu();
  mobileMenu.classList.toggle("inactive");
};

const toggleCartAside = () => {
  closeHamburgerMenu();
  closeDesktopMenu();
  myOrderAside.classList.toggle("inactive");
};

emailOptions.addEventListener("click", toggleDesktopMenu);
hamburgerMenuIcon.addEventListener("click", toggleMobileMenu);
cartMenuIcon.addEventListener("click", toggleCartAside);

renderProducts(productList);
