import React, { useState } from 'react';
import { loginUser } from '../firebase';

const LoginScreen = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await loginUser(email, password);
    if (!result.success) {
      setError(result.error === 'Firebase: Error (auth/invalid-credential).'
        ? 'E-Mail oder Passwort falsch'
        : result.error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">E-Mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="deine@email.de"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1">Passwort</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="••••••••"
          required
        />
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 text-white font-semibold rounded-xl transition-colors"
      >
        {loading ? 'Lädt...' : 'Einloggen'}
      </button>

      <p className="text-center text-slate-400 text-sm">
        Noch kein Account?{' '}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-emerald-400 hover:text-emerald-300 font-medium"
        >
          Registrieren
        </button>
      </p>
    </form>
  );
};

export default LoginScreen;
