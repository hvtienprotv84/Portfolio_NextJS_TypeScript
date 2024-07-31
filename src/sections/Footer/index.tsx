import { useContext } from 'react';
import { SettingsContext } from 'contexts/SettingsContext';
import { Container } from './styles';
import texts from './text-content';

export const Footer = () => {
  const { language } = useContext(SettingsContext);

  return (
    <Container>
      <p>{texts[language].text}</p>
    </Container>
  );
};
