const totalItems = document.getElementById("totalItems");
const totalProducts = document.getElementById("totalProducts");
const cartWrapper = document.getElementById("cartWrapper");

let products = [];

const setCount = () => {
  let totalCount = 0;

  for (const i in products) {
    totalCount += products[i].count;
  }

  
  return totalCount;
};

const totalPrice = () => {
    let totalCart = 0;
  
    for (const i in products) {
      totalCart += products[i].price * products[i].count;
    }
    totalItems.innerHTML = `<p>Total: $${totalCart.toString()}</p>`;
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



// -------  CAFETERIA ------- //
// -------  CLASICOs ------- //
const classics = document.getElementById('classics');
const openClassics = document.getElementById('openClassics');
const closeClassics = document.getElementById('closeClassics');
const btnClassics = document.getElementById('btnClassics');

btnClassics.addEventListener('click', () =>{
  openClassics.classList.toggle("hide"); // ALTERNA ENTRE LAS FLECHAS DEL MENU.
  closeClassics.classList.toggle("hide"); // ALTERNA ENTRE LAS FLECHAS DEL MENU.

  classics.classList.toggle('up-hide-classics');

});

// -------  SPECIALs ------- //
const specials = document.getElementById('specials');
const ulSpecials = document.getElementById('ulSpecials');
const btnSpecials = document.getElementById('btnSpecials');
const openSpecials = document.getElementById('openSpecials');
const closeSpecials = document.getElementById('closeSpecials');

btnSpecials.addEventListener('click', () =>{
  openSpecials.classList.toggle("hide");
  closeSpecials.classList.toggle("hide");
  btnSpecials.classList.toggle("border-radius-bottom")

  specials.classList.toggle('up-hide-specials');
  specials.classList.toggle('border-radius-bottom');
  ulSpecials.classList.toggle('border-radius-bottom');
})
// -------  ESPECIALs ------- //

// -------  MENU-SIZEs ------- //

const showSizes = (itemSize) => {
  const itemSizes = document.getElementById(`${itemSize}`);
    itemSizes.classList.remove('right-hide'); // DESPLIEGA LAS OPCIONES DE TAMAÑO.
    itemSizes.classList.add('right-show'); // DESPLIEGA LAS OPCIONES DE TAMAÑO. 
}

const closeDetails = (itemSize) => {
      const item = document.getElementById(`${itemSize}`);
        item.classList.remove('right-show'); // DESPLIEGA LAS OPCIONES DE TAMAÑO.
        item.classList.add('right-hide'); // DESPLIEGA LAS OPCIONES DE TAMAÑO.
}

// -------  MENU-FOOD ------- //

const addFood = (fContainer, food, img, btn, addBtn) => {
  const foodConteiner = document.getElementById(`${fContainer}`);
    foodConteiner.classList.toggle('border-active');
  const foodInfo = document.getElementById(`${food}`);
    foodInfo.classList.toggle('hide-info');
  const foodImg = document.getElementById(`${img}`)
    foodImg.classList.toggle('full-img');
  const foodBtn = document.getElementById(`${btn}`)
      foodBtn.classList.toggle('hide-btn');
      foodBtn.classList.toggle('btnAdd');
  // setTimeout(
  //   ()=>{
  //   }
  // , 500)
  const foodAddBtn = document.getElementById(`${addBtn}`);
  setTimeout(
    ()=>{
      foodAddBtn.classList.toggle('anim-btn');
    }
  , 100)
}
