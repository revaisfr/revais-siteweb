declare module 'next-themes' {
  import * as React from 'react';

  export interface ThemeProviderProps {
    children?: React.ReactNode;
    attribute?: string;            // ex: "class"
    defaultTheme?: string;         // "system" | "light" | "dark" | custom
    enableSystem?: boolean;
    enableColorScheme?: boolean;
    storageKey?: string;
    forcedTheme?: string;
    disableTransitionOnChange?: boolean;
    themes?: string[];
    value?: string;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;
  export function useTheme(): {
    theme?: string;
    systemTheme?: 'light' | 'dark';
    resolvedTheme?: 'light' | 'dark';
    setTheme: (t: string) => void;
    themes: string[];
  };
}
