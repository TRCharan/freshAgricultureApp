// Product Data with Working Image URLs
const products = [
  // Fruits (15 products)
  {
    id: 1,
    name: "Fresh Apples",
    price: 120,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 60,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Sweet Oranges",
    price: 80,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Fresh Mangoes",
    price: 150,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1605027990121-ce9b6c11b08e?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Grapes",
    price: 100,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Strawberries",
    price: 200,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Pineapple",
    price: 90,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=300&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Watermelon",
    price: 40,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Pomegranate",
    price: 180,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1553279768824-72359e06133a?w=300&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Kiwi Fruit",
    price: 250,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=300&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Papaya",
    price: 70,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=300&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Guava",
    price: 85,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1536511132770-e5058c4e1d63?w=300&h=300&fit=crop",
  },
  {
    id: 13,
    name: "Dragon Fruit",
    price: 300,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=300&h=300&fit=crop",
  },
  {
    id: 14,
    name: "Avocado",
    price: 220,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop",
  },
  {
    id: 15,
    name: "Coconut",
    price: 50,
    category: "fruits",
    image: "https://images.unsplash.com/photo-1560769680-ba2f3767c785?w=300&h=300&fit=crop",
  },

  // Vegetables (15 products)
  {
    id: 16,
    name: "Fresh Tomatoes",
    price: 45,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1546470427-e5ac89cd0b31?w=300&h=300&fit=crop",
  },
  {
    id: 17,
    name: "Onions",
    price: 35,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=300&h=300&fit=crop",
  },
  {
    id: 18,
    name: "Potatoes",
    price: 30,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop",
  },
  {
    id: 19,
    name: "Carrots",
    price: 55,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&h=300&fit=crop",
  },
  {
    id: 20,
    name: "Spinach",
    price: 40,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop",
  },
  {
    id: 21,
    name: "Broccoli",
    price: 80,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&h=300&fit=crop",
  },
  {
    id: 22,
    name: "Cauliflower",
    price: 60,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1568584711271-946d4d46b7d5?w=300&h=300&fit=crop",
  },
  {
    id: 23,
    name: "Bell Peppers",
    price: 90,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?w=300&h=300&fit=crop",
  },
  {
    id: 24,
    name: "Cucumber",
    price: 35,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&h=300&fit=crop",
  },
  {
    id: 25,
    name: "Cabbage",
    price: 25,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=300&h=300&fit=crop",
  },
  {
    id: 26,
    name: "Green Beans",
    price: 70,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&h=300&fit=crop",
  },
  {
    id: 27,
    name: "Eggplant",
    price: 50,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&h=300&fit=crop",
  },
  {
    id: 28,
    name: "Okra",
    price: 65,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1583663848850-46af132dc08e?w=300&h=300&fit=crop",
  },
  {
    id: 29,
    name: "Bitter Gourd",
    price: 55,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300&h=300&fit=crop",
  },
  {
    id: 30,
    name: "Bottle Gourd",
    price: 40,
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=300&fit=crop",
  },

  // Dairy Products (10 products)
  {
    id: 31,
    name: "Fresh Milk",
    price: 60,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop",
  },
  {
    id: 32,
    name: "Paneer",
    price: 280,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop",
  },
  {
    id: 33,
    name: "Yogurt",
    price: 45,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1571212515416-fca0bf4c5ac4?w=300&h=300&fit=crop",
  },
  {
    id: 34,
    name: "Butter",
    price: 320,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=300&fit=crop",
  },
  {
    id: 35,
    name: "Cheese",
    price: 400,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=300&fit=crop",
  },
  {
    id: 36,
    name: "Ghee",
    price: 550,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop",
  },
  {
    id: 37,
    name: "Cream",
    price: 180,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop",
  },
  {
    id: 38,
    name: "Buttermilk",
    price: 35,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1571212515416-fca0bf4c5ac4?w=300&h=300&fit=crop",
  },
  {
    id: 39,
    name: "Ice Cream",
    price: 150,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300&h=300&fit=crop",
  },
  {
    id: 40,
    name: "Mozzarella",
    price: 450,
    category: "dairy",
    image: "https://images.unsplash.com/photo-1605466237780-80b87584957b?w=300&h=300&fit=crop",
  },

  // Organic Products (10 products)
  {
    id: 41,
    name: "Organic Rice",
    price: 120,
    category: "organic",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
  },
  {
    id: 42,
    name: "Organic Wheat",
    price: 80,
    category: "organic",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=300&fit=crop",
  },
  {
    id: 43,
    name: "Organic Honey",
    price: 350,
    category: "organic",
    image: "https://plus.unsplash.com/premium_photo-1726880614839-faa6caa3b3d4?w=300&h=300&fit=crop",
  },
  {
    id: 44,
    name: "Organic Turmeric",
    price: 200,
    category: "organic",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&h=300&fit=crop",
  },
  {
    id: 45,
    name: "Organic Ginger",
    price: 150,
    category: "organic",
    image: "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?w=300&h=300&fit=crop",
  },
  {
    id: 46,
    name: "Organic Garlic",
    price: 180,
    category: "organic",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=300&fit=crop",
  },
  {
    id: 47,
    name: "Organic Lentils",
    price: 140,
    category: "organic",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=300&fit=crop",
  },
  {
    id: 48,
    name: "Organic Quinoa",
    price: 400,
    category: "organic",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300&h=300&fit=crop",
  },
  {
    id: 49,
    name: "Organic Chia Seeds",
    price: 500,
    category: "organic",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=300&fit=crop",
  },
  {
    id: 50,
    name: "Organic Almonds",
    price: 600,
    category: "organic",
    image: "https://images.unsplash.com/photo-1598110880937-0252164fb713?w=300&h=300&fit=crop",
  },
]

// Rest of your JavaScript code remains the same...
// Global Variables
let cart = JSON.parse(localStorage.getItem("cart")) || []
let filteredProducts = [...products]

// DOM Elements
const productsGrid = document.getElementById("productsGrid")
const cartBtn = document.getElementById("cartBtn")
const cartCount = document.getElementById("cartCount")
const cartModalElement = document.getElementById("cartModal")
const cartItems = document.getElementById("cartItems")
const cartTotal = document.getElementById("cartTotal")
const categoryFilter = document.getElementById("categoryFilter")
const sortFilter = document.getElementById("sortFilter")
const searchInput = document.getElementById("searchInput")
const clearFilters = document.getElementById("clearFilters")
const clearCart = document.getElementById("clearCart")
const checkoutBtn = document.getElementById("checkoutBtn")

// Import Bootstrap Modal
const bootstrap = window.bootstrap
const cartModal = new bootstrap.Modal(cartModalElement)

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  renderProducts()
  updateCartUI()
  setupEventListeners()
})

// Event Listeners
function setupEventListeners() {
  cartBtn.addEventListener("click", () => cartModal.show())
  categoryFilter.addEventListener("change", filterProducts)
  sortFilter.addEventListener("change", sortProducts)
  searchInput.addEventListener("input", searchProducts)
  clearFilters.addEventListener("click", clearAllFilters)
  clearCart.addEventListener("click", clearCartItems)
  checkoutBtn.addEventListener("click", checkout)
}

// Render Products
function renderProducts() {
  productsGrid.innerHTML = ""

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">No products found</h4>
                <p class="text-muted">Try adjusting your search or filter criteria</p>
            </div>
        `
    return
  }

  filteredProducts.forEach((product, index) => {
    const productCard = createProductCard(product, index)
    productsGrid.appendChild(productCard)
  })
}

// Create Product Card
function createProductCard(product, index) {
  const col = document.createElement("div")
  col.className = "col-lg-3 col-md-4 col-sm-6 fade-in-up"
  col.style.animationDelay = `${index * 0.1}s`

  col.innerHTML = `
        <div class="card product-card h-100">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300x200/28a745/ffffff?text=Product+Image'">
            <div class="card-body product-info d-flex flex-column">
                <span class="product-category">${product.category}</span>
                <h5 class="product-title">${product.name}</h5>
                <p class="product-price">₹${product.price}</p>
                <div class="mt-auto">
                    <button class="btn btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus me-2"></i>Add to Cart
                    </button>
                    <button class="btn btn-buy-now" onclick="buyNow(${product.id})">
                        <i class="fas fa-bolt me-2"></i>Buy Now
                    </button>
                </div>
            </div>
        </div>
    `

  return col
}

// Add to Cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartUI()
  showSuccessMessage(`${product.name} added to cart!`)
}

// Buy Now
function buyNow(productId) {
  const product = products.find((p) => p.id === productId)
  showSuccessMessage(`Redirecting to checkout for ${product.name}...`)

  // Simulate redirect to checkout
  setTimeout(() => {
    alert(
      `Checkout for ${product.name} - ₹${product.price}\n\nThis is a demo. In a real application, this would redirect to a payment gateway.`,
    )
  }, 1000)
}

// Update Cart UI
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  cartCount.textContent = totalItems
  cartTotal.textContent = totalPrice

  renderCartItems()
}

// Render Cart Items
function renderCartItems() {
  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="text-center py-4">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <h5 class="text-muted">Your cart is empty</h5>
                <p class="text-muted">Add some products to get started!</p>
            </div>
        `
    return
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-2">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/60x60/28a745/ffffff?text=IMG'">
                </div>
                <div class="col-4">
                    <h6 class="mb-1">${item.name}</h6>
                    <small class="text-muted">₹${item.price} each</small>
                </div>
                <div class="col-3">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="col-2 text-end">
                    <strong>₹${item.price * item.quantity}</strong>
                </div>
                <div class="col-1">
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Update Quantity
function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    item.quantity += change
    if (item.quantity <= 0) {
      removeFromCart(productId)
    } else {
      localStorage.setItem("cart", JSON.stringify(cart))
      updateCartUI()
    }
  }
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartUI()
}

// Clear Cart
function clearCartItems() {
  cart = []
  localStorage.removeItem("cart")
  updateCartUI()
  showSuccessMessage("Cart cleared!")
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!")
    return
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  alert(
    `Checkout Summary:\n\nItems: ${itemCount}\nTotal: ₹${total}\n\nThis is a demo. In a real application, this would redirect to a payment gateway.`,
  )

  // Clear cart after checkout
  clearCartItems()
  cartModal.hide()
}

// Filter Products
function filterProducts() {
  const category = categoryFilter.value

  if (category === "all") {
    filteredProducts = [...products]
  } else {
    filteredProducts = products.filter((product) => product.category === category)
  }

  applySearch()
  renderProducts()
}

// Sort Products
function sortProducts() {
  const sortBy = sortFilter.value

  switch (sortBy) {
    case "name":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
  }

  renderProducts()
}

// Search Products
function searchProducts() {
  applySearch()
  renderProducts()
}

// Apply Search Filter
function applySearch() {
  const searchTerm = searchInput.value.toLowerCase()

  if (searchTerm) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm),
    )
  }
}

// Clear All Filters
function clearAllFilters() {
  categoryFilter.value = "all"
  sortFilter.value = "name"
  searchInput.value = ""
  filteredProducts = [...products]
  renderProducts()
}

// Show Success Message
function showSuccessMessage(message) {
  const successDiv = document.createElement("div")
  successDiv.className = "success-message"
  successDiv.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        ${message}
    `

  document.body.appendChild(successDiv)

  setTimeout(() => {
    successDiv.classList.add("show")
  }, 100)

  setTimeout(() => {
    successDiv.classList.remove("show")
    setTimeout(() => {
      document.body.removeChild(successDiv)
    }, 300)
  }, 3000)
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
