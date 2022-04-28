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

// -------  NAVBAR ------- //
