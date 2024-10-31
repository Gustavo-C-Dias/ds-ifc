import '@ds-ifc/ds-tokens/lib/css/ds-tokens.css';
import '@ds-ifc/ds-components/lib/index.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
