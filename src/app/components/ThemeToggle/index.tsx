'use client'

import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './themeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <button
      className={styles.toggleButton}
      onClick={handleClick}
      aria-label={`Mudar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
      title={`Modo ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      <div className={`${styles.track} ${theme === 'light' ? styles.light : styles.dark}`}>
        <div className={styles.thumb}>
          {theme === 'light' ? (
            <FiSun className={styles.icon} />
          ) : (
            <FiMoon className={styles.icon} />
          )}
        </div>
      </div>
    </button>
  );
}
