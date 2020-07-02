import React from 'react';
import { PropTypes } from 'prop-types';
import QrCodeReader from './QrCodeReader';
import SvgClose from '../icons/svgr/SvgClose';
import { FormattedMessage } from 'react-intl/dist/react-intl';

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
const ModalQrCode = ({ open }) => (
 <div className={`modalQrcode ${open ? 'modalQrcode-open' : ''}`}>
   <div className="modalQrcode_container">
      <h2 className="modalQrcode_title">
        <FormattedMessage id="rp.checkout.keycard.qrcode.modal.title" defaultMessage="QR Code" />
      </h2>
      <button type="button" className="modalQrcode_btnClose" >
        <SvgClose />
      </button>
      <QrCodeReader />
    </div>
  </div>
);

ModalQrCode.propTypes = {
 // handleChangeQRButton: PropTypes.function,
  open: PropTypes.bool.isRequired,
};

export default ModalQrCode;
