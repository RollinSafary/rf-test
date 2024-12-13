import enJSON from 'assets/i18n/en.json'
import { initReactI18next } from 'react-i18next'
import { type Translations } from 'constants/translations'
import i18next, { InitOptions, Resource } from 'i18next'

type LocalizationJSON = Record<Translations, string>

const i18nOptions: InitOptions = {
  resources: {
    en: {
      translation: enJSON as LocalizationJSON,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
}

const initI18n = async (additionalResources: Resource = {}) => {
  await i18next
    .use(initReactI18next)
    .init({ ...i18nOptions, ...additionalResources })
}

initI18n()
