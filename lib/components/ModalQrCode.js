"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _QrCodeReader = _interopRequireDefault(require("./QrCodeReader"));

var _SvgClose = _interopRequireDefault(require("../icons/svgr/SvgClose"));

var _reactIntl = require("react-intl/dist/react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Display a modal
 *
 * @param {function} handleChangeQRButton
 * @param {boolean} open
 *
 * @returns {*}
 *
 * @constructor
 */
var ModalQrCode = function ModalQrCode(_ref) {
  var open = _ref.open;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modalQrcode ".concat(open ? 'modalQrcode-open' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modalQrcode_container"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "modalQrcode_title"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "rp.checkout.keycard.qrcode.modal.title",
    defaultMessage: "QR Code"
  })), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "modalQrcode_btnClose"
  }, /*#__PURE__*/_react["default"].createElement(_SvgClose["default"], null)), /*#__PURE__*/_react["default"].createElement(_QrCodeReader["default"], null)));
};

ModalQrCode.propTypes = {
  // handleChangeQRButton: PropTypes.function,
  open: _propTypes.PropTypes.bool.isRequired
};
var _default = ModalQrCode;
exports["default"] = _default;
//# sourceMappingURL=ModalQrCode.js.map