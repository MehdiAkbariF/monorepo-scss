// این خط مهم‌ترین خط در کل پروژه استایلینگ شماست.
// این دستور به Webpack می‌گوید که تمام دیزاین سیستم را از نقطه ورود اصلی‌اش لود کند.
import '../packages/design-system/src/main.scss';
import { withThemeByClassName } from '@storybook/addon-themes';

/** @type { import('@storybook/react').Preview } */ // <-- تغییر از html به react
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
  decorators: [
    withThemeByClassName({
      themes: {
        light: '', // کلاس برای حالت روشن خالی است
        dark: 'dark', // کلاس برای حالت تاریک .dark است
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;