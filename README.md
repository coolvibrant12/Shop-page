# CoolVibrant - Farm Fresh Produce E-commerce Homepage

A clean, modern e-commerce homepage for CoolVibrant, a farm-fresh produce marketplace. Built with HTML, CSS, and JavaScript, featuring a white background with green accents and a focus on healthy, farm-fresh products.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Shopping Cart**: Add/remove items with real-time updates
- **Clean UI/UX**: White background with green accents and clean typography
- **Product Categories**: Circular category icons with horizontal scrolling
- **Current Offers**: Featured offer cards with different backgrounds
- **Product Showcases**: Multiple product sections with pricing in rupees
- **Comprehensive Footer**: Complete footer with all necessary links and information

## Design Elements

### Color Scheme
- Primary Green: `#2d5a27` (dark green for headings and accents)
- Background: Clean white (`#ffffff`)
- Text: Dark gray (`#333`) for readability
- Accent: Brown (`#8b4513`) for market prices button
- Light Gray: `#f5f5f5` for category icons

### Typography
- Font Family: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700
- Clean, readable sans-serif throughout

### Layout
- Clean white background with minimal shadows
- Horizontal scrolling sections for categories and products
- Card-based design for products and offers
- Mobile-first responsive approach

## File Structure

```
Shop-page/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Sections

1. **Header**: Fixed navigation with location, stores, meal planner, cart, and profile
2. **Hero**: Main banner with search functionality and market prices button
3. **Categories**: "What are you looking for?" with circular category icons
4. **Current Offers**: Featured offer cards with different backgrounds and filter buttons
5. **Product Showcases**: Multiple sections including:
   - Daily fresh vegetables combos
   - Ready to cook
   - New Spreads
   - Weekend Special
6. **Footer**: Comprehensive footer with My Account, Information, Extras, Help, Contacts, and bottom bar with payment options, social media, copyright, and app download links

## Interactive Features

### Shopping Cart
- Add items to cart with visual feedback
- Real-time cart count updates
- Modal cart view with item management
- Quantity adjustment and item removal
- Total price calculation

### Animations
- Floating cards in hero section
- Scroll-triggered animations
- Button ripple effects
- Smooth transitions and hover states
- Parallax scrolling effects

### Mobile Experience
- Responsive navigation menu
- Touch-friendly buttons and interactions
- Optimized layouts for small screens
- Swipe-friendly cart interface

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process required - runs directly in the browser

## Customization

### Colors
Modify the CSS custom properties in `styles.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-coral: #ff6b6b;
  --accent-teal: #4ecdc4;
}
```

### Products
Update product data in `script.js`:
```javascript
const products = {
  'product-key': {
    name: 'Product Name',
    price: 99.99,
    image: 'image-url'
  }
};
```

### Content
Edit text content directly in `index.html` for easy customization.

## Performance

- Optimized images from Unsplash
- Minimal JavaScript footprint
- CSS animations using transform/opacity for smooth performance
- Lazy loading for better initial page load

## Future Enhancements

- Product search functionality
- User authentication
- Payment integration
- Product reviews and ratings
- Wishlist feature
- Advanced filtering options

## License

This project is open source and available under the MIT License.