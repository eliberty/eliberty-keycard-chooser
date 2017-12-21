import React from 'react';
import PropTypes from 'prop-types';
import KeyCardArea from './KeyCardArea/KeyCardArea';
// import '../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
// import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap';

/**
 * Keycard Chooser
 */
const KeycardChooser = props => (
  <div>
    <KeyCardArea
      key={props.localItemInfo.get('index')}
      keycardTypes={props.keycardTypes}
      keycards={props.keycards}
      params={props.params}
      orderitem={props.orderitem}
      changeCardNumber={props.changeCardNumber}
      onChangeCheck={props.onChangeCheck}
      itemFieldsDefinition={props.itemFieldsDefinition}
      popover={props.popover}
      popoverLink={props.popoverLink}
      hasSupport={props.hasSupport}
      localItemInfo={props.localItemInfo}
      updateFieldsErrors={props.updateFieldsErrors}
      deleteKeyFieldsErrors={props.deleteKeyFieldsErrors}
      updateKeycardsMask={props.updateKeycardsMask}
    />
  </div>
);

KeycardChooser.propTypes = {
  keycardTypes: PropTypes.object.isRequired, // keycards to display the tabs
  keycards: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired, // generic params
  orderitem: PropTypes.object.isRequired,
  itemFieldsDefinition: PropTypes.object.isRequired,
  popover: PropTypes.object.isRequired, // content for popover info keycard
  popoverLink: PropTypes.object.isRequired, // content for popover link keycard
  localItemInfo: PropTypes.object.isRequired, // current localItem
  changeCardNumber: PropTypes.func.isRequired, // function to change cardnumber of item
  onChangeCheck: PropTypes.func.isRequired, // function to make changes when checking
  updateFieldsErrors: PropTypes.func.isRequired, // function to update fields errors
  deleteKeyFieldsErrors: PropTypes.func.isRequired, // function to delete key on fields errors
  updateKeycardsMask: PropTypes.func.isRequired, // function to update elements on a keycardsMask
  hasSupport: PropTypes.bool.isRequired, // boolean indicating support element
};

export default KeycardChooser;
