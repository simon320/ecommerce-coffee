const totalItems = document.getElementById("totalItems");
const totalProducts = document.getElementById("totalProducts");
const cartWrapper = document.getElementById("cartWrapper");

let products = [];

const setCount = () => {
  let totalCount = 0;

  for (const i in products) {
    totalCount += products[i].count;
  }

  totalItems.innerText = totalCount.toString();
  return totalCount;
};

const totalPrice = () => {
    let totalCart = 0;
  
    for (const i in products) {
      totalCart += products[i].price * products[i].count;
    }
    totalProducts.innerHTML = totalCart.toString();
    return totalCart;
};

const productsList = () => {
  cartWrapper.innerHTML = products.map((product) => {
    return `
            <div class="cart-item">
                <div class="cart-item-content">
                <span>${product.product}</span>
                <span>Cantidad deseada: ${product.count}</span>
                
                    <span> $ ${product.price}</span>
                </div>
            </div>
        `;
  });
};

const addProduct = (product, price, count) => {

    for (const item in products) {
      
        if (products[item].product === product) {
            products[item].count++;
            setCount();
            totalPrice();
            productsList();
            return;
        }
    }

    products.push({ product, price, count });
    setCount();
    totalPrice();
    productsList();
};

// -------  NAVBAR ------- //

const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = function(){
  navigation.classList.toggle('open')
}

const list = document.querySelectorAll('.list');
function activeList() {
  list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => 
item.addEventListener('click', activeList))



// -------  ANIMATION ------- //

window.addEventListener('scroll', function(){
  // let animationHeader = document.getElementById('header');
  // let positionHeader = animationHeader.getBoundingClientRect().top;
  let animationHeader = document.getElementById('home');
  let windowPositionHeader = window.scrollY;

  if(windowPositionHeader === 0){
    animationHeader.style.animation = 'headerMove 1s ease-out';
  }
})

window.onscroll = function() {
  console.log("Vertical: " + window.scrollY);
  console.log("Horizontal: " + window.scrollX);
  
  window.addEventListener('scroll', function(){
    // let animationHeader = document.getElementById('header');
    // let positionHeader = animationHeader.getBoundingClientRect().top;
    let animationHeader = document.getElementById('home');
    let windowPositionHeader = window.scrollY;
  
    if(windowPositionHeader === 0){
      animationHeader.style.animation = 'headerMove 1s ease-out';
    }
  })
};





// -------  CAFETERIA ------- //
// -------  CLASICOs ------- //
const classics = document.getElementById('classics');
const btnClassics = document.getElementById('btnClassics');
const openClassics = document.getElementById('openClassics');
const closeClassics = document.getElementById('closeClassics');

btnClassics.addEventListener('click', () =>{
  openClassics.classList.toggle("hide");
  closeClassics.classList.toggle("hide");
  classics.classList.toggle('up-hide');
  const addCoffee = document.getElementById('addCoffee');
  addCoffee.addEventListener('click', () => {
    console.log("Holaaa");
  })
  // classics.innerHTML = 
  // closeClassics.classList.contains("hide") ?
  // `
  //   <ul>
  //     <li class="li-products">
  //       Cafe
  //     </li>
  //     <li class="li-products">Lagrima</li>
  //     <li class="li-products">Cafe con leche</li>
  //     <li>Cortado</li>
  //     <li>Te en saquito</li>
  //     <li>Te en Hebras</li>
  //   </ul>
  // `
  // : ' ';
})


// -------  ESPECIALEs ------- //
const especials = document.getElementById('especials');
const btnEspecials = document.getElementById('btnEspecials');
const openEspecials = document.getElementById('openEspecials');
const closeEspecials = document.getElementById('closeEspecials');

btnEspecials.addEventListener('click', () =>{
  openEspecials.classList.toggle("hide");
  closeEspecials.classList.toggle("hide");
  especials.innerHTML = 
  closeEspecials.classList.contains("hide") ?
  `
    <ul>
      <li>Submarino</li>
      <li>Chocolatada cindor</li>
      <li>Chocolatada vegana</li>
      <li>Capuccino</li>
      <li>Cortado</li>
      <li>Moka</li>
    </ul>
  `
  : '';
})

