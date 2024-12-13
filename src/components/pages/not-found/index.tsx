import React from 'react';
import 'styles/global.scss';
import RenderforestIcon from 'assets/icons/general/Renderforest.svg';
import { useTranslation } from 'react-i18next';
import { NOT_FOUND_IMAGE_SRC } from 'constants/imageURLs';
import { Translations } from 'constants/translations';

const NotFoundPage = () => {
  const [t] = useTranslation();
  return (
    <div>
      <img
        src={NOT_FOUND_IMAGE_SRC}
        alt={t(Translations.PAGE_NOT_FOUND_IMAGE_ALT)}
        width={608}
        height={432}
      />
      <div>
        <h1>{t(Translations.PAGE_NOT_FOUND_TITLE)}</h1>
        <h3>{t(Translations.PAGE_NOT_FOUND_SUBTITLE)}</h3>
        <p>{t(Translations.PAGE_NOT_FOUND_MESSAGE)}</p>
      </div>
      <a href="/">
        <RenderforestIcon />
        {t(Translations.PAGE_NOT_FOUND_LINK_BACK)}
      </a>
    </div>
  );
};

export default NotFoundPage;
