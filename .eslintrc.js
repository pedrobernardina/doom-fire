module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  "parser": "babel-eslint",
  'globals': {
    'ENV': true,
    'it': true,
  },
  'extends': ['eslint:recommended', 'airbnb'],
  'parserOptions': {
    'sourceType': 'module',
  },
  'rules': {
    'indent': ['error', 2], // 2 spaces indentation
    'linebreak-style': ['error', 'unix'], // \n instead of \r\n
    'quotes': ['error', 'single'], // single quotes preferred
    'jsx-quotes': ['error', 'prefer-single'],
    'semi': ['error', 'always'], // always use semicolons
    'guard-for-in': 'off', // Overrides Airbnb: removes need to check if object has own property on for...in loops
    'keyword-spacing': 'off', // Overrides Airbnb: no space after if/else or for statements
    'brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }], // Overrides Airbnb: statements on separated lines
    'no-continue': 0, // allows continue
    'no-restricted-syntax': [ // Overrides Airbnb: removes error when using for... in or for...of
      'error',
      {
        'selector': 'LabeledStatement',
        'message': 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        'selector': 'WithStatement',
        'message': '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      },
    ],
    'react/forbid-prop-types': 0, // Overrides Airbnb: allows all proptypes
    'max-len': ["error", { "code": 120, "tabWidth": 2 }]
  },
}
