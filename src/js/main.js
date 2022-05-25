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
                <span> $ ${product.price}</span>
                <span>x ${product.count}</span>

                  </div>
              </div>
            `
  });
};

const addProduct = (product, price, count, size) => {

    for (const item in products) {
      
        if (products[item].product === product) {
            products[item].count++;
            setCount();
            totalPrice();
            productsList();
            return;
        }
    }

    products.push({ product, price, count, size });
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

// window.addEventListener('scroll', function(){
//   // let animationHeader = document.getElementById('header');
//   // let positionHeader = animationHeader.getBoundingClientRect().top;
//   let animationHeader = document.getElementById('home');
//   let windowPositionHeader = window.scrollY;

//   if(windowPositionHeader === 0){
//     animationHeader.style.animation = 'headerMove 1s ease-out';
//   }
// })

// window.onscroll = function() {
//   console.log("Vertical: " + window.scrollY);
//   console.log("Horizontal: " + window.scrollX);
  
//   window.addEventListener('scroll', function(){
//     // let animationHeader = document.getElementById('header');
//     // let positionHeader = animationHeader.getBoundingClientRect().top;
//     let animationHeader = document.getElementById('home');
//     let windowPositionHeader = window.scrollY;
  
//     if(windowPositionHeader === 0){
//       animationHeader.style.animation = 'headerMove 1s ease-out';
//     }
//   })
// };





// -------  CAFETERIA ------- //
// -------  CLASICOs ------- //
const classics = document.getElementById('classics');
const openClassics = document.getElementById('openClassics');
const closeClassics = document.getElementById('closeClassics');
const btnClassics = document.getElementById('btnClassics');

btnClassics.addEventListener('click', () =>{
  openClassics.classList.toggle("hide"); // ALTERNA ENTRE LAS FLECHAS DEL MENU.
  closeClassics.classList.toggle("hide"); // ALTERNA ENTRE LAS FLECHAS DEL MENU.

  classics.classList.toggle('up-hide');

});


// -------  MENU-SIZEs ------- //
const showSizes = (itemSize, openItem, closeItem) => {

  const itemSizes = document.getElementById(`${itemSize}`);
  const openItems = document.getElementById(`${openItem}`);
  const closeItems = document.getElementById(`${closeItem}`);
  
    openItems.classList.toggle("hide"); // ALTERNA ENTRE LAS FLECHAS DEL MENU.
    closeItems.classList.toggle("hide"); // ALTERNA ENTRE LAS FLECHAS DEL MENU.
  
    itemSizes.classList.toggle('up-hide'); // DESPLIEGA LAS OPCIONES DE TAMAÑO.
}



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

