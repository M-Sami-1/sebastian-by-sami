# SEBASTIAN · Campus Canteen by SAMI

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.3-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance, responsive React web application built for university campus dining. Designed with a punchy, bold visual personality inspired by modern street food and campus culture, **SEBASTIAN by SAMI** provides students and faculty with seamless daily menu exploration, mood-based filtering, item customization, instant cart calculations, and counter pickup ordering.

---

## 🌟 Key Features

1. **Dynamic Local JSON Menu Loading**
   - Canteen menu items are fetched dynamically from `/menu.json` using `useEffect`, `fetch`, and `async/await`.
   - Comprehensive error handling with user-friendly retry mechanism (`ErrorState`) and animated skeleton screens (`LoadingState`).
   - 18+ realistic university canteen items spanning **Fast Food**, **Main Course**, **Breakfast**, **Snacks**, **Drinks**, and **Desserts**.

2. **Real-time Search & Multi-layer Filtering**
   - Search menu items instantly by dish title or description.
   - Filter items by category tabs with live item count badges.
   - **"WHAT'S THE MOOD?"** filter (Starving, Crunchy, Spicy, Sweet tooth, Snacky, Late night).
   - Search and category filters work in tandem without page reload.

3. **Persistent Favourites System**
   - Toggle favourites on any item from the menu grid, spotlight card, or item details page.
   - Saved across browser sessions using `localStorage`.
   - Filter to show "Favourites Only" with one click.

4. **Global Cart Context (`CartContext`)**
   - Single source of truth for all cart operations across every screen.
   - Adding an existing item automatically increments its quantity instead of duplicating entries.
   - Live cart badge count in the header updates instantly without page reload.
   - Automatic live calculation of item subtotals and overall order total.
   - LocalStorage synchronization prevents accidental tray loss on browser refresh.

5. **Dynamic Item Details Route (`/item/:id`)**
   - Dedicated dish view showing preparation time, calorie counts, allergen notices, napkins needed, and heat/spice meters.
   - Interactive quantity control with live price calculation.
   - Graceful fallback for invalid item IDs with an intuitive "Return to Menu" link.

6. **Campus Canteen Checkout Simulation**
   - Authentic retro paper receipt breakdown (`OrderReceipt`) inspired by street-food tickets.
   - Campus pickup hub selector (Student Union, North Quad, Science Block, Central Library).
   - Kitchen notes input for special student requests (e.g., extra spicy, no onions).
   - Order confirmation modal with pickup token code and estimated prep time.

7. **Bespoke Responsive Design & Aesthetics**
   - Electric red, deep charcoal, and warm vintage cream palette based on `Design_inspo`.
   - Iconic checkered flag ribbons and marquee ticker tapes.
   - Fully optimized for mobile phones (touch friendly, collapsible drawer), tablets, and high-res desktops.
   - Safe vector image fallbacks so missing image paths never break layouts.

---

## 🏗️ Architecture & Folder Structure

The application follows a clean, component-based React architecture designed for maintainability and scalability:

```text
Assignment-ACP/
├── public/
│   ├── assets/
│   │   └── food/             # Vector food illustrations & SVG assets
│   ├── menu.json             # Dynamic canteen menu data source
│   └── favicon.svg           # Branded S icon
├── scripts/
│   └── generate-food-assets.js # Asset illustration generator
├── src/
│   ├── assets/               # Static assets & icons
│   ├── components/           # Reusable presentational & container components
│   │   ├── Cart.jsx          # Dedicated cart container
│   │   ├── CartItem.jsx      # Line item with quantity stepper & remove
│   │   ├── CategoryFilter.jsx# Category pills with item count badges
│   │   ├── CheckeredRibbon.jsx # Iconic black & white checkered divider
│   │   ├── EmptyState.jsx    # Reusable contextual empty state
│   │   ├── ErrorState.jsx    # Graceful error state with retry button
│   │   ├── FavouriteButton.jsx # Accessible heart bookmark button
│   │   ├── Footer.jsx        # Campus hubs, student newsletter & branding
│   │   ├── Header.jsx        # Sticky navigation with live cart count
│   │   ├── HeroBanner.jsx    # Hero visual & marquee ticker ribbon
│   │   ├── ItemCard.jsx      # Food card with fallback, tags, price & add
│   │   ├── ItemDetails.jsx   # Detailed dish view with specs & meters
│   │   ├── LoadingState.jsx  # Animated skeleton loader
│   │   ├── MenuList.jsx      # Responsive grid container for items
│   │   ├── MoodFilter.jsx    # "WHAT'S THE MOOD?" mood filter buttons
│   │   ├── MoodShowcase.jsx  # Featured dish card with heat & napkin meters
│   │   ├── OrderReceipt.jsx  # Vintage paper receipt summary
│   │   ├── OrderSuccessModal.jsx # Order confirmation token modal
│   │   ├── QuantityControl.jsx # Accessible [-] count [+] stepper
│   │   ├── ScrollToTop.jsx   # Smooth page scroll reset on route changes
│   │   ├── SearchBar.jsx     # Search input with clear button
│   │   ├── CampusLocations.jsx # Live campus hub timings & status
│   │   └── WhyItTastesLikeThat.jsx # 230°C griddle quality standards
│   ├── context/
│   │   ├── CartContext.jsx   # Global cart state & calculations
│   │   └── FavouritesContext.jsx # Bookmarked items state & persistence
│   ├── hooks/
│   │   └── useMenu.js        # Dynamic fetch hook for /menu.json
│   ├── pages/
│   │   ├── MenuPage.jsx      # Main landing & menu exploration screen
│   │   ├── ItemDetailsPage.jsx # Dynamic route page (/item/:id)
│   │   ├── CartPage.jsx      # Dedicated checkout tray page (/cart)
│   │   └── NotFoundPage.jsx  # 404 error page
│   ├── utils/
│   │   └── formatters.js     # Currency (Rs.) & string utilities
│   ├── App.jsx               # Application router & layout shell
│   ├── main.jsx              # React DOM root & context providers
│   └── index.css             # Unified CSS design system & media queries
├── index.html                # HTML entry point with Google Fonts
├── package.json              # Project dependencies & scripts
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

---

## 🛠️ Technologies Used

- **React 19** – Functional components, modern hooks (`useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`, `useRef`).
- **React Router 7** – Client-side routing with dynamic parameters (`/item/:id`) and query string synchronization.
- **Context API** – Global, decentralized state for Cart and Favourites without external heavyweight libraries.
- **Lucide React** – Clean, semantic SVG iconography.
- **Vite 6** – Next-generation frontend build tooling with instant HMR and optimized production bundles.
- **Native CSS3** – Custom properties (variables), Flexbox, CSS Grid, media queries, and keyframe animations.

---

## ⚙️ How It Works

### 1. Dynamic Menu Fetching (`useMenu.js`)
Rather than statically importing JSON into React components, the menu data is retrieved at runtime from `public/menu.json`:

```javascript
// src/hooks/useMenu.js
export function useMenu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMenu = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/menu.json');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setMenu(data);
    } catch (err) {
      setError(err.message || 'Failed to load menu');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  return { menu, loading, error, refetch: fetchMenu };
}
```

### 2. Global Cart Context (`CartContext.jsx`)
The `CartProvider` provides a single source of truth for the entire application:
- **`addToCart(item, qty)`**: If the item already exists in the cart, its `quantity` is increased by `qty`. If not, it is added with `qty`.
- **`removeFromCart(id)`**: Removes the selected dish from the cart.
- **`increaseQuantity(id)` / `decreaseQuantity(id)`**: Adjusts line items with automatic removal when count reaches zero.
- **`totalCount`**: Derived via `useMemo` summing all quantities. Rendered in the Header cart badge on every screen.
- **`totalPrice`**: Derived via `useMemo` summing `price * quantity`.

---

## 🚀 How to Install and Run

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sebastian-campus-canteen.git
   cd sebastian-campus-canteen
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` (or the port indicated in your terminal).

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 📱 Screenshots & Visual Previews

| Desktop Menu & Mood Lineup | Mobile Responsive View | Retro Receipt Cart |
| :---: | :---: | :---: |
| *(Hero banner, mood selector, and food cards)* | *(Touch-friendly drawer, adaptive single column)* | *(Thermal paper receipt & order summary)* |

*(Screenshots can be added here once published to GitHub)*

---

## 🔮 Future Improvements

- [ ] Online student meal card balance integration via NFC / RFID barcode.
- [ ] Push notifications / SMS alert when the order pickup token is called at Counter 1.
- [ ] Interactive 3D burger builder ("Build Your Stack" custom topping selector).
- [ ] Dark / Light mode toggle while preserving signature canteen red.

---

## 👨‍🍳 Author & Credits

- **Identity**: SEBASTIAN Campus Canteen
- **Developer**: SAM / SAMI
- **Course**: Advanced Client-side Programming (ACP) University Assignment
