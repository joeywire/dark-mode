import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [view, toggleView] = useLocalStorage('mode');

    return [view, toggleView];
}