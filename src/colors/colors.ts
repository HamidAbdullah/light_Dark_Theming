const SUN_FLOWER = '#f1c40f';
const ASBESTOS = '#7f8c8d';
const MIDNIGHT_BLUE = '#2c3e50';
const EMERALD = '#2ecc71';
const ALIZARIN = '#e74c3c';
const CLOUDS = '#ecf0f1';
const SILVER = '#bdc3c7';

const common = {
  PRIMARY: SUN_FLOWER,
  SUCCESS: EMERALD,
  ERROR: ALIZARIN,
};

const colors = {
  light: {
    ...common,
    BACKGROUND: CLOUDS,
    TEXT: MIDNIGHT_BLUE,
    TEXT_SECONDARY: ASBESTOS,
  },
  dark: {
    ...common,
    BACKGROUND: MIDNIGHT_BLUE,
    TEXT: CLOUDS,
    TEXT_SECONDARY: SILVER,
  },
};

export default colors;
