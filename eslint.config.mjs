import pluginHTML from "eslint-plugin-html"

export default [
  {
    rules: {
      "prefer-const": "error",
      semi: ['error', 'never'],
      indent: ["error", 2, { "SwitchCase": 1 }] 
    }
  },
  pluginHTML
]