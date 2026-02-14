const cartIcon = document.querySelector('.cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const alertPlaceholder = document.getElementById('alert-placeholder');

let cart = [];

cartIcon.addEventListener('click', () => {
  cartSidebar.style.right = '0';
});

closeCart.addEventListener('click', () => {
  cartSidebar.style.right = '-300px';
});

document.querySelectorAll('.add-to-cart').forEach((btn) => {
  btn.addEventListener('click', () => {
    const productCard = btn.closest('.product-card');
    const title = productCard.querySelector('h3').innerText;
    const price = parseFloat(productCard.querySelector('p').innerText.replace('$', ''));
    const imageSrc = productCard.querySelector('img').src;

    const existingItem = cart.find(item => item.title === title);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({ title, price, imageSrc, qty: 1 });
    }
    updateCart();
    showAlert(`${title} added to cart!`);
  });
});

function updateCart() {
  cartCount.innerText = cart.reduce((sum, item) => sum + item.qty, 0);

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.imageSrc}" width="40" />
      ${item.title} x ${item.qty} - $${(item.price * item.qty).toFixed(2)}
      <button class="btn btn-sm btn-outline-danger remove-item">x</button>
    `;

    li.querySelector('.remove-item').addEventListener('click', () => {
      removeItem(item.title);
    });

    cartItems.appendChild(li);
  });

  cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}

function removeItem(title) {
  cart = cart.filter(item => item.title !== title);
  updateCart();
}

function showAlert(message) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
  `;
  alertPlaceholder.append(wrapper);
  setTimeout(() => {
    wrapper.remove();
  }, 2000);
}
