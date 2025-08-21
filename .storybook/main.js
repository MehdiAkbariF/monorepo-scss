/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../packages/design-system/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../packages/ui-components/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    // ما addon-styling-webpack را حذف می‌کنیم چون قوانین را دستی تعریف می‌کنیم
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  
  // 👇 این بخش جدید و بسیار مهم است
 webpackFinal: async (config) => {
  // 1. حذف rule پیش‌فرض برای فایل‌های تصویری که ممکن است تداخل ایجاد کند
  const imageRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.svg')
  );
  if (imageRule) {
    imageRule.exclude = /\.svg$/;
  }

  // 2. اضافه کردن rule جدید برای پردازش SCSS (این بخش صحیح بود)
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  });

  // 3. اضافه کردن rule جدید و تمیز برای پردازش TS/TSX
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
    },
  });

    return config;
  },
};
export default config;