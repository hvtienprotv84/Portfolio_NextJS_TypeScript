import { SettingsContext } from 'contexts/SettingsContext';
import { useContext } from 'react';
import useSoundLib from 'use-sound';

export const useSound = (sound: string) => {
  const { isSoundOn } = useContext(SettingsContext);

  const [play] = useSoundLib(sound);

  if (!isSoundOn) {
    return [() => {}];
  }

  return [play] as any;
};
