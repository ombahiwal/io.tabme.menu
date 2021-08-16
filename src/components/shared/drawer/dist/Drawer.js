// "use strict";
/* eslint-disable */

// import {FaShoppingBag} from 'react-icons';
var icons = require('./shoppingbag').default;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

// var _reactFontawesome = require("@fortawesome/react-fontawesome");

// var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(0,0,0,.75);\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top:0;\n  right:0;\n  z-index: 50;\n  transform: ", ";\n  transition: transform 0.1s ease-out;\n @media(min-width:768px){width:0px}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100vh;\n  background: white;\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 80%;\n  min-width: 275px;\n  max-width: 300px;\n  z-index: 200;\n  box-shadow: 1px 0px 7px rgba(0,0,0,0.5);\n  transform: ", ";\n  transition: transform 0.3s ease-out;\n  transition-delay: 0.2s;\n overflow:scroll;\n overflow-x:hidden;  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SidebarMenu = _styledComponents.default.div(_templateObject(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 'translateX(0)' : 'translateX(100%)';
});

var SidebarDrawer = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.isOpen ? 'translateX(0)' : 'translateX(100%)';
});

var Drawer = function Drawer(_ref2) {
  var children = _ref2.children,
      side = _ref2.side;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(SidebarDrawer, {
    isOpen: isOpen,
    onClick: function onClick() {
      return setOpen(!isOpen);
    }
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: function onClick() {
      return setOpen(!isOpen);
    },
    scale: "large",
    color: "terciary",
    variant: "outline",
    radius: "regular",
    icon: _react.default.createElement(icons),
  }), /*#__PURE__*/_react.default.createElement(SidebarMenu, {
    isOpen: isOpen,
    side: side
  }, children));
};

Drawer.propTypes = {
  /**
  * Sets the drawer position on the screen.
  */
  side: _propTypes.default.oneOf(['left', 'right'])
};
Drawer.defaultProps = {
  side: 'right'
};
var _default = Drawer;
exports.default = _default;
// export default _default
//# sourceMappingURL=Drawer.js.map