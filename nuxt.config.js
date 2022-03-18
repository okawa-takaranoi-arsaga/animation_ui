export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'arsaga_animation_ui',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400;500&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/style/app.scss', lang: 'scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module',
    '@nuxt/postcss8', // storybookには。これがいる
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  storybook: {
    // 追加のアドオンなどあれば
    addons: ['@storybook/addon-controls', '@storybook/addon-notes'],
    // ポート指定
    port: 5555,
    decorators: ['<div><story/></div>'],
    // 背景色や表示位置、デバイスの設定など
    parameters: {
      // 背景色：デフォルトの色を使う場合
      backgrounds: {
        default: 'pink', // light or dark
      },
      // 背景色：カスタマイズする場合
      backgrounds: {
        default: 'pink',
        values: [
          {
            name: 'brown',
            value: '#56371B',
          },
          {
            name: 'light',
            value: '#fff',
          },
          {
            name: 'dark',
            value: '#333',
          },
          {
            name: 'pink',
            value: 'pink',
          },
        ],
      },
      // Description, Default, Controlsカラムの表示
      controls: {
        expanded: true,
      },
      // 表示位置
      layout: 'centered', // centered:中央表示, padded:コンポーネントに余白付与, fullscreen:幅いっぱい
    },
  },
}
