# SEBASTIAN by SAMI

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.3-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance, responsive React web application for **SEBASTIAN by SAMI**. Designed with a punchy, bold visual personality inspired by modern street food and independent kitchen culture, the platform provides diners with seamless menu exploration, mood-based filtering, item customization, instant cart calculations, and online pickup ordering.

New contributors can follow the dedicated [Setup and Run Guide](SETUP.md) for installation, development, and production preview steps.

---

## 🌟 Key Features

1. **Dynamic Local JSON Menu Loading**
   - Menu items are fetched dynamically from `/menu.json` using `useEffect`, `fetch`, and `async/await`.
   - Comprehensive error handling with user-friendly retry mechanism (`ErrorState`) and animated skeleton screens (`LoadingState`).
   - 18 realistic, high-quality menu items spanning **Fast Food**, **Main Course**, **Breakfast**, **Snacks**, **Drinks**, and **Desserts** with real photography assets.

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
   - LocalStorage synchronization prevents accidental order loss on browser refresh.

5. **Dynamic Item Details Route (`/item/:id`)**
   - Dedicated dish view showing preparation time, calorie counts, allergen notices, napkins needed, and heat/spice meters.
   - Interactive quantity control with live price calculation.
   - Graceful fallback for invalid item IDs with an intuitive "Return to Menu" link.

6. **Order Receipt & Responsive Checkout Modal**
   - Authentic retro paper receipt breakdown (`OrderReceipt`) inspired by street-food tickets.
   - Pick-up station selector and kitchen notes input.
   - Viewport-safe, mobile-first order confirmation modal (`OrderSuccessModal`) with pickup token code and estimated prep time.

7. **Bespoke Responsive Design & Real Assets**
   - Electric red, deep charcoal, and warm vintage cream palette with responsive, reduced-motion-aware interactions.
   - Iconic checkered flag ribbons and marquee ticker tapes.
   - Fully optimized for mobile phones (touch friendly, collapsible drawer), tablets, and high-res desktops.
   - Real food photography and brand logo/favicon assets with fallback support.

---

## 🏗️ Architecture & Folder Structure

```text
Assignment-ACP/
├── public/
│   ├── assets/
│   │   ├── branding/         # Brand logo assets
│   │   └── food/             # Real food photography & assets
│   ├── menu.json             # Dynamic menu data source
│   ├── favicon.png           # Site favicon
├── src/
│   ├── components/           # Reusable presentational & container components
│   │   ├── AboutSection.jsx  # Brand philosophy & kitchen standards
│   │   ├── Cart.jsx          # Dedicated cart container
│   │   ├── CartItem.jsx      # Line item with quantity stepper & remove
│   │   ├── CategoryFilter.jsx# Category pills with item count badges
│   │   ├── CheckeredRibbon.jsx # Iconic black & white checkered divider
│   │   ├── EmptyState.jsx    # Reusable contextual empty state
│   │   ├── ErrorState.jsx    # Graceful error state with retry button
│   │   ├── FavouriteButton.jsx # Accessible heart bookmark button
│   │   ├── Footer.jsx        # Footer links, newsletter & non-clipping brand
│   │   ├── Header.jsx        # Sticky navigation with live cart count
│   │   ├── HeroBanner.jsx    # Hero visual & marquee ticker ribbon
│   │   ├── ItemCard.jsx      # Food card with fallback, tags, price & add
│   │   ├── ItemDetails.jsx   # Detailed dish view with specs & meters
│   │   ├── LoadingState.jsx  # Animated skeleton loader
│   │   ├── MenuList.jsx      # Responsive grid container for items
│   │   ├── MoodFilter.jsx    # "WHAT'S THE MOOD?" mood filter buttons
│   │   ├── MoodShowcase.jsx  # Featured dish card with flame heat meters
│   │   ├── OrderReceipt.jsx  # Vintage paper receipt summary
│   │   ├── OrderSuccessModal.jsx # Viewport-contained order confirmation
│   │   ├── QuantityControl.jsx # Accessible [-] count [+] stepper
│   │   ├── ScrollToTop.jsx   # Smooth page scroll reset on route changes
│   │   ├── SearchBar.jsx     # Search input with clear button
│   │   └── WhyItTastesLikeThat.jsx # 230°C griddle quality standards
│   ├── context/
│   │   ├── CartContext.jsx   # Global cart state & calculations
│   │   └── FavouritesContext.jsx # Bookmarked items state & persistence
│   ├── hooks/
│   │   └── useMenu.js        # Dynamic fetch hook for /menu.json
│   ├── pages/
│   │   ├── MenuPage.jsx      # Main landing & menu exploration screen
│   │   ├── ItemDetailsPage.jsx # Dynamic route page (/item/:id)
│   │   ├── CartPage.jsx      # Dedicated checkout page (/cart)
│   │   └── NotFoundPage.jsx  # 404 error page
│   ├── utils/
│   │   └── formatters.js     # Currency (Rs.) & string utilities
│   ├── App.jsx               # Application router & layout shell
│   ├── main.jsx              # React DOM root & context providers
│   └── index.css             # Unified CSS design system & media queries
├── index.html                # HTML entry point with Google Fonts & favicon
├── package.json              # Project dependencies & scripts
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

---

## 🛠️ Technologies Used

- **React 19** – Functional components, modern hooks (`useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`, `useRef`).
- **React Router 7** – Client-side routing with dynamic parameters (`/item/:id`) and query string synchronization.
- **Context API** – Global, decentralized state for Cart and Favourites without external heavyweight libraries.
- **Lucide React** – Clean, semantic SVG iconography (no emojis used).
- **Vite 6** – Next-generation frontend build tooling with instant HMR and optimized production bundles.
- **Native CSS3** – Custom properties (variables), Flexbox, CSS Grid, media queries, `clamp()`, and keyframe animations.

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
   git clone https://github.com/M-Sami-1/sebastian-by-sami.git
   cd sebastian-by-sami
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

4. Create an optimized production build:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

### Project Workflow

1. Create a branch for a focused change.
2. Install dependencies with `npm install`.
3. Run the app with `npm run dev` and check the affected routes at desktop and narrow mobile widths.
4. Keep menu changes in `public/menu.json`, reusable UI in `src/components/`, and shared styles in `src/index.css`.
5. Run `npm run build` before opening a pull request.
6. Include a short summary, screenshots for visual changes, and relevant notes about asset sources or behavior.

### Menu Data and Assets

- Edit menu entries in `public/menu.json`. Preserve each item's unique `id` and the category names used by the category filter.
- Put public images under `public/assets/` and reference them with root-relative paths such as `/assets/food/double-smash.webp`.
- Keep credentials, `.env` files, local staging folders, `node_modules`, and build output out of commits. The repository `.gitignore` excludes common local-only files.
- Cart, favourites, and newsletter interactions currently run in the browser. Orders and newsletter signups are not sent to a backend service.

### Accessibility and Motion

- Use semantic elements and accessible names for new controls.
- Keep keyboard focus visible and preserve touch-friendly targets.
- Respect `prefers-reduced-motion`; avoid relying on animation to communicate essential information.

### Contributing

Pull requests are welcome. For larger changes, open an issue first to agree on the approach. Keep changes focused, avoid committing generated build folders or local secrets, and describe how the change was checked. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full contributor checklist.

---

## 👨‍🍳 Author & Credits

- **Brand Identity**: SEBASTIAN by SAMI
- **Developer**: Muhammad Sami ([@M-Sami-1](https://github.com/M-Sami-1))

## License

The application source code is available under the MIT License; see [LICENSE](LICENSE). Brand marks, product photography, and other supplied media are not covered by that code license. Check their ownership and permissions before reusing them outside this project.
