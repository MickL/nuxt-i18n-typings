import {defineOrganization} from 'nuxt-schema-org/schema';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    // Base config
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2025-01-27',
    modules: [
        '@nuxtjs/i18n',
    ],
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [tailwindcss()],
    },
    experimental: {
        inlineRouteRules: true,
        scanPageMeta: true,
        typedPages: true,
    },
    i18n: {
        vueI18n: './i18n/i18n.config.ts',
        strategy: 'prefix',
        lazy: true,
        defaultLocale: 'de',
        locales: [
            {
                name: 'Deutsch',
                code: 'de',
                file: 'de.ts',
                language: 'de',
            },
            {
                name: 'English',
                code: 'en',
                file: 'en.ts',
                language: 'en',
            },
        ],
        detectBrowserLanguage: {
            useCookie: false,
        },
    },
});
