// FunAmazon - Virtual Shopping with $1B Balance
// Main JavaScript File

// Initial data - these are permanent products that will always be available
const initialProducts = [
    {
        id: 1,
        name: "Premium Headphones",
        price: 199.99,
        description: "Noise-cancelling wireless headphones with premium sound quality",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&h=400"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 299.99,
        description: "Fitness tracker with heart rate monitor and GPS",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&h=400"
    },
    {
        id: 3,
        name: "Gaming Laptop",
        price: 1299.99,
        description: "High-performance laptop for gaming and productivity",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&h=400"
    },
    {
        id: 4,
        name: "Smartphone Pro",
        price: 899.99,
        description: "Latest model smartphone with advanced camera system",
        image: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=600&h=400"
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        price: 79.99,
        description: "Portable waterproof speaker with 360° sound",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&h=400"
    },
    {
        id: 6,
        name: "Coffee Maker",
        price: 149.99,
        description: "Programmable coffee maker with thermal carafe",
        image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=600&h=400"
    },
    {
        id: 7,
        name: "Super car",
        price: 152000,
        description: "Luxury super car",
        image: "images/afkug.jpg"
    },
    {
        id: 8,
        name: "Laptop",
        price: 799.99,
        description: "High-performance laptop for work and entertainment",
        image: "images/dhff.jpg"
    },
    {
        id: 9,
        name: "iPhone",
        price: 500000,
        description: "Latest iPhone model",
        image: "images/hsjf.jpg"
    },
    {
        id: 10,
        name: "Stadium",
        price: 10000000,
        description: "Sports stadium",
        image: "images/adfvbdnb.jpg"
    },
    {
        id: 11,
        name: "Super car",
        price: 125000,
        description: "High-performance sports car",
        image: "images/ajfgh.jpg"
    },
    {
        id: 12,
        name: "Super bomb",
        price: 154200,
        description: "Powerful explosive device",
        image: "images/dghf.jpg"
    },
    {
        id: 13,
        name: "F1 Car",
        price: 1500000,
        description: "Formula 1 racing car",
        image: "images/f1.jpg"
    },
    {
        id: 14,
        name: "Fighter Jet",
        price: 1500000,
        description: "Military fighter aircraft",
        image: "images/f3.jpg"
    },
    {
        id: 15,
        name: "Luxury Super car",
        price: 1500000,
        description: "Premium luxury automobile",
        image: "images/ffff.jpg"
    },
    {
        id: 16,
        name: "Real Estate Area",
        price: 21000000,
        description: "Prime real estate property",
        image: "images/fggh.jpg"
    },
    {
        id: 17,
        name: "House",
        price: 2000000,
        description: "Beautiful family home",
        image: "images/fghf.jpg"
    },
    {
        id: 18,
        name: "Hamilton Watch",
        price: 1500000,
        description: "Luxury Hamilton timepiece",
        image: "images/fhgb.jpg"
    }
];

// Initialize data in localStorage if not present
function initializeData() {
    console.log('Initializing data...');
    
    // Only initialize products if they don't exist
    if (!localStorage.getItem('products')) {
        console.log('No products found, initializing with default products');
        localStorage.setItem('products', JSON.stringify(initialProducts));
    } else {
        console.log('Products already exist in localStorage');
        const existingProducts = JSON.parse(localStorage.getItem('products'));
        console.log('Existing products count:', existingProducts.length);
    }
    
    // Initialize dynamic products if not present
    if (!localStorage.getItem('dynamicProducts')) {
        localStorage.setItem('dynamicProducts', JSON.stringify([]));
    }
    
    if (!localStorage.getItem('orders')) {
        localStorage.setItem('orders', JSON.stringify([]));
    }
    
    if (!localStorage.getItem('balances')) {
        // Initialize with default $1B balance for all users
        const balances = {
            "User1": 1000000000,
            "User2": 1000000000,
            "admin": 1000000000
        };
        localStorage.setItem('balances', JSON.stringify(balances));
    }
    
    // Initialize bank data if not present
    if (!localStorage.getItem('bankAccounts')) {
        localStorage.setItem('bankAccounts', JSON.stringify({}));
    }
    
    if (!localStorage.getItem('totalSales')) {
        localStorage.setItem('totalSales', JSON.stringify(0));
    }
    
    console.log('Data initialization complete');
}

// Get current user
function getCurrentUser() {
    return document.getElementById('username').value || 'User1';
}

// Get user balance
function getUserBalance() {
    const balances = JSON.parse(localStorage.getItem('balances') || '{}');
    const user = getCurrentUser();
    return balances[user] || 1000000000;
}

// Update user balance
function updateUserBalance(newBalance) {
    const balances = JSON.parse(localStorage.getItem('balances') || '{}');
    const user = getCurrentUser();
    balances[user] = newBalance;
    localStorage.setItem('balances', JSON.stringify(balances));
    updateBalanceDisplay();
}

// Update balance display
function updateBalanceDisplay() {
    const balance = getUserBalance();
    document.getElementById('balance').textContent = `Balance: $${balance.toLocaleString()}`;
}

// Get all products (combines initial products with dynamically added ones)
function getProducts() {
    try {
        // Get initial products
        const initial = [...initialProducts];
        
        // Get dynamically added products
        const dynamic = JSON.parse(localStorage.getItem('dynamicProducts') || '[]');
        
        // Combine both arrays
        const allProducts = [...initial, ...dynamic];
        
        return allProducts;
    } catch (e) {
        console.error('Error loading products:', e);
        return [...initialProducts];
    }
}

// Save dynamically added products to localStorage
function saveDynamicProducts(products) {
    try {
        localStorage.setItem('dynamicProducts', JSON.stringify(products));
        console.log('Dynamic products saved successfully:', products.length, 'items');
    } catch (e) {
        console.error('Error saving dynamic products to localStorage:', e);
        alert('Failed to save product. Storage may be full.');
    }
}

// Bank Functions
function getBankAccount() {
    const bankAccounts = JSON.parse(localStorage.getItem('bankAccounts') || '{}');
    const user = getCurrentUser();
    return bankAccounts[user] || { balance: 0, lastPayment: null, interestActive: false };
}

function saveBankAccount(account) {
    const bankAccounts = JSON.parse(localStorage.getItem('bankAccounts') || '{}');
    const user = getCurrentUser();
    bankAccounts[user] = account;
    localStorage.setItem('bankAccounts', JSON.stringify(bankAccounts));
}

function displayBankInfo() {
    const bankAccount = getBankAccount();
    const bankBalanceElement = document.getElementById('bank-balance');
    const lastPaymentElement = document.getElementById('last-payment');
    const interestStatusElement = document.getElementById('interest-status');
    const interestToggleElement = document.getElementById('interest-toggle');
    
    if (bankBalanceElement) {
        bankBalanceElement.textContent = bankAccount.balance.toFixed(2);
    }
    
    if (lastPaymentElement) {
        lastPaymentElement.textContent = bankAccount.lastPayment ? 
            new Date(bankAccount.lastPayment).toLocaleString() : 'Never';
    }
    
    if (interestStatusElement) {
        if (bankAccount.interestActive) {
            interestStatusElement.textContent = 'Interest earning is currently active.';
            interestStatusElement.style.color = 'green';
        } else {
            interestStatusElement.textContent = 'Interest earning is currently inactive.';
            interestStatusElement.style.color = 'red';
        }
    }
    
    if (interestToggleElement) {
        interestToggleElement.textContent = bankAccount.interestActive ? 
            'Stop Earning Interest' : 'Start Earning Interest';
    }
}

function depositMoney() {
    const amountInput = document.getElementById('deposit-amount');
    const amount = parseFloat(amountInput.value);
    
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid deposit amount.');
        return;
    }
    
    const userBalance = getUserBalance();
    if (amount > userBalance) {
        alert('Insufficient funds for deposit.');
        return;
    }
    
    // Update user balance
    updateUserBalance(userBalance - amount);
    
    // Update bank account
    const bankAccount = getBankAccount();
    bankAccount.balance += amount;
    saveBankAccount(bankAccount);
    
    // Clear input
    amountInput.value = '';
    
    // Update display
    displayBankInfo();
    
    alert(`Successfully deposited $${amount.toFixed(2)} into your bank account.`);
}

function withdrawMoney() {
    const amountInput = document.getElementById('withdraw-amount');
    const amount = parseFloat(amountInput.value);
    
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid withdrawal amount.');
        return;
    }
    
    const bankAccount = getBankAccount();
    if (amount > bankAccount.balance) {
        alert('Insufficient funds in bank account.');
        return;
    }
    
    // Update bank account
    bankAccount.balance -= amount;
    saveBankAccount(bankAccount);
    
    // Update user balance
    const userBalance = getUserBalance();
    updateUserBalance(userBalance + amount);
    
    // Clear input
    amountInput.value = '';
    
    // Update display
    displayBankInfo();
    
    alert(`Successfully withdrew $${amount.toFixed(2)} from your bank account.`);
}

function toggleInterest() {
    const bankAccount = getBankAccount();
    bankAccount.interestActive = !bankAccount.interestActive;
    saveBankAccount(bankAccount);
    
    if (bankAccount.interestActive) {
        startInterestTimer();
        alert('Interest earning has been activated. You will earn $60 every 30 seconds.');
    } else {
        stopInterestTimer();
        alert('Interest earning has been deactivated.');
    }
    
    displayBankInfo();
}

// Timer for interest payments
let interestInterval;

function startInterestTimer() {
    // Clear any existing interval
    stopInterestTimer();
    
    // Start new interval (30 seconds)
    interestInterval = setInterval(() => {
        const bankAccount = getBankAccount();
        if (bankAccount.interestActive && bankAccount.balance > 0) {
            bankAccount.balance += 60;
            bankAccount.lastPayment = new Date().toISOString();
            saveBankAccount(bankAccount);
            
            // Update display if on bank page
            if (document.getElementById('bank-balance')) {
                displayBankInfo();
            }
            
            console.log(`Interest payment of $60 added. New balance: $${bankAccount.balance.toFixed(2)}`);
        }
    }, 30000); // 30 seconds
}

function stopInterestTimer() {
    if (interestInterval) {
        clearInterval(interestInterval);
        interestInterval = null;
    }
}

// Get cart from localStorage
function getCart() {
    const user = getCurrentUser();
    const carts = JSON.parse(localStorage.getItem('carts') || '{}');
    return carts[user] || [];
}

// Save cart to localStorage
function saveCart(cart) {
    const user = getCurrentUser();
    const carts = JSON.parse(localStorage.getItem('carts') || '{}');
    carts[user] = cart;
    localStorage.setItem('carts', JSON.stringify(carts));
}

// Get orders from localStorage
function getOrders() {
    return JSON.parse(localStorage.getItem('orders') || '[]');
}

// Save orders to localStorage
function saveOrders(orders) {
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Get total sales
function getTotalSales() {
    return parseFloat(localStorage.getItem('totalSales') || '0');
}

// Update total sales
function updateTotalSales(amount) {
    const currentSales = getTotalSales();
    localStorage.setItem('totalSales', JSON.stringify(currentSales + amount));
}

// Display products on homepage
function displayProducts() {
    const products = getProducts();
    const productGrid = document.getElementById('product-grid');
    
    if (!productGrid) return;
    
    if (products.length === 0) {
        productGrid.innerHTML = '<p>No products available.</p>';
        return;
    }
    
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="btn btn-block" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Add item to cart
function addToCart(productId) {
    const products = getProducts();
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        alert('Product not found!');
        return;
    }
    
    let cart = getCart();
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart(cart);
    alert(`${product.name} added to cart!`);
}

// Display cart items
function displayCart() {
    const cart = getCart();
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        if (cartTotal) cartTotal.textContent = '0.00';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-details">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                </div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.productId}, -1)">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.productId}, 1)">+</button>
            </div>
            <button class="btn btn-danger" onclick="removeFromCart(${item.productId})">Remove</button>
        </div>
    `).join('');
    
    if (cartTotal) {
        cartTotal.textContent = total.toFixed(2);
    }
    
    // Update the checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.onclick = () => checkout(total);
    }
}

// Update item quantity in cart
function updateQuantity(productId, change) {
    let cart = getCart();
    const item = cart.find(item => item.productId === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.productId !== productId);
        }
        
        saveCart(cart);
        displayCart();
    }
}

// Remove item from cart
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.productId !== productId);
    saveCart(cart);
    displayCart();
}

// Checkout function
function checkout(total) {
    const balance = getUserBalance();
    
    if (total > balance) {
        alert('Insufficient balance! Please remove some items from your cart.');
        return;
    }
    
    // Deduct from balance
    updateUserBalance(balance - total);
    
    // Add to orders
    const cart = getCart();
    const orders = getOrders();
    
    const order = {
        id: Date.now(),
        userId: getCurrentUser(),
        items: cart,
        total: total,
        date: new Date().toLocaleString()
    };
    
    orders.push(order);
    saveOrders(orders);
    
    // Update total sales
    updateTotalSales(total);
    
    // Clear cart
    saveCart([]);
    
    // Show confetti animation
    showConfetti();
    
    // Show success message
    alert(`Order placed successfully! Total: $${total.toFixed(2)}`);
    
    // Refresh cart display
    displayCart();
}

// Show confetti animation
function showConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Display order history
function displayOrders() {
    const orders = getOrders();
    const user = getCurrentUser();
    const userOrders = orders.filter(order => order.userId === user);
    const ordersContainer = document.getElementById('orders-container');
    
    if (!ordersContainer) return;
    
    if (userOrders.length === 0) {
        ordersContainer.innerHTML = '<p>No orders found.</p>';
        return;
    }
    
    ordersContainer.innerHTML = userOrders.map(order => `
        <div class="order-item">
            <div class="order-header">
                <div><strong>Order #${order.id}</strong></div>
                <div class="order-date">${order.date}</div>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div>${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</div>
                `).join('')}
            </div>
            <div class="order-total">Total: $${order.total.toFixed(2)}</div>
        </div>
    `).join('');
}

// Display total sales (for admin page)
function displayTotalSales() {
    const totalSales = getTotalSales();
    const salesElement = document.getElementById('total-sales');
    
    if (salesElement) {
        salesElement.textContent = `$${totalSales.toFixed(2)}`;
    }
}

// Admin functions
function displayAdminProducts() {
    const products = getProducts();
    const productsTable = document.getElementById('products-table');
    
    if (!productsTable) return;
    
    if (products.length === 0) {
        productsTable.innerHTML = '<tr><td colspan="5">No products available.</td></tr>';
        return;
    }
    
    productsTable.innerHTML = products.map(product => `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td><img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&h=400'" style="width: 50px; height: 50px; object-fit: cover;"></td>
            <td>
                <button class="btn" onclick="editProduct(${product.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const description = document.getElementById('product-description').value;
    const image = document.getElementById('product-image').value;
    const imageFile = document.getElementById('product-image-file').files[0];
    
    if (!name || isNaN(price) || !description) {
        alert('Please fill in all required fields (Name, Price, Description).');
        return;
    }
    
    // Handle image upload - either file or URL
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            finishAddingProduct(name, price, description, e.target.result);
        };
        reader.readAsDataURL(imageFile);
    } else if (image) {
        finishAddingProduct(name, price, description, image);
    } else {
        // Default image if none provided
        finishAddingProduct(name, price, description, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&h=400');
    }
}

function finishAddingProduct(name, price, description, imageUrl) {
    // Get existing dynamic products
    let dynamicProducts = JSON.parse(localStorage.getItem('dynamicProducts') || '[]');
    
    const newProduct = {
        id: Date.now(), // Use timestamp as ID for dynamic products
        name,
        price,
        description,
        image: imageUrl
    };
    
    dynamicProducts.push(newProduct);
    saveDynamicProducts(dynamicProducts);
    
    // Reset form
    document.getElementById('product-form').reset();
    
    // Refresh display
    displayAdminProducts();
    
    alert('Product added successfully! This product will now appear on all devices.');
}

function editProduct(productId) {
    // Check if this is an initial product (can't be edited)
    const isInitialProduct = initialProducts.some(p => p.id === productId);
    if (isInitialProduct) {
        alert('This is a permanent product and cannot be edited. You can only edit products you have added.');
        return;
    }
    
    // Get dynamic products
    let dynamicProducts = JSON.parse(localStorage.getItem('dynamicProducts') || '[]');
    const product = dynamicProducts.find(p => p.id === productId);
    
    if (!product) {
        alert('Product not found!');
        return;
    }
    
    // Fill form with product data
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-image').value = product.image;
    
    // Change form submit action
    const form = document.getElementById('product-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        updateProduct(productId);
    };
    
    // Change button text
    document.getElementById('form-title').textContent = 'Edit Product';
    document.getElementById('form-button').textContent = 'Update Product';
}

function updateProduct(productId) {
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const description = document.getElementById('product-description').value;
    const image = document.getElementById('product-image').value;
    const imageFile = document.getElementById('product-image-file').files[0];
    
    if (!name || isNaN(price) || !description) {
        alert('Please fill in all required fields (Name, Price, Description).');
        return;
    }
    
    // Handle image upload
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            finishUpdatingProduct(productId, name, price, description, e.target.result);
        };
        reader.readAsDataURL(imageFile);
    } else {
        finishUpdatingProduct(productId, name, price, description, image);
    }
}

function finishUpdatingProduct(productId, name, price, description, imageUrl) {
    // Get dynamic products
    let dynamicProducts = JSON.parse(localStorage.getItem('dynamicProducts') || '[]');
    const productIndex = dynamicProducts.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        alert('Product not found!');
        return;
    }
    
    dynamicProducts[productIndex] = {
        id: productId,
        name,
        price,
        description,
        image: imageUrl
    };
    
    saveDynamicProducts(dynamicProducts);
    
    // Reset form
    document.getElementById('product-form').reset();
    
    // Reset form submit action
    const form = document.getElementById('product-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        addProduct();
    };
    
    // Reset button text
    document.getElementById('form-title').textContent = 'Add New Product';
    document.getElementById('form-button').textContent = 'Add Product';
    
    // Refresh display
    displayAdminProducts();
    
    alert('Product updated successfully!');
}

function deleteProduct(productId) {
    // Check if this is an initial product (can't be deleted)
    const isInitialProduct = initialProducts.some(p => p.id === productId);
    if (isInitialProduct) {
        alert('This is a permanent product and cannot be deleted.');
        return;
    }
    
    if (!confirm('Are you sure you want to delete this product?')) {
        return;
    }
    
    // Get dynamic products
    let dynamicProducts = JSON.parse(localStorage.getItem('dynamicProducts') || '[]');
    dynamicProducts = dynamicProducts.filter(p => p.id !== productId);
    saveDynamicProducts(dynamicProducts);
    
    displayAdminProducts();
    
    alert('Product deleted successfully!');
}

// Export products to JSON file (includes both initial and dynamic products)
function exportProducts() {
    const products = getProducts();
    const dataStr = JSON.stringify(products, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'dream-eshop-products.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Import products from JSON file (adds to dynamic products)
function importProducts(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const products = JSON.parse(e.target.result);
            if (Array.isArray(products)) {
                // Filter out any products that might conflict with initial products
                const dynamicProducts = products.filter(product => 
                    !initialProducts.some(initial => initial.id === product.id)
                );
                
                // Save to dynamic products
                saveDynamicProducts(dynamicProducts);
                displayAdminProducts();
                alert(`Successfully imported ${dynamicProducts.length} products!`);
            } else {
                alert('Invalid file format. Please select a valid products JSON file.');
            }
        } catch (error) {
            alert('Error importing products: ' + error.message);
        }
    };
    reader.readAsText(file);
}

// Initialize the application
// Note: Individual pages now handle their own initialization to avoid conflicts
// document.addEventListener('DOMContentLoaded', function() {
//     initializeData();
//     updateBalanceDisplay();
//     
//     // Homepage
//     if (document.getElementById('product-grid')) {
//         displayProducts();
//     }
//     
//     // Cart page
//     if (document.getElementById('cart-items')) {
//         displayCart();
//     }
//     
//     // Orders page
//     if (document.getElementById('orders-container')) {
//         displayOrders();
//     }
//     
//     // Admin page
//     if (document.getElementById('total-sales')) {
//         displayTotalSales();
//     }
//     
//     // Bank page
//     if (document.getElementById('bank-balance')) {
//         displayBankInfo();
//         const bankAccount = getBankAccount();
//         if (bankAccount.interestActive) {
//             startInterestTimer();
//         }
//     }
//     
//     // Update balance when username changes
//     const usernameInput = document.getElementById('username');
//     if (usernameInput) {
//         usernameInput.addEventListener('change', updateBalanceDisplay);
//     }
// });

// Make functions available globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.checkout = checkout;
window.updateBalanceDisplay = updateBalanceDisplay;
window.exportProducts = exportProducts;
window.importProducts = importProducts;
window.depositMoney = depositMoney;
window.withdrawMoney = withdrawMoney;
window.toggleInterest = toggleInterest;
window.displayBankInfo = displayBankInfo;