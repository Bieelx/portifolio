import React from 'react';
import { useTranslation } from 'react-i18next';
import languageIcon from '../img/translate.svg'; // substitua pelo caminho real do seu ícone

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="language-toggle" onClick={toggleLanguage}>
      <img src={languageIcon} alt="Trocar idioma" />
    </div>
  );
};

export default LanguageToggle;
