import React, { useState, useEffect } from 'react';
import { Home, Search, PlusCircle, BarChart3, User, Menu, X, Settings, LogOut, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'discover', label: 'Entdecken', icon: Search },
  { id: 'upload', label: 'Upload', icon: PlusCircle },
  { id: 'portfolio', label: 'Portfolio', icon: BarChart3 },
  { id: 'profile', label: 'Profil', icon: User },
];

const Layout = ({ children, currentTab, onTabChange }) => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar schließen bei Tab-Wechsel
  useEffect(() => {
    setSidebarOpen(false);
  }, [currentTab]);

  // Body scroll sperren wenn Sidebar offen
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  const currentNavItem = NAV_ITEMS.find(item => item.id === currentTab);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="flex items-center justify-between px-4 h-14">
          <h1 className="text-lg font-bold text-white">
            {currentNavItem?.label || 'ZDT'}
          </h1>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <Menu className="w-5 h-5 text-slate-300" />
          </button>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-slate-900 border-l border-slate-800 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <div>
            <p className="font-semibold text-white">{user?.displayName || 'User'}</p>
            <p className="text-sm text-slate-400">{user?.email}</p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="p-2">
          <button
            onClick={() => {
              setSidebarOpen(false);
              onTabChange?.('settings');
            }}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <Settings className="w-5 h-5 text-slate-400" />
            <span className="text-slate-200">Einstellungen</span>
            <ChevronRight className="w-4 h-4 text-slate-500 ml-auto" />
          </button>

          <button
            onClick={async () => {
              setSidebarOpen(false);
              await logout();
            }}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <LogOut className="w-5 h-5 text-red-400" />
            <span className="text-red-400">Abmelden</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        {typeof children === 'function' ? children({ openSidebar: () => setSidebarOpen(true) }) : children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-xl border-t border-slate-800/50">
        <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            const isSpecial = item.id === 'upload';

            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-xl transition-colors ${
                  isActive
                    ? 'text-emerald-400'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {isSpecial ? (
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center -mt-3 shadow-lg shadow-emerald-500/20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <Icon className="w-5 h-5" />
                )}
                <span className={`text-[10px] font-medium ${isSpecial ? '-mt-0.5' : ''}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Safe Area für Android/iOS */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </nav>
    </div>
  );
};

export default Layout;
