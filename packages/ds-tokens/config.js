import StyleDictionary from 'style-dictionary';
import fs from 'fs';

const TOKENS_TYPE = {
  light: 'ds-tokens-light.css',
  dark: 'ds-tokens-dark.css',
};

StyleDictionary.registerTransform({
  name: 'dark',
  type: 'name',
  filter: (token) => {
    return token.darkValue
  },
  transformer: (token) => {
    token.value = token.darkValue
    return token.name
  },
})

StyleDictionary.registerTransformGroup({
  name: 'css/dark',
  transforms: [...StyleDictionary.transformGroup['css'], 'dark'],
});

const getStyleDictionaryConfig = () => ({
  source: ['src/**/*.json'],
  platforms: {
    'css/light': {
      transformGroup: 'css',
      buildPath: 'lib/css/',
      files: [
        {
          destination: TOKENS_TYPE.light,
          format: 'css/variables',
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
    'css/dark': {
      transformGroup: 'css/dark',
      buildPath: 'lib/css/',
      files: [
        {
          destination: TOKENS_TYPE.dark,
          format: 'css/variables',
          filter: (token) => token.darkValue !== undefined,
          options: {
            selector: '.dark',
            showFileHeader: false,
          },
        },
      ],
    },
  },
});

const tokensFiles = () => {
  Object.values(TOKENS_TYPE).forEach((file) => {
    const FILE_PATH = `lib/css/${file}`;
    if (fs.existsSync(FILE_PATH)) {
      fs.appendFileSync(`lib/css/ds-tokens.css`, fs.readFileSync(FILE_PATH, 'utf-8'));
      fs.rmSync(FILE_PATH);
    }
  });
};

StyleDictionary.extend(getStyleDictionaryConfig()).buildAllPlatforms();
tokensFiles();
