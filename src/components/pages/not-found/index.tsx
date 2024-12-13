import React from 'react';
import { useTranslation } from 'react-i18next';
import { Translations } from 'constants/translations';

const NotFoundPage = () => {
  const [t] = useTranslation();
  return (
    <div>
      <div>
        <h1>{t(Translations.PAGE_NOT_FOUND_TITLE)}</h1>
        <h3>{t(Translations.PAGE_NOT_FOUND_SUBTITLE)}</h3>
        <p>{t(Translations.PAGE_NOT_FOUND_MESSAGE)}</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
