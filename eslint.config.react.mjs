export default {
  "rules": {
    "new-cap": "off",
    "@babel/new-cap": "error",

    "css-modules/no-undef-class": 2,
    "css-modules/no-unused-class": 2,

    "jsx-a11y/accessible-emoji": "error",
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/interactive-supports-focus": "error",
    "jsx-a11y/label-has-for": [
      "off",
      {
        "required": { "some": ["nesting", "id"] },
        "allowChildren": false
      }
    ],
    "jsx-a11y/lang": "error",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-autofocus": "warn",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
    "jsx-a11y/no-noninteractive-element-interactions": [
      "off",
      {
        "handlers": [
          "onKeyDown",
          "onKeyPress",
          "onKeyUp",
          "onFocus",
          "onBlur",
          "onChange",
          "onInput",
          "onSubmit",
          "onClick",
          "onContextMenu",
          "onDblClick",
          "onDoubleClick",
          "onDrag",
          "onDragEnd",
          "onDragEnter",
          "onDragExit",
          "onDragLeave",
          "onDragOver",
          "onDragStart",
          "onDrop",
          "onMouseDown",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseOut",
          "onMouseOver",
          "onMouseUp",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart"
        ],
        "form": [
          "onSubmit"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      "error",
      {
        "ul": [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid"
        ],
        "ol": [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid"
        ],
        "li": [
          "menuitem",
          "option",
          "row",
          "tab",
          "treeitem"
        ],
        "table": [
          "grid"
        ],
        "td": [
          "gridcell"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-tabindex": "error",
    "jsx-a11y/no-onchange": "error",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",
    "jsx-a11y/tabindex-no-positive": "error",

    "react/default-props-match-prop-types": ["error", { "allowRequiredDefaults": false }],
    "react/display-name": "off",
    "react/forbid-component-props": "off",
    "react/forbid-elements": "off",
    "react/forbid-foreign-prop-types": "error",
    "react/forbid-prop-types": "off",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/jsx-curly-spacing": ["error", "never"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }],
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-fragments": ["error", "element"],
    "react/jsx-handler-names": [
      "error",
      {
        "eventHandlerPrefix": "on",
        "eventHandlerPropPrefix": "on"
      }
    ],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-max-props-per-line": ["error", { "maximum": { "single": 3, "multi": 1 }}],
    "react/jsx-no-bind": "warn",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-props": [
      "error",
      {
        "callbacksLast": true,
        "shorthandFirst": true,
        "reservedFirst": true
      }
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never"
      }
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "error",
    "react/no-array-index-key": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "off",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "warn",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": ["error", { "ignoreStateless": true }],
    "react/no-render-return-value": "error",
    "react/no-set-state": "off",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-prop-types": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-default-props": ["error", { "forbidDefaultForRequired": true }],
    "react/require-optimization": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": [
      "error",
      {
        "order": [
          "displayName",
          "propTypes",
          "defaultProps",
          "contextType",
          "contextTypes",
          "childContextTypes",
          "static-variables",
          "static-methods",
          "lifecycle",
          "refs",
          "everything-else",
          "/^on.+$/",
          "/^render.+$/",
          "render"
        ],
        "groups": {
          "lifecycle": [
            "mixins",
            "statics",
            "constructor",
            "getDefaultProps",
            "state",
            "instance-variables",
            "getInitialState",
            "getChildContext",
            "getDerivedStateFromProps",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount"
          ],
          "refs": [
            "/.+Node$/",
            "/^set?(.+)Ref$/"
          ]
        }
      }
    ],
    "react/sort-default-props": "error",
    "react/sort-prop-types": [
      "error",
      {
        "requiredFirst": true,
        "callbacksLast": true
      }
    ],
    "react/style-prop-object": 1,
    "react/void-dom-elements-no-children": "error",

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
