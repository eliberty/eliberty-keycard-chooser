import { Map, List } from 'immutable';

/**
 * Return the cardNumber field (properties)
 *
 * @param localItemInfo
 */
export function getCardNumberField(localItemInfo) {
  return localItemInfo
    .get('fields', new Map())
    .get('cardNumber', new Map());
}

/**
 * Return if swissPass zipCode is valid
 *
 * @param localItemInfo
 * @param property
 */
export function isSwissPassPropertyValid(localItemInfo, property) {
  return getCardNumberTypeElement(localItemInfo, 'swisspass')
    .get(property, false);
}

/**
 * Check if current cardNumber type is corresponding to asked type
 *
 * @param localItemInfo
 * @param type
 * @returns {boolean}
 */
export function isCurrentCardNumberType(localItemInfo, type) {
  return getCurrentCardNumberType(localItemInfo) === type;
}

/**
 * Get current cardNumber type
 *
 * @param localItemInfo
 */
export function getCurrentCardNumberType(localItemInfo) {
  return getCardNumberField(localItemInfo).get('currentType', '');
}

/**
 * Get the current cardType element
 *
 * @param localItemInfo
 */
export function getCurrentCardTypeElement(localItemInfo) {
  return getCardNumberTypeElement(localItemInfo, getCurrentCardNumberType(localItemInfo));
}

/**
 * Get cardNumber value by current type
 *
 * @param localItemInfo
 * @param property
 */
export function getCurrentCardNumberValue(localItemInfo, property = 'number') {
  const currentCardTypeElement = getCurrentCardTypeElement(localItemInfo);
  return currentCardTypeElement.get(property, '');
}

/**
 * Return the cardNumber types available
 *
 * @param localItemInfo
 */
export function getCardNumberTypes(localItemInfo) {
  return getCardNumberField(localItemInfo).get('types', new List());
}

/**
 * Get cardType element
 *
 * @param localItemInfo
 * @param type
 */
export function getCardNumberTypeElement(localItemInfo, type) {
  return getCardNumberField(localItemInfo)
    .get('types', new List())
    .get(type, new Map());
}

/**
 * Get cardNumber element property value
 *
 * @param localItemInfo
 * @param type
 * @param property
 */
export function getCardNumberTypeElementProperty(localItemInfo, type, property) {
  return getCardNumberTypeElement(localItemInfo, type).get(property);
}

/**
 * Return if cardNumber is valid
 *
 * @param localItemInfo
 * @returns {*}
 */
export function isCurrentCardNumberValid(localItemInfo) {
  return getCurrentCardTypeElement(localItemInfo).get('formatValid', false)
    && getCardNumberField(localItemInfo).get('valid', false);
}
