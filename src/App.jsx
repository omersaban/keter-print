import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import NavigationTracker from '@/lib/NavigationTracker';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

// ייבוא ידני של העמודים וה-Layout שלך
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/Order';
import Articles from './pages/Articles'; // העמוד החדש

// עטיפת ה-Layout המקורית שלך
const LayoutWrapper = ({ children, currentPageName }) => {
  return Layout ? (
    <Layout currentPageName={currentPageName}>{children}</Layout>
  ) : (
    <>{children}</>
  );
};

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // הצגת טוען בזמן בדיקת אימות
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // טיפול בשגיאות אימות
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={
        <LayoutWrapper currentPageName="Home">
          <Home />
        </LayoutWrapper>
      } />

      <Route path="/Home" element={
        <LayoutWrapper currentPageName="Home">
          <Home />
        </LayoutWrapper>
      } />
      
      <Route path="/About" element={
        <LayoutWrapper currentPageName="About">
          <About />
        </LayoutWrapper>
      } />
      
      <Route path="/Order" element={
        <LayoutWrapper currentPageName="Order">
          <Order />
        </LayoutWrapper>
      } />

      {/* העמוד החדש בתוך המבנה המקורי שלך */}
      <Route path="/Articles" element={
        <LayoutWrapper currentPageName="Articles">
          <Articles />
        </LayoutWrapper>
      } />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <NavigationTracker />
          <AuthenticatedApp />
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
