module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-scss',
    'stylelint-rscss/config', // rscss命名規則
    'stylelint-config-prettier', // コードフォーマッター　Prettierと設定がコンフリクトしない様にする設定。
    'stylelint-config-recess-order', // プロパティの順番を決める
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {},
}
