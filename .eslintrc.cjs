module.exports = {
  'extends': ['./configs/react.json'],
  'settings': {
    'react': {
      'version': '18',
    },
  },
  'parserOptions': {
    'requireConfigFile': false,
    'babelOptions': {
      'presets': ['@babel/preset-react'],
    },
  },
  'rules': {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  'root': true,
};