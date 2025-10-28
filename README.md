# Dream eShop - Virtual Shopping with $1B Balance

A fun, fully simulated e-commerce website where each user starts with a virtual balance of $1,000,000,000 ($1B). Users can browse products, add items to cart, checkout using virtual balance, and view order history.

## Features

1. **Virtual Balance**
   - Each user starts with $1B
   - Buying products deducts from balance
   - Display remaining balance in header and checkout

2. **Products**
   - Add, edit, delete products (admin panel)
   - Product info: name, price, description, image URL
   - Display products in a grid with price and "Add to Cart" button

3. **Cart**
   - Users can add/remove products
   - Shows total price
   - Checkout subtracts total from virtual balance
   - Orders stored in localStorage

4. **Checkout**
   - Validate if user has enough virtual balance
   - Show confirmation message after purchase
   - Update balance and order history
   - Animated confetti on successful purchase

5. **Order History**
   - List past orders with product names, total, and date

6. **Admin Panel**
   - View all products and orders
   - Add/edit/delete products
   - Show total virtual sales
   - Simple interface, no real authentication needed

## How to Use

1. Open `index.html` in your web browser
2. Enter a username in the top right corner (default is "User1")
3. Browse products and add items to your cart
4. Go to the Cart page to review your items
5. Proceed to checkout to complete your purchase
6. View your order history in the Orders page
7. Access the Admin panel to manage products (use "admin" as username for admin features)

## Pages

- `index.html` - Homepage with product listing
- `cart.html` - Shopping cart
- `orders.html` - Order history
- `admin.html` - Main admin panel
- `admin-panel.html` - Product management panel

## Data Storage

All data is stored in the browser's localStorage:
- Products
- User carts
- Order history
- User balances
- Total sales

## Fun Features

- Animated confetti when purchase completes
- Alert if balance is insufficient
- Simulate multiple users by storing balances separately
- Responsive design for desktop and mobile

## Technologies Used

- HTML5
- CSS3 (Blue, White, and Yellow color scheme)
- Vanilla JavaScript
- localStorage for data persistence

Enjoy your virtual shopping experience with $1 billion to spend at Dream eShop!Enjoy your virtual shopping experience with $1 billion to spend at Dream eShop!