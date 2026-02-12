import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthScreen from './screens/AuthScreen';
import Layout from './components/Layout';
import { HomeScreen, DiscoverScreen, UploadScreen, PortfolioScreen, ProfileScreen } from './screens/AppScreens';

const AppContent = () => {
  const { user, loading } = useAuth();
  const [currentTab, setCurrentTab] = useState('home');

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-2xl shadow-emerald-500/20 mb-4">
          <span className="text-4xl">📈</span>
        </div>
        <p className="text-slate-400 mt-2">Lädt...</p>
      </div>
    );
  }

  // Nicht eingeloggt → Auth Screen
  if (!user) {
    return <AuthScreen />;
  }

  // Eingeloggt → App mit Layout
  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <HomeScreen />;
      case 'discover':
        return <DiscoverScreen />;
      case 'upload':
        return <UploadScreen />;
      case 'portfolio':
        return <PortfolioScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <Layout currentTab={currentTab} onTabChange={setCurrentTab}>
      {renderContent()}
    </Layout>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
