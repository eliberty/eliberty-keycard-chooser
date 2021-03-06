"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyKeycard = verifyKeycard;

var tabKeycardType = _interopRequireWildcard(require("../constants/keycardsType"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Function to check the validation of the card number entered according to the type of card
 * @param cardNumber
 * @param card
 * @returns {boolean}
 */
function verifyKeycard(cardNumber, card) {
  var patternSD = /^[0-9]{1,2}-[0-9]{20}-[0-9]$/;
  var patternTA = /^([a-zA-Z0-9]{8})[ -]([a-zA-Z0-9]{3})[ -]([a-zA-Z0-9]{3})$/;
  var patternALFI = /^([0-9]{5})[ -]([0-9]{5})[ -]([0-9]{4})$/;
  var patternOPEN = /^([0-9]{9})[ -]([0-9]{1})$/;
  var patternSWISSPASS = /^([S|s]{1})([0-9]{2})[ -]([0-9]{3})[ -]([0-9]{3})[ -]([0-9]{3})$/;
  var patternVERBIER = /^[A-B]{1}[0-9]{6}$/; // verification the card type

  switch (card) {
    case tabKeycardType.sd:
      {
        if (cardNumber.length < 25 || !patternSD.test(cardNumber) || ['01', '1', '30', '25'].indexOf(cardNumber.split('-')[0]) === -1) {
          return false;
        }

        break;
      }

    case tabKeycardType.ta:
      {
        if (cardNumber.length < 16 || !patternTA.test(cardNumber)) {
          return false;
        }

        break;
      }

    case tabKeycardType.alfi:
      {
        if (cardNumber.length < 16 || !patternALFI.test(cardNumber)) {
          return false;
        }

        break;
      }

    case tabKeycardType.open:
      {
        if (!patternOPEN.test(cardNumber)) {
          return false;
        }

        break;
      }

    case tabKeycardType.swisspass:
      {
        if (cardNumber.length < 15 || !patternSWISSPASS.test(cardNumber)) {
          return false;
        }

        break;
      }

    case tabKeycardType.verbier:
      {
        return patternVERBIER.test(cardNumber);
      }

    default:
      {
        break;
      }
  }

  return true;
}
//# sourceMappingURL=MaskHelper.js.map