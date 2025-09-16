// Shopping Cart Functionality
class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateCartDisplay();
        this.initScrollButtons();
    }

    bindEvents() {
        // Add to cart buttons
        document.querySelectorAll('.add-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productCard = e.target.closest('.product-card');
                const productName = productCard.querySelector('h3').textContent;
                const productPrice = productCard.querySelector('.current-price').textContent;
                const productImage = productCard.querySelector('img').src;
                this.addItem({
                    name: productName,
                    price: parseFloat(productPrice.replace('₹', '')),
                    image: productImage
                });
            });
        });

        // Cart button
        document.getElementById('cartBtn').addEventListener('click', () => {
            this.toggleCart();
        });

        // Close cart button
        document.getElementById('closeCart').addEventListener('click', () => {
            this.closeCart();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Quantity selectors
        document.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const qtySpan = e.target.parentElement.querySelector('.qty');
                let qty = parseInt(qtySpan.textContent);
                
                if (e.target.textContent === '+') {
                    qty++;
                } else if (e.target.textContent === '-' && qty > 1) {
                    qty--;
                }
                
                qtySpan.textContent = qty;
            });
        });
    }

    initScrollButtons() {
        // Category scroll buttons
        const categoryLeft = document.querySelector('.categories .scroll-left');
        const categoryRight = document.querySelector('.categories .scroll-right');
        const categoryContainer = document.querySelector('.categories-container');
        
        if (categoryLeft && categoryRight && categoryContainer) {
            categoryLeft.addEventListener('click', () => {
                categoryContainer.scrollBy({ left: -200, behavior: 'smooth' });
            });
            
            categoryRight.addEventListener('click', () => {
                categoryContainer.scrollBy({ left: 200, behavior: 'smooth' });
            });
        }

        // Offers scroll buttons
        const offersLeft = document.querySelector('.offers .scroll-left');
        const offersRight = document.querySelector('.offers .scroll-right');
        const offersContainer = document.querySelector('.offers-container');
        
        if (offersLeft && offersRight && offersContainer) {
            offersLeft.addEventListener('click', () => {
                offersContainer.scrollBy({ left: -300, behavior: 'smooth' });
            });
            
            offersRight.addEventListener('click', () => {
                offersContainer.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }

        // Products scroll buttons
        document.querySelectorAll('.products-scroll').forEach(scrollContainer => {
            const leftBtn = scrollContainer.querySelector('.scroll-left');
            const rightBtn = scrollContainer.querySelector('.scroll-right');
            const productsContainer = scrollContainer.querySelector('.products-container');
            
            if (leftBtn && rightBtn && productsContainer) {
                leftBtn.addEventListener('click', () => {
                    productsContainer.scrollBy({ left: -250, behavior: 'smooth' });
                });
                
                rightBtn.addEventListener('click', () => {
                    productsContainer.scrollBy({ left: 250, behavior: 'smooth' });
                });
            }
        });
    }

    addItem(productData) {
        const existingItem = this.items.find(item => item.name === productData.name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...productData,
                quantity: 1
            });
        }

        this.updateCartDisplay();
        this.showAddToCartAnimation();
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.updateCartDisplay();
    }

    updateQuantity(index, change) {
        this.items[index].quantity += change;
        if (this.items[index].quantity <= 0) {
            this.removeItem(index);
        } else {
            this.updateCartDisplay();
        }
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        // Update cart count
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Update cart items display
        if (this.items.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = this.items.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>₹${item.price.toFixed(2)}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button class="quantity-btn" onclick="cart.updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity(${index}, 1)">+</button>
                        <button class="remove-btn" onclick="cart.removeItem(${index})">Remove</button>
                    </div>
                </div>
            `).join('');
        }

        // Update total
        this.total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `₹${this.total.toFixed(2)}`;
    }

    toggleCart() {
        const cartModal = document.getElementById('cartModal');
        cartModal.classList.toggle('active');
    }

    closeCart() {
        const cartModal = document.getElementById('cartModal');
        cartModal.classList.remove('active');
    }

    showAddToCartAnimation() {
        // Create a temporary notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #2d5a27;
            color: white;
            padding: 1rem 2rem;
            border-radius: 25px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 3000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = 'Item added to cart!';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }
}

// Simple animations for the CoolVibrant design
class PageAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.addScrollAnimations();
    }

    addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.product-card, .offer-card, .category-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const cart = new ShoppingCart();
    const animations = new PageAnimations();
    
    // Make cart globally accessible
    window.cart = cart;
    
    // Handle image loading
    handleImageLoading();
});

// Handle image loading with fallbacks
function handleImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            // Create a placeholder div if image fails to load
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                background: #f5f5f5;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #999;
                font-size: 0.8rem;
            `;
            placeholder.textContent = 'Image';
            this.parentNode.replaceChild(placeholder, this);
        });
        
        // Set initial opacity
        img.style.opacity = '0';
    });
}