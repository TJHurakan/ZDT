import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-2xl shadow-emerald-500/20 mb-4">
            <span className="text-4xl">📈</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            ZDT
          </h1>
          <p className="text-slate-400 mt-1">Kurzvideo-Investment-Plattform</p>
        </div>

        {/* Auth Form */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          {isLogin ? (
            <LoginScreen onSwitchToRegister={() => setIsLogin(false)} />
          ) : (
            <RegisterScreen onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
