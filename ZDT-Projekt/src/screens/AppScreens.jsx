import React from 'react';
import { useAuth } from '../context/AuthContext';

// ============================================
// HOME SCREEN
// ============================================
export const HomeScreen = () => {
  const { user } = useAuth();

  return (
    <div className="p-4 space-y-6">
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold text-white">
          Hey {user?.displayName?.split(' ')[0] || 'Investor'} 👋
        </h2>
        <p className="text-slate-400 mt-1">Entdecke neue Startups</p>
      </div>

      {/* Featured Placeholder */}
      <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/10 border border-emerald-500/20 rounded-2xl p-6">
        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Featured</span>
        <h3 className="text-xl font-bold text-white mt-2">Startup der Woche</h3>
        <p className="text-slate-400 mt-1 text-sm">Hier werden bald die besten Startup-Pitches angezeigt.</p>
      </div>

      {/* Stats Placeholder */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
          <p className="text-2xl font-bold text-white">0</p>
          <p className="text-sm text-slate-400">Investments</p>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
          <p className="text-2xl font-bold text-white">0€</p>
          <p className="text-sm text-slate-400">Portfolio-Wert</p>
        </div>
      </div>

      {/* Recent Activity Placeholder */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Letzte Aktivität</h3>
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center">
          <p className="text-slate-500">Noch keine Aktivität</p>
          <p className="text-slate-600 text-sm mt-1">Entdecke Startups und investiere!</p>
        </div>
      </div>
    </div>
  );
};

// ============================================
// DISCOVER SCREEN (Video Feed)
// ============================================
export const DiscoverScreen = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Startups suchen..."
          className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Filter Tags */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['Alle', 'Tech', 'Green', 'FinTech', 'Health', 'AI'].map((tag) => (
          <button
            key={tag}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              tag === 'Alle'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Video Feed Placeholder */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="aspect-video bg-slate-800 flex items-center justify-center">
            <span className="text-4xl">🎬</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-white">Startup #{i}</h3>
            <p className="text-sm text-slate-400 mt-1">Kurzbeschreibung des Startups kommt hier hin...</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="text-xs text-emerald-400 font-medium">💰 Seed-Phase</span>
              <span className="text-xs text-slate-500">👀 1.2k Views</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ============================================
// UPLOAD SCREEN
// ============================================
export const UploadScreen = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white">Video hochladen</h2>
        <p className="text-slate-400 text-sm mt-1">Pitche dein Startup in 60 Sekunden</p>
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-slate-700 rounded-2xl p-12 text-center hover:border-emerald-500/50 transition-colors cursor-pointer">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
          <span className="text-3xl">📹</span>
        </div>
        <p className="text-white font-medium">Video auswählen</p>
        <p className="text-sm text-slate-500 mt-1">MP4, max. 60 Sekunden, max. 100MB</p>
      </div>

      {/* Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Startup-Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Wie heißt dein Startup?"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Beschreibung</label>
          <textarea
            rows={3}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            placeholder="Beschreibe dein Startup in 2-3 Sätzen..."
          />
        </div>
        <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors">
          Hochladen
        </button>
      </div>
    </div>
  );
};

// ============================================
// PORTFOLIO SCREEN
// ============================================
export const PortfolioScreen = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Portfolio Value */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
        <p className="text-sm text-slate-400">Gesamtwert</p>
        <p className="text-3xl font-bold text-white mt-1">0,00 €</p>
        <p className="text-sm text-slate-500 mt-1">+0,00% insgesamt</p>
      </div>

      {/* Investments */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Deine Investments</h3>
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center">
          <span className="text-4xl">📊</span>
          <p className="text-slate-500 mt-3">Noch keine Investments</p>
          <p className="text-slate-600 text-sm mt-1">Entdecke Startups und investiere!</p>
        </div>
      </div>
    </div>
  );
};

// ============================================
// PROFILE SCREEN
// ============================================
export const ProfileScreen = () => {
  const { user } = useAuth();

  return (
    <div className="p-4 space-y-6">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-2xl font-bold text-white">
          {user?.displayName?.charAt(0)?.toUpperCase() || '?'}
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{user?.displayName || 'User'}</h2>
          <p className="text-sm text-slate-400">{user?.email}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-center">
          <p className="text-xl font-bold text-white">0</p>
          <p className="text-xs text-slate-400">Investments</p>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-center">
          <p className="text-xl font-bold text-white">0</p>
          <p className="text-xs text-slate-400">Favoriten</p>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3 text-center">
          <p className="text-xl font-bold text-white">0</p>
          <p className="text-xs text-slate-400">Startups</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-1">
        {[
          { label: 'Persönliche Daten', emoji: '👤' },
          { label: 'Benachrichtigungen', emoji: '🔔' },
          { label: 'Sicherheit', emoji: '🔒' },
          { label: 'Hilfe & FAQ', emoji: '❓' },
          { label: 'Über ZDT', emoji: 'ℹ️' },
        ].map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800/50 transition-colors"
          >
            <span className="text-lg">{item.emoji}</span>
            <span className="text-slate-200">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
