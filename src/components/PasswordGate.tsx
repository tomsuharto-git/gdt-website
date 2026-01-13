'use client';

import { useState, useEffect } from 'react';

interface PasswordGateProps {
  brandId: string;
  password: string;
  children: React.ReactNode;
}

export default function PasswordGate({ brandId, password, children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const storageKey = `gdt-auth-${brandId}`;

  useEffect(() => {
    // Check if already authenticated in this session
    const stored = sessionStorage.getItem(storageKey);
    if (stored === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [storageKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      sessionStorage.setItem(storageKey, 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setInputPassword('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen gdt-bg-primary flex items-center justify-center">
        <div className="gdt-text-muted">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen gdt-bg-primary flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="gdt-card p-8">
          <h1 className="gdt-display text-2xl md:text-3xl text-center mb-2">
            Protected Content
          </h1>
          <p className="gdt-text-secondary text-center mb-8">
            This diagnosis requires a password to access.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 gdt-bg-secondary border gdt-border rounded-lg gdt-text-primary gdt-placeholder focus:outline-none gdt-focus transition-colors"
                autoFocus
              />
              {error && (
                <p className="text-red-400 text-sm mt-2">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 gdt-bg-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Access Diagnosis
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
