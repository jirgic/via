# Assignment: The Dynamic Tech Store

## Scenario
Your task is to build a webpage that displays a list of products, styles them into a grid, and allows users to filter the products by category using JavaScript.

---

## Deliverables
Create three files: `index.html`, `style.css`, and `script.js`.

### Step 1: HTML Structure
Create the skeleton of the page in your `index.html` file.
1. Add a `<header>` with an `<h1>` title (e.g., "Tech Store").
2. Create a `<nav>` section with three `<button>` elements with the IDs: `btn-all`, `btn-laptops`, and `btn-accessories`.
3. Create an empty `<div>` with the ID `product-container`. This is where JavaScript will inject the products.
4. Link your CSS and JS files.

### Step 2: CSS Styling
In `style.css`, make it look presentable. 
1. Use Flexbox or CSS Grid on the `#product-container` to display the products in a row or grid.
2. Create a `.product-card` class (border, padding, border-radius, background color).
3. Create an `.out-of-stock` class (e.g., greyed out background, red text, or reduced opacity).

### Step 3: JavaScript Data Setup
In `script.js`, copy and paste the following array. This represents the data you fetched from the store's database:

```javascript
const products = [
  { id: 1, name: "Pro Laptop", price: 1200, category: "laptops", inStock: true },
  { id: 2, name: "Wireless Mouse", price: 45, category: "accessories", inStock: true },
  { id: 3, name: "Mechanical Keyboard", price: 150, category: "accessories", inStock: false },
  { id: 4, name: "Budget Laptop", price: 600, category: "laptops", inStock: true },
  { id: 5, name: "USB-C Hub", price: 30, category: "accessories", inStock: true },
];
```

### Step 4: JavaScript Logic & Rendering 
Write the logic to render the products and make the filter buttons work.

**Task A: The Render Function**
Write a function called `renderProducts(items)` that takes an array of products and displays them in the `#product-container`.
* Clear the innerHTML of the container first.
* Use an **iterative method** (like `.forEach()`) or a **functional method** (like `.map().join('')`) to create HTML for each product.
* **Branching requirement:** Use an `if/else` statement or a ternary operator (`? :`) inside your loop. If `inStock` is `false`, add the `.out-of-stock` CSS class to the card and display "Out of Stock" instead of the price.

**Task B: Initial Load**
Call your `renderProducts(products)` function at the bottom of your script so the page displays all items when it first loads.

**Task C: Filtering (Functional Methods)**
Add event listeners to your three HTML buttons.
* When "All" is clicked, call `renderProducts` with the original `products` array.
* When "Laptops" is clicked, use the `.filter()` method to create a new array of only laptops, and pass that new array to `renderProducts`.
* When "Accessories" is clicked, use `.filter()` to pass only accessories to the render function.
