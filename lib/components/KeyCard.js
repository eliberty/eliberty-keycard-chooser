"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _reactIntl = require("react-intl/dist/react-intl");

var _immutable = require("immutable");

var _reactTextMask = _interopRequireDefault(require("react-text-mask"));

var _reactToggleSwitch = _interopRequireDefault(require("react-toggle-switch"));

var _PopoverQuestion = _interopRequireDefault(require("./PopoverQuestion"));

var _PopoverLink = _interopRequireDefault(require("./PopoverLink"));

var _CardNumberField = _interopRequireDefault(require("./CardNumberField"));

var _ModalQrCode = _interopRequireDefault(require("./ModalQrCode"));

var tabKeycardType = _interopRequireWildcard(require("../constants/keycardsType"));

var MaskHelper = _interopRequireWildcard(require("../helpers/MaskHelper"));

var _CardTypeHelper = require("../helpers/CardTypeHelper");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var configs = {
  ZIPCODE: {
    placeholder: '0000',
    mask: [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]
  }
};
/**
 * Keycard
 */

var KeyCard = /*#__PURE__*/function (_React$Component) {
  _inherits(KeyCard, _React$Component);

  var _super = _createSuper(KeyCard);

  _createClass(KeyCard, null, [{
    key: "renderedErrorInputMessage",

    /**
     * Display Error Message
     * @param errorKey
     * @param localItemInfo
     * @returns {*}
     */
    value: function renderedErrorInputMessage(errorKey, localItemInfo) {
      var error = localItemInfo.get('errors', new _immutable.Map()).get(errorKey, '');
      return /*#__PURE__*/_react["default"].createElement("p", {
        className: "errorInputKeyCard"
      }, error);
    }
    /**
     * Constructor
     * @param props
     */

  }]);

  function KeyCard(props) {
    var _this;

    _classCallCheck(this, KeyCard);

    _this = _super.call(this, props);
    _this.state = {
      checkYes: !props.hasSupport,
      checkNo: props.hasSupport,
      hasSupport: props.hasSupport,
      valid: true,
      openModalQR: false
    };
    _this.handleChangeCardNumber = _this.handleChangeCardNumber.bind(_assertThisInitialized(_this));
    _this.handleChangeAutoSuggestCardNumber = _this.handleChangeAutoSuggestCardNumber.bind(_assertThisInitialized(_this));
    _this.changeValidationCard = _this.changeValidationCard.bind(_assertThisInitialized(_this));
    _this.handleChangeCheckSwisspass = _this.handleChangeCheckSwisspass.bind(_assertThisInitialized(_this));
    _this.handleChangeZipcode = _this.handleChangeZipcode.bind(_assertThisInitialized(_this));
    _this.handleChangeQRButton = _this.handleChangeQRButton.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Change boolean value for qrCode modal
   *
   * @param {boolean} value
   *
   */


  _createClass(KeyCard, [{
    key: "handleChangeQRButton",
    value: function handleChangeQRButton(value) {
      this.setState({
        openModalQR: value
      });
    }
  }, {
    key: "handleChangeToggle",

    /**
     * Change local state when click support change value
     * @param checked
     */
    value: function handleChangeToggle(checked) {
      this.setState({
        checkYes: checked,
        checkNo: !checked,
        hasSupport: !checked
      });
      this.props.onChangeCheck(checked ? 'yes' : 'no');
    }
    /**
     * Change card number
     *
     * @param event
     * @param type
     */

  }, {
    key: "handleChangeCardNumber",
    value: function handleChangeCardNumber(event, type) {
      this.handleChangeAutoSuggestCardNumber(event.target.value, type, false);
    }
    /**
     * handle Change Check Swisspass
     */

  }, {
    key: "handleChangeCheckSwisspass",
    value: function handleChangeCheckSwisspass() {
      var type = 'swisspass';
      var property = 'checked';
      var currentId = this.props.localItemInfo.get('skierIndex');
      var newValue = !(0, _CardTypeHelper.getCardNumberTypeElementProperty)(this.props.localItemInfo, type, property);
      this.props.stateUpdateCardNumberTypeProperty(currentId, type, property, newValue);
      this.props.checkValidKeycard(currentId);
    }
    /**
     * handle Change Zipcode
     * @param event
     */

  }, {
    key: "handleChangeZipcode",
    value: function handleChangeZipcode(event) {
      var type = 'swisspass';
      var zipCode = event.target.value;
      var errorKey = 'data.swisspass.zipcode';
      var currentId = this.props.localItemInfo.get('skierIndex');
      this.props.stateUpdateCardNumberTypeProperty(currentId, type, 'zipcode', zipCode);
      var pattern = /^[0-9]{4}$/;
      var isValid = pattern.test(zipCode);
      this.props.stateUpdateCardNumberTypeProperty(currentId, type, 'zipcodeFormatValid', isValid); // Delete errors

      this.props.deleteKeyFieldsErrors(currentId, errorKey);

      if (!isValid) {
        var intl = this.props.intl;
        var errorLabel = intl.formatMessage({
          id: 'rp.checkout.customize.swisspass.zipcode.invalid',
          defaultMessage: 'invalid'
        });
        this.props.updateFieldsErrors(currentId, errorKey, errorLabel);
      } else {
        this.props.checkValidKeycard(currentId);
      }
    }
    /**
     *
     * @param cardnumber
     * @param type
     * @param suggest
     */

  }, {
    key: "handleChangeAutoSuggestCardNumber",
    value: function handleChangeAutoSuggestCardNumber(cardnumber, type) {
      var _this2 = this;

      var suggest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var newValue = '';
      var intl = this.props.intl;
      var errorKey = 'data.cardNumber';
      var errorLabel = intl.formatMessage({
        id: 'rp.checkout.customize.cardnumber.invalid',
        defaultMessage: 'invalid'
      });
      var currentId = this.props.localItemInfo.get('skierIndex');
      var skierIndex = this.props.orderitem.get('skierIndex');
      var validKeycard = (0, _CardTypeHelper.getCardNumberTypeElementProperty)(this.props.localItemInfo, type, 'formatValid');

      if (cardnumber !== undefined && typeof cardnumber !== 'undefined') {
        // Remove spaces on card number
        cardnumber = cardnumber.replace(new RegExp(/( )|(_)/g), ''); // Force SwissPass number to uppercase

        if (type === 'swisspass') {
          cardnumber = cardnumber.toUpperCase();
        } // Update others card types values


        (0, _CardTypeHelper.getCardNumberTypes)(this.props.localItemInfo).forEach(function (item, key) {
          if (![type, 'swisspass'].includes(key)) {
            if (suggest) {
              _this2.props.keycards.forEach(function (element) {
                if (element.get('shortnumber') === cardnumber || element.get('cardnumber') === cardnumber) {
                  newValue = type === 'sd' ? element.get('shortnumber') : element.get('cardnumber');
                }
              });
            }

            _this2.props.stateUpdateCardNumberTypeProperty(skierIndex, key, 'number', newValue);
          }
        }); // Delete errors

        this.props.deleteKeyFieldsErrors(currentId, errorKey);
        var cardType = tabKeycardType[type]; // Save cardNumber value

        this.props.stateUpdateCardNumberTypeProperty(skierIndex, type, 'number', cardnumber); // verification keycard number is correct

        if (cardnumber !== '' || cardnumber !== undefined) {
          validKeycard = MaskHelper.verifyKeycard(cardnumber, cardType);
          this.props.stateUpdateCardNumberTypeProperty(skierIndex, type, 'formatValid', validKeycard);
          this.changeValidationCard(validKeycard);
          this.props.checkValidKeycard(skierIndex); // Keycard mask is valid

          if (!validKeycard) {
            this.props.updateFieldsErrors(currentId, errorKey, errorLabel);
          }
        } else {
          this.props.updateFieldsErrors(currentId, errorKey, errorLabel);
        }
      }
    }
    /**
     *
     * @param value
     */

  }, {
    key: "changeValidationCard",
    value: function changeValidationCard(value) {
      this.setState({
        valid: value
      });
    }
    /**
     * Content for popover link
     * @returns {*}
     */

  }, {
    key: "renderedLabelLinkPopover",
    value: function renderedLabelLinkPopover() {
      return this.props.popoverLink.get('labelKeycardInfo') !== null ? /*#__PURE__*/_react["default"].createElement(_PopoverLink["default"], {
        popoverLink: this.props.popoverLink,
        index: this.props.orderitem.get('skierIndex')
      }) : '';
    }
    /**
     * Render keycard types content (choice or not)
     *
     * @param keycardTypes
     * @returns {XML}
     */

  }, {
    key: "renderedKeyCardTypesContent",
    value: function renderedKeyCardTypesContent(keycardTypes) {
      var _this3 = this;

      return keycardTypes.size > 1 ?
      /*#__PURE__*/
      // Display Double Mask KeyCard
      _react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "nav nav-tabs nav-justified responsive-tabs",
        role: "tablist"
      }, keycardTypes.keySeq().toJS().map(function (type) {
        return _this3.renderedLabelTab(type);
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "tab-content"
      }, keycardTypes.keySeq().toJS().map(function (type) {
        return _this3.renderedSomeInputKeyCards(type);
      }))) : // Display one Input for keyCard : get the first cardNumber type (first key of map)
      this.renderedInputOneKeyCard(keycardTypes.keySeq().first());
    }
    /**
     * Display of the simple input mask
     *
     * @param type
     * @returns {*}
     */

  }, {
    key: "renderedInputOneKeyCard",
    value: function renderedInputOneKeyCard(type) {
      var errorKey = 'data.cardNumber';
      var currentId = this.props.localItemInfo.get('skierIndex');
      var cardNumber = (0, _CardTypeHelper.getCurrentCardNumberValue)(this.props.localItemInfo);

      if (cardNumber === null || typeof cardNumber === 'undefined') {
        cardNumber = '';
      } // Change current cardNumber type


      this.props.updateCurrentCardNumberType(currentId, type);
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: type
      }, this.renderedCardNumberField(type, cardNumber), this.state.checkYes ? this.renderedLabelLinkPopover() : '', cardNumber === '' || !(0, _CardTypeHelper.isCurrentCardNumberValid)(this.props.localItemInfo) ? KeyCard.renderedErrorInputMessage(errorKey, this.props.localItemInfo) : '');
    }
    /**
     * Display labels for inputs - select active input
     * @returns {XML}
     * @param textType
     * @param type
     */

  }, {
    key: "renderedLabelTab",
    value: function renderedLabelTab(type) {
      var _this4 = this;

      var className = 'nav-item';
      var intl = this.props.intl;
      var labelKeycard = "rp.checkout.keycard.label.".concat(type);

      if ((0, _CardTypeHelper.isCurrentCardNumberType)(this.props.localItemInfo, type)) {
        className = "".concat(className, " active");
      }

      return /*#__PURE__*/_react["default"].createElement("li", {
        className: className,
        key: type
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "nav-link text-center",
        "data-toggle": "tab",
        role: "tab",
        href: "type".concat(type),
        onClick: function onClick() {
          // Change current cardNumber type
          _this4.props.updateCurrentCardNumberType(_this4.props.localItemInfo.get('skierIndex'), type);
        }
      }, intl.formatMessage({
        id: labelKeycard,
        defaultMessage: 'Keycard'
      })));
    }
    /**
     * Display of the double input mask
     *
     * @param type
     * @returns {XML}
     */

  }, {
    key: "renderedSomeInputKeyCards",
    value: function renderedSomeInputKeyCards(type) {
      var className = 'tab-pane fade in';
      var aux = "tabKeycardType[type]".concat(type);
      var errorKey = 'data.cardNumber';
      var cardNumber = (0, _CardTypeHelper.getCurrentCardNumberValue)(this.props.localItemInfo);

      if (cardNumber === null || typeof cardNumber === 'undefined') {
        cardNumber = '';
      } // Remove spaces on card number


      cardNumber = cardNumber.replace(new RegExp(/( )|(_)/g), '');
      var isCurrentType = (0, _CardTypeHelper.isCurrentCardNumberType)(this.props.localItemInfo, type); // active tab on select

      if (isCurrentType) {
        className = "".concat(className, " active");
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        id: aux,
        role: "tabpanel",
        key: type
      }, this.renderedCardNumberField(type, cardNumber), this.state.checkYes ? this.renderedLabelLinkPopover() : '', cardNumber === '' || !(0, _CardTypeHelper.isCurrentCardNumberValid)(this.props.localItemInfo) ? KeyCard.renderedErrorInputMessage(errorKey, this.props.localItemInfo) : '', (0, _CardTypeHelper.isCurrentCardNumberType)(this.props.localItemInfo, 'swisspass') ? this.renderedContentForSwisspass() : null);
    }
    /**
     * Render a cardNumber field
     *
     * @param type
     * @param cardNumber
     */

  }, {
    key: "renderedCardNumberField",
    value: function renderedCardNumberField(type, cardNumber) {
      var _this5 = this;

      return /*#__PURE__*/_react["default"].createElement(_CardNumberField["default"], {
        key: type,
        id: type,
        validInput: this.state.valid,
        mode: tabKeycardType[type],
        keycards: this.props.keycards,
        handleChangeCardNumber: function handleChangeCardNumber(event) {
          _this5.handleChangeCardNumber(event, type);
        },
        onChange: function onChange(event) {
          _this5.handleChangeCardNumber(event, type);
        },
        onAutoSuggestSelected: function onAutoSuggestSelected(number) {
          _this5.handleChangeAutoSuggestCardNumber(number, type);
        },
        cardNumber: cardNumber,
        value: cardNumber,
        params: this.props.params
      });
    }
    /**
     * Display content checked no
     * @returns {*}
     */

  }, {
    key: "renderedContentCheckNo",
    value: function renderedContentCheckNo() {
      return this.state.checkNo ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "msgCheckNo"
      }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "rp.checkout.ordercustom.nokeycard",
        defaultMessage: "no card"
      }))) : '';
    }
    /**
     *
     * @returns {null}
     */

  }, {
    key: "renderedContentForSwisspass",
    value: function renderedContentForSwisspass() {
      var _this6 = this;

      var zipcodeValue = (0, _CardTypeHelper.getCardNumberTypeElementProperty)(this.props.localItemInfo, 'swisspass', 'zipcode');

      var mask = _objectSpread({}, configs['ZIPCODE']);

      var intl = this.props.intl;
      var skierIndex = this.props.localItemInfo.get('skierIndex');
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "contentSwisspass"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "wrapperForm"
      }, /*#__PURE__*/_react["default"].createElement(_reactTextMask["default"], _extends({}, mask, {
        name: "zipcode-swiss",
        id: "zipcode-swiss",
        "data-control": "true",
        onChange: function onChange(event) {
          return _this6.handleChangeZipcode(event);
        },
        value: typeof zipcodeValue !== 'undefined' ? zipcodeValue : ''
      })), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "zipcode-swiss",
        className: "control-label"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "rp.checkout.shippingaddress.zipcode",
        defaultMessage: "Zipcode"
      }))), !(0, _CardTypeHelper.isSwissPassPropertyValid)(this.props.localItemInfo, 'zipcodeFormatValid') ? KeyCard.renderedErrorInputMessage('data.swisspass.zipcode', this.props.localItemInfo) : '', /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        checked: (0, _CardTypeHelper.getCardNumberTypeElementProperty)(this.props.localItemInfo, 'swisspass', 'checked'),
        name: "check-swisspass".concat(skierIndex),
        id: "check-swisspass".concat(skierIndex) // onChange={() => this.handleChangeCheckSwisspass()}
        ,
        onClick: function onClick() {
          return _this6.handleChangeCheckSwisspass();
        }
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "check-swisspass".concat(skierIndex),
        onChange: function onChange() {
          return _this6.handleChangeCheckSwisspass(skierIndex);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "rp.checkout.keycard.swisspass.check.text",
        defaultMessage: "I agree with the conditions of SwissPass"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: intl.formatMessage({
            id: 'rp.checkout.keycard.swisspass.link',
            defaultMessage: 'Disclaimer'
          })
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var _this$props = this.props,
          id = _this$props.id,
          keycardPictureSrc = _this$props.keycardPictureSrc,
          keycardTypes = _this$props.keycardTypes,
          fields = _this$props.fields,
          popover = _this$props.popover;
      var hasSupport = this.state.hasSupport;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "blockPopover",
        key: id
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-xs-4 keyCardAreaImage"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: keycardPictureSrc,
        alt: "keycardPicture"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("form", {
        className: "col-xs-12"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "keycard_area_title"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "keycardMessage"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "rp.checkout.keycard.area.question",
        defaultMessage: "I have a card"
      }), /*#__PURE__*/_react["default"].createElement(_PopoverQuestion["default"], {
        popover: popover,
        index: this.props.orderitem.get('skierIndex')
      })), fields.get('cardNumber').get('hasSupport', false) === true ? /*#__PURE__*/_react["default"].createElement(_reactToggleSwitch["default"], {
        on: !hasSupport,
        onClick: function onClick() {
          _this7.handleChangeToggle(hasSupport);
        }
      }) : '')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-xs-8 form-group keyCardAreaForm"
      }, this.renderedContentCheckNo(), this.state.checkYes ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "msgCheckYes"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "qrCodeBtn",
        onClick: function onClick() {
          return _this7.handleChangeQRButton(true);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "rp.checkout.keycard.qrcode.button",
        defaultMessage: "QR Code"
      }), /*#__PURE__*/_react["default"].createElement("span", null)), /*#__PURE__*/_react["default"].createElement(_ModalQrCode["default"] // handleChangeQRButton={this.handleChangeQRButton}
      , {
        open: true
      }), this.renderedKeyCardTypesContent(keycardTypes)) : '')))));
    }
  }]);

  return KeyCard;
}(_react["default"].Component);

KeyCard.propTypes = {
  intl: _propTypes.PropTypes.object.isRequired,
  id: _propTypes.PropTypes.string.isRequired,
  // index
  keycardPictureSrc: _propTypes.PropTypes.string.isRequired,
  // keycard picture src
  keycardTypes: _propTypes.PropTypes.object.isRequired,
  // keycards to display the tabs
  keycards: _propTypes.PropTypes.object.isRequired,
  params: _propTypes.PropTypes.object.isRequired,
  // generic params
  orderitem: _propTypes.PropTypes.object.isRequired,
  fields: _propTypes.PropTypes.object.isRequired,
  popover: _propTypes.PropTypes.object.isRequired,
  // content for popover info keycard
  popoverLink: _propTypes.PropTypes.object.isRequired,
  // content for popover link keycard
  localItemInfo: _propTypes.PropTypes.object.isRequired,
  // current local Item
  onChangeCheck: _propTypes.PropTypes.func.isRequired,
  // function to make changes when checking
  updateFieldsErrors: _propTypes.PropTypes.func.isRequired,
  // function to update fields errors
  deleteKeyFieldsErrors: _propTypes.PropTypes.func.isRequired,
  // function to delete key on fields errors
  updateCurrentCardNumberType: _propTypes.PropTypes.func.isRequired,
  // function to update current cardNumber type
  updateValidField: _propTypes.PropTypes.func.isRequired,
  //
  hasSupport: _propTypes.PropTypes.bool.isRequired,
  // boolean to know if support exists
  stateUpdateCardNumberTypeProperty: _propTypes.PropTypes.func.isRequired,
  // function to update cardNumber property value
  checkValidKeycard: _propTypes.PropTypes.func.isRequired // function to check complete cardCardNumber valid

};

var _default = (0, _reactIntl.injectIntl)(KeyCard);

exports["default"] = _default;
//# sourceMappingURL=KeyCard.js.map