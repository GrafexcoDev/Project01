import React from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = React.useState(() => document.documentElement.classList.contains('dark'));
  const toggle = () => {
    document.documentElement.classList.toggle('dark');
    setDark(document.documentElement.classList.contains('dark'));
  };
  return (
    <button aria-label="Toggle theme" onClick={toggle} className="rounded-xl border border-[rgb(var(--border))] px-3 py-2">
      {dark ? '🌙' : '☀️'}
    </button>
  );
}