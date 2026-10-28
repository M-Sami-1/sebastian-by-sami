import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollReveal } from './components/ScrollReveal';
import { MenuPage } from './pages/MenuPage';
import { ItemDetailsPage } from './pages/ItemDetailsPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useMenu } from './hooks/useMenu';

export default function App() {
  const { menu, loading, error, refetch } = useMenu();

  return (
    <div className="app-shell">
      <ScrollToTop />
      <ScrollReveal />
      {/* Global Header with live dynamic cart count on every screen */}
      <Header />

      <main className="main-content" id="main-content">
        <Routes>
          {/* Main Menu Routes */}
          <Route
            path="/"
            element={
              <MenuPage
                menu={menu}
                loading={loading}
                error={error}
                onRetry={refetch}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <MenuPage
                menu={menu}
                loading={loading}
                error={error}
                onRetry={refetch}
              />
            }
          />

          {/* Dynamic Item Details Route */}
          <Route
            path="/item/:id"
            element={
              <ItemDetailsPage
                menu={menu}
                loading={loading}
                error={error}
                onRetry={refetch}
              />
            }
          />

          {/* Cart Route */}
          <Route path="/cart" element={<CartPage />} />

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
