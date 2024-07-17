import { createI18n } from 'vue-i18n'
import en from '@/locale/en.json'
import ko from '@/locale/ko.json'

const messages = {
    en,
    ko
}

const i18n = createI18n({
    legacy: false,
    locale: 'en', // 기본 언어
    fallbackLocale : 'en', // 기본 폴백 언어
    messages // 메세지 모음
})

export default i18n