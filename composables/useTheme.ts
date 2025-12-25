import { ref, watch, onMounted } from 'vue';

export const useTheme = () => {
  const theme = ref<'dark' | 'light'>('dark');

  const setTheme = (newTheme: 'dark' | 'light') => {
    theme.value = newTheme;
    if (process.client) {
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(newTheme);
    }
  };

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark');
  };

  const initTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
      setTheme(initialTheme);
    }
  };

  onMounted(() => {
    initTheme();
  });

  return {
    theme,
    setTheme,
    toggleTheme,
    initTheme
  };
};

