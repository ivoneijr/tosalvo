import { create } from 'zustand';

type AllowedLanguages = 'pt-br' | 'en-us';

type Store = {
  state: {
    currentLanguage: AllowedLanguages;
  };
  actions: {
    setCurrentLanguage: (lang: AllowedLanguages) => void;
  };
};

export const useI18n = create<Store>((set) => ({
  state: {
    currentLanguage: 'pt-br',
  },
  actions: {
    setCurrentLanguage: (lang: AllowedLanguages) =>
      set((state) => ({
        state: {
          ...state,
          currentLanguage: lang,
        },
      })),
  },
}));
