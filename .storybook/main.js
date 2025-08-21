/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
    stories: [
      "../packages/design-system/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
      {
        // ما addon را به صورت یک آبجکت پیکربندی می‌کنیم
        name: "@storybook/addon-styling-webpack",
        options: {
          // در اینجا قوانین را به صورت دستی تعریف می‌کنیم
          rules: [
            {
              test: /\.scss$/,
              use: [
                "style-loader", // 3. استایل را به DOM تزریق می‌کند
                "css-loader",   // 2. کدهای @import و url() را مدیریت می‌کند
                "sass-loader",  // 1. فایل SCSS را به CSS کامپایل می‌کند
              ],
            },
          ],
        },
      },
    ],
    framework: {
      name: "@storybook/html-webpack5",
      options: {},
    },
    docs: {
      autodocs: "tag",
    },
  };
  export default config;