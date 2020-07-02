import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import SvgCross from '../icons/svgr/SvgCross';

/**
 *
 *
 * @returns {*}
 *
 * @constructor
 */
const QrCodeReader = () => {
  const [delay, setDelay] = useState(500);
  const [result, setResult] = useState('noResult',);

  const handleLoad = data => {
    console.log('LOAD', data);
  };

  const handleScan = data => {
    console.log('SCAN', data);
    if (data) {
      setResult(data);
    }
  };

  const handleError = error => {
    console.log('ERROR', error);
    setResult('noDeviceFound');
  };

  return (
     <div className="qrCodeReader">
       <React.StrictMode>
         <QrReader
            className="qrCodeReader__content"
            delay={delay}
            onLoad={handleLoad}
            onError={handleError}
            onScan={handleScan}
            legacyMode={false}
            facingMode={"user"}
         />

         {result !== 'noResult' && (
           <div className='qrCodeReader__message'>
             <SvgCross />
             <div className='qrCodeReader__message-error'>
               {result}
               {/*{result !== 'noResult' ? (*/}
               {/*  <p className="qrCodeReader__message__description">Webcam non prise en charge</p>*/}
               {/*) : (*/}
               {/*  <div>*/}
               {/*    <p className="qrCodeReader__message__origin">Code lu : http://www.lemonde.fr</p>*/}
               {/*    <p className="qrCodeReader__message__description">Ce code n'est pas valide, réesayer</p>*/}
               {/*  </div>*/}
               {/*)}*/}
                 <div>
                   <p className="qrCodeReader__message__origin">Code lu : http://www.lemonde.fr</p>
                   <p className="qrCodeReader__message__description">Ce code n'est pas valide, réesayer</p>
                 </div>
             </div>
           </div>
         )}
       </React.StrictMode>
     </div>
  );
}

export default QrCodeReader;
