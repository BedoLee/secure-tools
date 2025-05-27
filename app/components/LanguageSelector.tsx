import { useState, useEffect } from 'react';

const languages = [
  { code: 'tr', label: 'Türkçe' },
  { code: 'en', label: 'English' },
];

export default function LanguageSelector({ onChange }: { onChange?: (lang: string) => void }) {
  const [lang, setLang] = useState('tr');

  useEffect(() => {
    const saved = localStorage.getItem('lang') || 'tr';
    setLang(saved);
    if (onChange) onChange(saved);
  }, [onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
    localStorage.setItem('lang', e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
      aria-label="Dil Seç"
    >
      {languages.map(l => (
        <option key={l.code} value={l.code}>{l.label}</option>
      ))}
    </select>
  );
} 