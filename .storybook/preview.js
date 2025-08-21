// این خط مهم‌ترین خط در کل پروژه استایلینگ شماست.
// این دستور به Webpack می‌گوید که تمام دیزاین سیستم را از نقطه ورود اصلی‌اش لود کند.
import '../packages/design-system/src/main.scss';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;