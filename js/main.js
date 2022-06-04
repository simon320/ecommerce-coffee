
const foodItems = [
  {
    name: 'Bonjour madame',
    price: '630',
    description: 'Jamón, provolone, queso gratinado y salsa bechamel',
    img: './assets/img/sandwich2.jpg',
    idContainer: 'BonjourMadameContainer',
    idImg: 'BonjourMadameImg',
    idInfo: 'BonjourMadameInfo',
    idBtn: 'BonjourMadameBtn',
    idAddBtn: 'BonjourMadameAddBtn',
  },
  {
    name: 'Pancakes',
    price: '810',
    description: 'Chocolate y dulce de leche',
    img: './assets/img/panqueque.jpg',
    idContainer: 'PancakesContainer',
    idImg: 'PancakesImg',
    idInfo: 'PancakestInfo',
    idBtn: 'PancakesBtn',
    idAddBtn: 'PancakesAddBtn',
  },
  {
    name: 'Pancakes Fit',
    price: '770',
    description: 'Maza integral con yogurt y frutas',
    img: './assets/img/panqueque2.jpg',
    idContainer: 'PancakesFitContainer',
    idImg: 'PancakesFitImg',
    idInfo: 'PancakesFitInfo',
    idBtn: 'PancakesFitBtn',
    idAddBtn: 'PancakesFitAddBtn',
  },
  {
    name: 'Tostadas francesas',
    price: '810',
    description: 'Nutella y frutillas',
    img: './assets/img/tostada.jpg',
    idContainer: 'TostadasFrancesasContainer',
    idImg: 'TostadasFrancesasImg',
    idInfo: 'TostadasFrancesasInfo',
    idBtn: 'TostadasFrancesasBtn',
    idAddBtn: 'TostadasFrancesasAddBtn',
  },
  {
    name: 'English muffin',
    price: '710',
    description: 'Con cheddar, huevo y panceta o lomito',
    img: './assets/img/sandwich3.jpg',
    idContainer: 'EnglishMuffinContainer',
    idImg: 'EnglishMuffinImg',
    idInfo: 'EnglishMuffinInfo',
    idBtn: 'EnglishMuffinBtn',
    idAddBtn: 'EnglishMuffinAddBtn',
  },
  {
    name: 'Montecristo',
    price: '800',
    description: 'Tostadas francesas con polvorone y jamón',
    img: './assets/img/sandwich4.jpg',
    idContainer: 'MontecristoContainer',
    idImg: 'MontecristoImg',
    idInfo: 'MontecristoInfo',
    idBtn: 'MontecristoBtn',
    idAddBtn: 'MontecristoAddBtn'
  }
];

// FOOD ************************************************************************
const productSearch = document.getElementById("productSearch");
const renderFood = (array) => productSearch.innerHTML = array.map((item) => {
  return `
      <article id="${item.idContainer}" class="food" onclick="addFood('${item.idContainer}','${item.idInfo}', '${item.idImg}', '${item.idBtn}', '${item.idAddBtn}')">
        <div class="container-img">
          <img src="${item.img}" alt="" id="${item.idImg}">
        </div>
        <div id="${item.idInfo}" class="flex-container">
          <h3>${item.name}</h3>
          <span>$${item.price}</span>
          <p>${item.description}</p>
        </div>
        <div id="${item.idBtn}" class="hide-btn">
          <button id="${item.idAddBtn}" onclick="addProduct('${item.name}', ${item.price}, 1)">Agregar</button>
          <span class="cross">X</span>
        </div>
      </article>
    `
})

renderFood(foodItems);
// SEARCH ************************************************************************
const formSearch = document.getElementById("formSearch");

let arrayProductSearch = []

formSearch.addEventListener('submit', (e)=>{
  e.preventDefault()

  arrayProductSearch = foodItems.filter(item => {
    return item.name.toLowerCase().includes(inputSearch.value); 
  })

  inputSearch.value == "" ? renderFood(foodItems) : renderFood(arrayProductSearch);
})



// CART ************************************************************************
const totalItems = document.getElementById("totalItems");
const totalProducts = document.getElementById("totalProducts");
const cartWrapper = document.getElementById("cartWrapper");
const inputSearch = document.getElementById("inputSearch");

let products = [];

const saveLocalStorage = () => {
  localStorage.setItem("productos", JSON.stringify(products));
}


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
    localStorage.setItem("precio", JSON.stringify(totalCart));

    totalItems.innerHTML = `<p>Total: $${totalCart.toString()}</p>`;
    return totalCart;
};


const productsList = () => {
  JSON.parse(localStorage.getItem("productos")) !== null && (products = JSON.parse(localStorage.getItem("productos")));
  products.length == 0 ?
    (cartWrapper.innerHTML =
            `
            <div class="emptyProductsMessage">
              No elegiste nada aun...
              ¿No tenés hambre?
            </div>
            `)
  :
    (cartWrapper.innerHTML = products.map((product) => {
        return`
          <div class="cart-item">
            <div class="cart-item-content">
              <span>${product.product}</span>
              <div class="price-amount">
                <span> $${product.price}</span>
                <span> x${product.count}</span>
              </div>
            </div>
            <button class="btnDelete" onclick="deleteProduct('${product.product}')">X</button>
          </div>
      `
      }))
};

productsList();
totalPrice();

const updateProduct = () => {
  setCount();
  totalPrice();
  saveLocalStorage();
  productsList();
}

const addProduct = (product, price, count, size) => {

    for (const item in products) {
      
        if (products[item].product === product) {
            products[item].count++;
            updateProduct();
            return;
        }
    }

    products.push({ product, price, count, size });
    updateProduct();
};

const deleteProduct = (product) => {

  let newProductList = products.filter((item) => item.product !== product);
  products = newProductList;

  updateProduct();
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

  const foodAddBtn = document.getElementById(`${addBtn}`);
  setTimeout(
    ()=>{
      foodAddBtn.classList.toggle('anim-btn');
    }
  , 100)
}

// -------  CART ------- //

const buy = (x) => {
  const buyContainer = document.getElementById("buyContainer");
  buyContainer.innerHTML = `<button id="buyAlert" class="btn">COMPRAR</button>`;
  const buyAlert = document.getElementById("buyAlert");
  console.log(x)
    buyAlert.addEventListener('click', () => {x.length !== 0 ? alert("Tu pedido llega en 15min!!") : alert("No arrmaste tu pedido aun!")});
}

buy(products);