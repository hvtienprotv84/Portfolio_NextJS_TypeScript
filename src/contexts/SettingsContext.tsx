/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode } from 'react';

import { useLocalStorage } from 'hooks/useLocalStorage';

interface CtxProps {
  isSoundOn: boolean;
  handleToggleSound: any;
  language: 'pt' | 'en';
  handleToggleLanguage: any;
}

export const SettingsContext = createContext({} as CtxProps);

export const SettingsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isSoundOn, setIsSoundOn] = useLocalStorage('isSoundOn', true);
  const [language, setLanguage] = useLocalStorage('language', 'pt');

  function handleToggleLanguage() {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  }

  function handleToggleSound() {
    setIsSoundOn(!isSoundOn);
  }

  return (
    <SettingsContext.Provider
      value={{ isSoundOn, language, handleToggleSound, handleToggleLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
