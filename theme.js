(() => {
  'use strict';

  const storageKey = 'sofiane-site-theme';
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  let button;

  function readPreference() {
    try {
      const saved = window.localStorage.getItem(storageKey);
      preference = saved === 'dark' || saved === 'light' ? saved : null;
    } catch {
      // Keep the switch working even when browser storage is unavailable.
    }
  }

  function applyTheme() {
    const theme = preference || (systemTheme.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    if (button) {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  // Run before the stylesheet to avoid a flash of the wrong theme.
  readPreference();
  applyTheme();

  document.addEventListener('DOMContentLoaded', () => {
    button = document.querySelector('.theme-toggle');
    if (!button) return;
    applyTheme();
    button.hidden = false;
    button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(storageKey, preference);
      } catch {
        // The current page can still change theme without persistent storage.
      }
      applyTheme();
    });
  });

  systemTheme.addEventListener('change', () => {
    if (!preference) applyTheme();
  });

  window.addEventListener('storage', (event) => {
    if (event.key === storageKey || event.key === null) {
      readPreference();
      applyTheme();
    }
  });

  window.addEventListener('pageshow', () => {
    readPreference();
    applyTheme();
  });
})();
